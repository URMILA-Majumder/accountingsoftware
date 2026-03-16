// Modern JavaScript for Accounting Software

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

// ==================== MOBILE DETECTION ====================

function mobileView() {
    return window.innerWidth <= 768;
}

function closeDropdowns() {
    document.querySelectorAll('.header .navbar ul ul').forEach(submenu => {
        submenu.style.removeProperty('display');
        submenu.classList.remove('active');
    });
    
    // Reset any active parent indicators
    document.querySelectorAll('.header .navbar li.active').forEach(li => {
        li.classList.remove('active');
    });
}

function removeNavbar() {
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    closeDropdowns();
    
    // Remove overlay if exists
    const overlay = document.querySelector('.nav-overlay');
    if (overlay) overlay.remove();
}

// ==================== MOBILE MENU TOGGLE ====================

// Toggle mobile menu
if (menuBtn) {
    menuBtn.onclick = (e) => {
        e.preventDefault();
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('fa-times');
        
        if (navbar.classList.contains('active')) {
            // Create overlay for mobile
            if (mobileView() && !document.querySelector('.nav-overlay')) {
                const overlay = document.createElement('div');
                overlay.className = 'nav-overlay';
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(3px);
                    z-index: 999;
                    animation: fadeIn 0.3s ease;
                `;
                overlay.onclick = removeNavbar;
                document.body.appendChild(overlay);
            }
        } else {
            const overlay = document.querySelector('.nav-overlay');
            if (overlay) overlay.remove();
            closeDropdowns();
        }
    };
}

// ==================== CLICK OUTSIDE TO CLOSE ====================

document.onclick = (e) => {
    if (mobileView() && navbar.classList.contains('active')) {
        if (e.target !== menuBtn && !navbar.contains(e.target) && !menuBtn.contains(e.target)) {
            removeNavbar();
        }
    }
};

// ==================== SCROLL HANDLING ====================

// Close menu on scroll
window.onscroll = () => {
    if (mobileView() && navbar.classList.contains('active')) {
        removeNavbar();
    }
    
    // Add shadow to header on scroll
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.classList.remove('scrolled');
            header.style.boxShadow = 'var(--shadow-lg)';
        }
    }
};

// ==================== DROPDOWN HANDLING ====================

// Handle dropdown toggles for mobile
document.querySelectorAll('.header .navbar a[href="#"]').forEach(anchor => {
    anchor.onclick = (e) => {
        e.preventDefault();
        
        if (mobileView()) {
            let parentLi = anchor.closest('li');
            let submenu = parentLi ? parentLi.querySelector('ul') : null;
            
            if (submenu) {
                // Close other open submenus at same level
                let siblings = parentLi.parentElement.querySelectorAll('li > ul');
                siblings.forEach(menu => {
                    if (menu !== submenu) {
                        menu.style.display = 'none';
                        menu.classList.remove('active');
                        menu.closest('li')?.classList.remove('active');
                    }
                });
                
                // Toggle current submenu
                if (submenu.style.display === 'block' || submenu.classList.contains('active')) {
                    submenu.style.display = 'none';
                    submenu.classList.remove('active');
                    parentLi.classList.remove('active');
                } else {
                    submenu.style.display = 'block';
                    submenu.classList.add('active');
                    parentLi.classList.add('active');
                    
                    // Animate submenu
                    submenu.style.animation = 'slideDown 0.3s ease';
                }
                
                // Update arrow icon
                const icon = anchor.querySelector('i.fa-angle-down');
                if (icon) {
                    if (submenu.style.display === 'block') {
                        icon.style.transform = 'rotate(180deg)';
                    } else {
                        icon.style.transform = 'rotate(0deg)';
                    }
                }
            }
        }
    };
});

// Desktop hover handling with smooth animations
if (!mobileView()) {
    document.querySelectorAll('.header .navbar li').forEach(li => {
        li.addEventListener('mouseenter', function() {
            const submenu = this.querySelector('ul');
            if (submenu) {
                submenu.style.animation = 'slideDown 0.3s ease';
                submenu.style.display = 'block';
                
                // Add active class to parent
                this.classList.add('hover');
                
                // Rotate icon
                const icon = this.querySelector('a i.fa-angle-down');
                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            }
        });
        
        li.addEventListener('mouseleave', function() {
            const submenu = this.querySelector('ul');
            if (submenu) {
                submenu.style.display = 'none';
                this.classList.remove('hover');
                
                // Reset icon
                const icon = this.querySelector('a i.fa-angle-down');
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
}

// ==================== SUBMENU CLICK HANDLING ====================

// Prevent menu from closing when clicking inside submenu on mobile
document.querySelectorAll('.header .navbar ul ul').forEach(submenu => {
    submenu.onclick = (e) => {
        if (mobileView()) {
            e.stopPropagation();
        }
    };
});

// ==================== TOUCH SUPPORT ====================

// Add touch support for mobile devices
if (menuBtn) {
    menuBtn.ontouchstart = (e) => {
        e.preventDefault();
        menuBtn.onclick(e);
    };
}

// ==================== KEYBOARD NAVIGATION ====================

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        if (mobileView() && navbar.classList.contains('active')) {
            removeNavbar();
        }
        
        // Close any open modals
        const openModals = document.querySelectorAll('.modal[style*="display: block"]');
        openModals.forEach(modal => {
            const closeBtn = modal.querySelector('.close-modal');
            if (closeBtn) closeBtn.click();
        });
    }
    
    // Tab navigation for accessibility
    if (e.key === 'Tab') {
        // Highlight focused element
        setTimeout(() => {
            const focused = document.activeElement;
            if (focused && !focused.classList.contains('keyboard-focus')) {
                document.querySelectorAll('.keyboard-focus').forEach(el => {
                    el.classList.remove('keyboard-focus');
                });
                focused.classList.add('keyboard-focus');
            }
        }, 50);
    }
    
    // Alt key shortcuts
    if (e.altKey) {
        switch(e.key) {
            case 'h': // Alt + H - Go to home
                e.preventDefault();
                window.location.href = 'index.html';
                break;
            case 'a': // Alt + A - Go to about
                e.preventDefault();
                window.location.href = 'about.html';
                break;
            case 'c': // Alt + C - Go to contact
                e.preventDefault();
                window.location.href = 'contact.html';
                break;
        }
    }
});

// ==================== WINDOW RESIZE HANDLING ====================

// Handle window resize
window.onresize = () => {
    if (!mobileView() && navbar.classList.contains('active')) {
        removeNavbar();
    }
    
    if (!mobileView()) {
        // Reset all submenu displays on desktop
        document.querySelectorAll('.header .navbar ul ul').forEach(submenu => {
            submenu.style.removeProperty('display');
            submenu.classList.remove('active');
            
            // Reset icons
            const icon = submenu.closest('li')?.querySelector('a i.fa-angle-down');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
        });
        
        // Remove overlay if exists
        const overlay = document.querySelector('.nav-overlay');
        if (overlay) overlay.remove();
    }
};

// ==================== ACTIVE LINK HIGHLIGHTING ====================

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.header .navbar a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            
            // Remove active class from all
            document.querySelectorAll('.header .navbar a').forEach(l => {
                l.classList.remove('active');
            });
            
            // Add active class to current
            link.classList.add('active');
            
            // If in dropdown, highlight parent
            const parentLi = link.closest('li');
            if (parentLi && parentLi.closest('ul')?.parentElement?.closest('li')) {
                const parentLink = parentLi.closest('ul')?.parentElement?.querySelector('a');
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', () => {
    highlightCurrentPage();
    addAccessibilityFeatures();
    setupSmoothScroll();
});

// ==================== ACCESSIBILITY FEATURES ====================

function addAccessibilityFeatures() {
    // Add ARIA attributes to navigation
    const nav = document.querySelector('.header .navbar');
    if (nav) {
        nav.setAttribute('aria-label', 'Main navigation');
    }
    
    // Add ARIA to menu button
    if (menuBtn) {
        menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        menuBtn.setAttribute('aria-expanded', 'false');
        
        // Update ARIA when menu toggles
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isActive = navbar.classList.contains('active');
                    menuBtn.setAttribute('aria-expanded', isActive);
                }
            });
        });
        
        observer.observe(navbar, { attributes: true });
    }
    
    // Add ARIA to dropdowns
    document.querySelectorAll('.header .navbar li').forEach((li, index) => {
        const hasDropdown = li.querySelector('ul');
        if (hasDropdown) {
            const link = li.querySelector('a');
            link.setAttribute('aria-haspopup', 'true');
            link.setAttribute('aria-expanded', 'false');
            link.setAttribute('id', `nav-dropdown-${index}`);
            
            const dropdown = li.querySelector('ul');
            dropdown.setAttribute('aria-labelledby', `nav-dropdown-${index}`);
            
            // Update ARIA on hover/click
            li.addEventListener('mouseenter', () => {
                if (!mobileView()) {
                    link.setAttribute('aria-expanded', 'true');
                }
            });
            
            li.addEventListener('mouseleave', () => {
                if (!mobileView()) {
                    link.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });
    
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-gradient);
        color: white;
        padding: 10px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ==================== SMOOTH SCROLLING ====================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (mobileView() && navbar.classList.contains('active')) {
                    removeNavbar();
                }
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ==================== PAGE TRANSITIONS ====================

// Add fade-in effect to page transitions
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');
});

// Fade out on link clicks (for internal links)
document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('http')) {
            e.preventDefault();
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});

// ==================== ANIMATION STYLES ====================

// Add animation styles if not already present
if (!document.querySelector('#nav-animation-styles')) {
    const style = document.createElement('style');
    style.id = 'nav-animation-styles';
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .header {
            transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        
        .header .navbar ul ul {
            animation: slideDown 0.3s ease;
            transform-origin: top;
        }
        
        .header .navbar li.hover > a i.fa-angle-down {
            transform: rotate(180deg);
        }
        
        .keyboard-focus {
            outline: 3px solid #667eea !important;
            outline-offset: 2px;
            border-radius: 4px;
        }
        
        .skip-to-content:focus {
            top: 0;
        }
        
        body {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        
        body.page-loaded {
            opacity: 1;
        }
        
        @media (max-width: 768px) {
            .header .navbar.active {
                animation: slideDown 0.3s ease;
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== ERROR HANDLING ====================

// Handle image loading errors
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'images/placeholder.jpg';
        this.alt = 'Image failed to load';
    });
});

// ==================== PERFORMANCE OPTIMIZATION ====================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Make functions globally available
window.mobileView = mobileView;
window.removeNavbar = removeNavbar;