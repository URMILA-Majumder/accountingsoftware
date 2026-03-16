// Modern Accounting System JavaScript

// ==================== DATA STORAGE ====================
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let ledgers = JSON.parse(localStorage.getItem('ledgers')) || [
    // Cash and Bank Accounts (Asset)
    { id: 1, name: 'cash', type: 'asset', category: 'cash', balance: 0 },
    { id: 2, name: 'bank - sbl', type: 'asset', category: 'bank', balance: 0 },        // Sonali Bank
    { id: 3, name: 'bank - jbl', type: 'asset', category: 'bank', balance: 0 },        // Janata Bank
    { id: 4, name: 'bank - agrani', type: 'asset', category: 'bank', balance: 0 },     // Agrani Bank
    { id: 5, name: 'bank - rupali', type: 'asset', category: 'bank', balance: 0 },     // Rupali Bank
    { id: 6, name: 'bank - bdbl', type: 'asset', category: 'bank', balance: 0 },       // Bangladesh Development Bank
    { id: 7, name: 'bank - bkash', type: 'asset', category: 'bank', balance: 0 },      // bKash
    { id: 8, name: 'bank - nagad', type: 'asset', category: 'bank', balance: 0 },      // Nagad
    { id: 9, name: 'bank - rocket', type: 'asset', category: 'bank', balance: 0 },     // Rocket
    { id: 10, name: 'bank - dbbl', type: 'asset', category: 'bank', balance: 0 },      // Dutch-Bangla Bank
    { id: 11, name: 'bank - ebbl', type: 'asset', category: 'bank', balance: 0 },      // Eastern Bank
    { id: 12, name: 'bank - ibbl', type: 'asset', category: 'bank', balance: 0 },      // Islami Bank
    { id: 13, name: 'bank - pubali', type: 'asset', category: 'bank', balance: 0 },    // Pubali Bank
    { id: 14, name: 'bank - ucb', type: 'asset', category: 'bank', balance: 0 },       // United Commercial Bank
    { id: 15, name: 'bank - city', type: 'asset', category: 'bank', balance: 0 },      // City Bank
    { id: 16, name: 'bank - ncc', type: 'asset', category: 'bank', balance: 0 },       // NCC Bank
    { id: 17, name: 'bank - prime', type: 'asset', category: 'bank', balance: 0 },     // Prime Bank
    { id: 18, name: 'bank - mercantile', type: 'asset', category: 'bank', balance: 0 }, // Mercantile Bank
    { id: 19, name: 'bank - mutual', type: 'asset', category: 'bank', balance: 0 },    // Mutual Trust Bank
    { id: 20, name: 'bank - standard', type: 'asset', category: 'bank', balance: 0 },  // Standard Bank
    { id: 21, name: 'bank - one', type: 'asset', category: 'bank', balance: 0 },       // One Bank
    { id: 22, name: 'bank - exim', type: 'asset', category: 'bank', balance: 0 },      // EXIM Bank
    { id: 23, name: 'bank - fsibl', type: 'asset', category: 'bank', balance: 0 },     // First Security Islami Bank
    { id: 24, name: 'bank - sjibl', type: 'asset', category: 'bank', balance: 0 },     // Shahjalal Islami Bank
    { id: 25, name: 'bank - al-arafah', type: 'asset', category: 'bank', balance: 0 }, // Al-Arafah Islami Bank
    { id: 26, name: 'bank - sibl', type: 'asset', category: 'bank', balance: 0 },      // Social Islami Bank
    { id: 27, name: 'bank - midland', type: 'asset', category: 'bank', balance: 0 },   // Midland Bank
    { id: 28, name: 'bank - modhumoti', type: 'asset', category: 'bank', balance: 0 }, // Modhumoti Bank
    { id: 29, name: 'bank - nrbc', type: 'asset', category: 'bank', balance: 0 },      // NRB Bank
    { id: 30, name: 'bank - trust', type: 'asset', category: 'bank', balance: 0 },     // Trust Bank
    { id: 31, name: 'bank - ab', type: 'asset', category: 'bank', balance: 0 },        // AB Bank
    { id: 32, name: 'bank - krishi', type: 'asset', category: 'bank', balance: 0 },    // Bangladesh Krishi Bank
    { id: 33, name: 'bank - rajuk', type: 'asset', category: 'bank', balance: 0 },     // Rajshahi Krishi Unnayan Bank
    { id: 34, name: 'bank - probashi', type: 'asset', category: 'bank', balance: 0 },  // Probashi Kallyan Bank
    { id: 35, name: 'bank - ansar', type: 'asset', category: 'bank', balance: 0 },     // Ansar VDP Unnayan Bank
    { id: 36, name: 'bank - grameen', type: 'asset', category: 'bank', balance: 0 },   // Grameen Bank
    
    // Income Accounts
    { id: 37, name: 'sales', type: 'income', category: 'income', balance: 0 },
    { id: 38, name: 'service revenue', type: 'income', category: 'income', balance: 0 },
    { id: 39, name: 'interest income', type: 'income', category: 'income', balance: 0 },
    { id: 40, name: 'commission income', type: 'income', category: 'income', balance: 0 },
    { id: 41, name: 'other income', type: 'income', category: 'income', balance: 0 },
    
    // Expense Accounts
    { id: 42, name: 'purchases', type: 'expense', category: 'expense', balance: 0 },
    { id: 43, name: 'salary', type: 'expense', category: 'expense', balance: 0 },
    { id: 44, name: 'rent', type: 'expense', category: 'expense', balance: 0 },
    { id: 45, name: 'utilities', type: 'expense', category: 'expense', balance: 0 },
    { id: 46, name: 'office supplies', type: 'expense', category: 'expense', balance: 0 },
    { id: 47, name: 'transportation', type: 'expense', category: 'expense', balance: 0 },
    { id: 48, name: 'advertising', type: 'expense', category: 'expense', balance: 0 },
    { id: 49, name: 'telephone & internet', type: 'expense', category: 'expense', balance: 0 },
    { id: 50, name: 'repairs & maintenance', type: 'expense', category: 'expense', balance: 0 },
    { id: 51, name: 'insurance', type: 'expense', category: 'expense', balance: 0 },
    { id: 52, name: 'taxes & fees', type: 'expense', category: 'expense', balance: 0 },
    { id: 53, name: 'bank charges', type: 'expense', category: 'expense', balance: 0 },
    { id: 54, name: 'miscellaneous', type: 'expense', category: 'expense', balance: 0 },
    
    // Equity Accounts
    { id: 55, name: 'capital', type: 'equity', category: 'equity', balance: 0 },
    { id: 56, name: 'drawings', type: 'equity', category: 'equity', balance: 0 },
    { id: 57, name: 'retained earnings', type: 'equity', category: 'equity', balance: 0 },
    
    // Asset Accounts (Other than Cash/Bank)
    { id: 58, name: 'accounts receivable', type: 'asset', category: 'receivable', balance: 0 },
    { id: 59, name: 'inventory', type: 'asset', category: 'inventory', balance: 0 },
    { id: 60, name: 'prepaid expenses', type: 'asset', category: 'prepaid', balance: 0 },
    { id: 61, name: 'fixed assets', type: 'asset', category: 'fixed', balance: 0 },
    { id: 62, name: 'accumulated depreciation', type: 'asset', category: 'contra-asset', balance: 0 },
    
    // Liability Accounts
    { id: 63, name: 'accounts payable', type: 'liability', category: 'payable', balance: 0 },
    { id: 64, name: 'accrued expenses', type: 'liability', category: 'accrued', balance: 0 },
    { id: 65, name: 'unearned revenue', type: 'liability', category: 'unearned', balance: 0 },
    { id: 66, name: 'loans payable', type: 'liability', category: 'loan', balance: 0 },
    { id: 67, name: 'tax payable', type: 'liability', category: 'tax', balance: 0 }
];

// ==================== BANK MANAGEMENT ====================
let banks = JSON.parse(localStorage.getItem('banks')) || [
    { id: 1, name: 'bank - sbl', displayName: 'Sonali Bank Limited (SBL)', accountNo: '' },
    { id: 2, name: 'bank - jbl', displayName: 'Janata Bank Limited (JBL)', accountNo: '' },
    { id: 3, name: 'bank - agrani', displayName: 'Agrani Bank Limited', accountNo: '' },
    { id: 4, name: 'bank - rupali', displayName: 'Rupali Bank Limited', accountNo: '' },
    { id: 5, name: 'bank - bdbl', displayName: 'Bangladesh Development Bank Limited (BDBL)', accountNo: '' },
    { id: 6, name: 'bank - bkash', displayName: 'bKash (Mobile Banking)', accountNo: '' },
    { id: 7, name: 'bank - nagad', displayName: 'Nagad (Mobile Banking)', accountNo: '' },
    { id: 8, name: 'bank - rocket', displayName: 'Rocket (Dutch-Bangla Bank)', accountNo: '' },
    { id: 9, name: 'bank - dbbl', displayName: 'Dutch-Bangla Bank Limited (DBBL)', accountNo: '' },
    { id: 10, name: 'bank - ebbl', displayName: 'Eastern Bank Limited (EBL)', accountNo: '' },
    { id: 11, name: 'bank - ibbl', displayName: 'Islami Bank Bangladesh Limited (IBBL)', accountNo: '' },
    { id: 12, name: 'bank - pubali', displayName: 'Pubali Bank Limited', accountNo: '' },
    { id: 13, name: 'bank - ucb', displayName: 'United Commercial Bank (UCB)', accountNo: '' },
    { id: 14, name: 'bank - city', displayName: 'City Bank Limited', accountNo: '' },
    { id: 15, name: 'bank - ncc', displayName: 'NCC Bank Limited', accountNo: '' },
    { id: 16, name: 'bank - prime', displayName: 'Prime Bank Limited', accountNo: '' },
    { id: 17, name: 'bank - southbangla', displayName: 'South Bangla Agriculture & Commerce Bank', accountNo: '' },
    { id: 18, name: 'bank - mercantile', displayName: 'Mercantile Bank Limited', accountNo: '' },
    { id: 19, name: 'bank - mutual', displayName: 'Mutual Trust Bank Limited (MTB)', accountNo: '' },
    { id: 20, name: 'bank - standard', displayName: 'Standard Bank Limited', accountNo: '' },
    { id: 21, name: 'bank - one', displayName: 'One Bank Limited', accountNo: '' },
    { id: 22, name: 'bank - exim', displayName: 'EXIM Bank Limited', accountNo: '' },
    { id: 23, name: 'bank - fsibl', displayName: 'First Security Islami Bank Limited', accountNo: '' },
    { id: 24, name: 'bank - sjibl', displayName: 'Shahjalal Islami Bank Limited', accountNo: '' },
    { id: 25, name: 'bank - al-arafah', displayName: 'Al-Arafah Islami Bank Limited', accountNo: '' },
    { id: 26, name: 'bank - sibl', displayName: 'Social Islami Bank Limited (SIBL)', accountNo: '' },
    { id: 27, name: 'bank - midland', displayName: 'Midland Bank Limited', accountNo: '' },
    { id: 28, name: 'bank - modhumoti', displayName: 'Modhumoti Bank Limited', accountNo: '' },
    { id: 29, name: 'bank - nrbc', displayName: 'NRB Bank Limited', accountNo: '' },
    { id: 30, name: 'bank - trust', displayName: 'Trust Bank Limited', accountNo: '' },
    { id: 31, name: 'bank - ab', displayName: 'AB Bank Limited', accountNo: '' },
    { id: 32, name: 'bank - krishi', displayName: 'Bangladesh Krishi Bank (BKB)', accountNo: '' },
    { id: 33, name: 'bank - rajuk', displayName: 'Rajshahi Krishi Unnayan Bank (RAKUB)', accountNo: '' },
    { id: 34, name: 'bank - probashi', displayName: 'Probashi Kallyan Bank', accountNo: '' },
    { id: 35, name: 'bank - ansar', displayName: 'Ansar VDP Unnayan Bank', accountNo: '' },
    { id: 36, name: 'bank - grameen', displayName: 'Grameen Bank', accountNo: '' }
];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initDatePickers();
    updateAllLedgerDropdowns();
    updateBankDropdowns();
    resetJournal();
    displayRecentTransactions();
    setupEventListeners();
    setupFullKeyboardNavigation();
    setupGlobalKeyboardShortcuts();
    updateVoucherNumbers();
    addDeleteAllButton();
    updateDashboardStats();
    
    // Add click outside to close modals
    window.onclick = function(event) {
        const manageModal = document.getElementById('manage-ledgers-modal');
        const deleteModal = document.getElementById('delete-ledger-modal');
        const ledgerModal = document.getElementById('new-ledger-modal');
        const bankModal = document.getElementById('new-bank-modal');
        
        if (event.target === manageModal) closeManageLedgersModal();
        if (event.target === deleteModal) closeDeleteLedgerModal();
        if (event.target === ledgerModal) closeModal();
        if (event.target === bankModal) closeBankModal();
    };
});

// ==================== DASHBOARD STATS ====================
function updateDashboardStats() {
    // Remove existing stats container if it exists
    const existingStats = document.querySelector('.dashboard-stats');
    if (existingStats) {
        existingStats.remove();
    }
    
    const statsContainer = document.createElement('div');
    statsContainer.className = 'dashboard-stats';
    statsContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    `;
    
    const totalTransactions = transactions.length;
    const totalDebit = transactions.reduce((sum, t) => sum + (t.debit || 0), 0);
    const totalCredit = transactions.reduce((sum, t) => sum + (t.credit || 0), 0);
    const todayTransactions = transactions.filter(t => t.date === new Date().toISOString().split('T')[0]).length;
    
    statsContainer.innerHTML = `
        <div class="stat-card" style="background: var(--glass-bg); backdrop-filter: blur(10px); border: var(--glass-border); border-radius: 20px; padding: 2rem; display: flex; align-items: center; gap: 1.5rem; box-shadow: var(--shadow-lg);">
            <div class="stat-icon" style="width: 5rem; height: 5rem; border-radius: 50%; background: linear-gradient(135deg, #667eea20, #764ba220); display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-exchange-alt" style="font-size: 2rem; color: #667eea;"></i>
            </div>
            <div class="stat-content">
                <h3 style="font-size: 1.4rem; color: #718096; margin-bottom: 0.5rem;">Total Transactions</h3>
                <p class="stat-value" style="font-size: 2.8rem; font-weight: 700; color: #2d3748;">${totalTransactions}</p>
            </div>
        </div>
        <div class="stat-card" style="background: var(--glass-bg); backdrop-filter: blur(10px); border: var(--glass-border); border-radius: 20px; padding: 2rem; display: flex; align-items: center; gap: 1.5rem; box-shadow: var(--shadow-lg);">
            <div class="stat-icon" style="width: 5rem; height: 5rem; border-radius: 50%; background: linear-gradient(135deg, #84fab020, #8fd3f420); display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-arrow-up" style="font-size: 2rem; color: #10b981;"></i>
            </div>
            <div class="stat-content">
                <h3 style="font-size: 1.4rem; color: #718096; margin-bottom: 0.5rem;">Total Debit</h3>
                <p class="stat-value" style="font-size: 2.8rem; font-weight: 700; color: #2d3748;">${formatNumber(totalDebit)}</p>
            </div>
        </div>
        <div class="stat-card" style="background: var(--glass-bg); backdrop-filter: blur(10px); border: var(--glass-border); border-radius: 20px; padding: 2rem; display: flex; align-items: center; gap: 1.5rem; box-shadow: var(--shadow-lg);">
            <div class="stat-icon" style="width: 5rem; height: 5rem; border-radius: 50%; background: linear-gradient(135deg, #fc818120, #f5656520); display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-arrow-down" style="font-size: 2rem; color: #ef4444;"></i>
            </div>
            <div class="stat-content">
                <h3 style="font-size: 1.4rem; color: #718096; margin-bottom: 0.5rem;">Total Credit</h3>
                <p class="stat-value" style="font-size: 2.8rem; font-weight: 700; color: #2d3748;">${formatNumber(totalCredit)}</p>
            </div>
        </div>
        <div class="stat-card" style="background: var(--glass-bg); backdrop-filter: blur(10px); border: var(--glass-border); border-radius: 20px; padding: 2rem; display: flex; align-items: center; gap: 1.5rem; box-shadow: var(--shadow-lg);">
            <div class="stat-icon" style="width: 5rem; height: 5rem; border-radius: 50%; background: linear-gradient(135deg, #fbbf2420, #f59e0b20); display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-calendar-day" style="font-size: 2rem; color: #f59e0b;"></i>
            </div>
            <div class="stat-content">
                <h3 style="font-size: 1.4rem; color: #718096; margin-bottom: 0.5rem;">Today's Entries</h3>
                <p class="stat-value" style="font-size: 2.8rem; font-weight: 700; color: #2d3748;">${todayTransactions}</p>
            </div>
        </div>
    `;
    
    // Insert stats after heading
    const dashboard = document.querySelector('.accounting-dashboard');
    const heading = dashboard.querySelector('.heading');
    
    // Check if stats container already exists after heading
    const nextElement = heading.nextElementSibling;
    if (nextElement && nextElement.classList.contains('dashboard-stats')) {
        nextElement.replaceWith(statsContainer);
    } else {
        heading.insertAdjacentElement('afterend', statsContainer);
    }
}

function addDeleteAllButton() {
    const recentEntriesDiv = document.querySelector('.recent-entries');
    if (recentEntriesDiv) {
        const headerDiv = recentEntriesDiv.querySelector('h3');
        // Check if button already exists
        if (headerDiv.querySelector('.delete-all-btn')) return;
        
        const deleteAllBtn = document.createElement('button');
        deleteAllBtn.className = 'delete-all-btn';
        deleteAllBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Delete All Transactions';
        deleteAllBtn.onclick = deleteAllTransactions;
        deleteAllBtn.style.cssText = `
            background: linear-gradient(135deg, #dc3545, #c82333);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-size: 1.4rem;
            font-weight: 600;
            cursor: pointer;
            margin-left: 2rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(220, 53, 69, 0.2);
        `;
        deleteAllBtn.onmouseover = () => {
            deleteAllBtn.style.transform = 'translateY(-2px)';
            deleteAllBtn.style.boxShadow = '0 10px 15px rgba(220, 53, 69, 0.3)';
        };
        deleteAllBtn.onmouseout = () => {
            deleteAllBtn.style.transform = 'translateY(0)';
            deleteAllBtn.style.boxShadow = '0 4px 6px rgba(220, 53, 69, 0.2)';
        };
        headerDiv.appendChild(deleteAllBtn);
    }
}

function deleteAllTransactions() {
    if (confirm('⚠️ Are you sure you want to delete ALL transactions?\n\nThis action cannot be undone!')) {
        transactions = [];
        localStorage.setItem('transactions', JSON.stringify(transactions));
        displayRecentTransactions();
        updateVoucherNumbers();
        resetForm('payment');
        resetForm('receipt');
        resetJournal();
        updateDashboardStats();
        showNotification('All transactions deleted successfully!', 'success');
    }
}

function deleteTransaction(transactionId) {
    if (confirm('Are you sure you want to delete this transaction?')) {
        transactions = transactions.filter(t => t.id !== transactionId);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        displayRecentTransactions();
        updateVoucherNumbers();
        updateDashboardStats();
        showNotification('Transaction deleted successfully!', 'success');
    }
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        padding: 1.5rem 2.5rem;
        background: ${type === 'success' ? 'linear-gradient(135deg, #84fab0, #8fd3f4)' : 
                     type === 'error' ? 'linear-gradient(135deg, #fc8181, #f56565)' : 
                     'linear-gradient(135deg, #667eea, #764ba2)'};
        color: ${type === 'success' ? '#2d3748' : 'white'};
        border-radius: 50px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-size: 1.4rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 1rem;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== DATE PICKER INITIALIZATION ====================
function initDatePickers() {
    // Destroy any existing flatpickr instances first
    document.querySelectorAll(".date-picker").forEach(el => {
        if (el._flatpickr) {
            el._flatpickr.destroy();
        }
    });
    
    // Initialize new instances
    flatpickr(".date-picker", {
        dateFormat: "Y-m-d",
        defaultDate: "today",
        allowInput: true,
        altInput: true,
        altFormat: "F j, Y",
        onChange: function(selectedDates, dateStr, instance) {
            validateForm(instance.element.id.replace('-date', ''));
        }
    });
}

function setupEventListeners() {
    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });

    // Payment type radios
    document.querySelectorAll('.payment-type').forEach(radio => {
        radio.addEventListener('change', function() {
            handleTypeChange('payment');
        });
    });

    // Receipt type radios
    document.querySelectorAll('.receipt-type').forEach(radio => {
        radio.addEventListener('change', function() {
            handleTypeChange('receipt');
        });
    });

    // Payment ledger select
    const paymentLedger = document.getElementById('payment-ledger');
    if (paymentLedger) {
        paymentLedger.addEventListener('change', function() {
            handleLedgerSelect('payment');
        });
    }

    // Receipt ledger select
    const receiptLedger = document.getElementById('receipt-ledger');
    if (receiptLedger) {
        receiptLedger.addEventListener('change', function() {
            handleLedgerSelect('receipt');
        });
    }

    // Payment amount input
    const paymentAmount = document.getElementById('payment-amount');
    if (paymentAmount) {
        paymentAmount.addEventListener('input', function() {
            handleAmountInput('payment');
        });
    }

    // Receipt amount input
    const receiptAmount = document.getElementById('receipt-amount');
    if (receiptAmount) {
        receiptAmount.addEventListener('input', function() {
            handleAmountInput('receipt');
        });
    }

    // Payment new ledger input
    const paymentNewLedger = document.getElementById('payment-new-ledger');
    if (paymentNewLedger) {
        paymentNewLedger.addEventListener('input', function() {
            validateNewLedger('payment');
        });
    }

    // Receipt new ledger input
    const receiptNewLedger = document.getElementById('receipt-new-ledger');
    if (receiptNewLedger) {
        receiptNewLedger.addEventListener('input', function() {
            validateNewLedger('receipt');
        });
    }

    // Payment bank select
    const paymentBank = document.getElementById('payment-bank');
    if (paymentBank) {
        paymentBank.addEventListener('change', function() {
            handleBankSelect('payment');
        });
    }
    
    // Receipt bank select
    const receiptBank = document.getElementById('receipt-bank');
    if (receiptBank) {
        receiptBank.addEventListener('change', function() {
            handleBankSelect('receipt');
        });
    }
    
    // Payment account input
    const paymentAccount = document.getElementById('payment-account');
    if (paymentAccount) {
        paymentAccount.addEventListener('input', function() {
            handleAccountInput('payment');
        });
        paymentAccount.addEventListener('blur', function() {
            saveAccountNumber('payment');
        });
    }
    
    // Receipt account input
    const receiptAccount = document.getElementById('receipt-account');
    if (receiptAccount) {
        receiptAccount.addEventListener('input', function() {
            handleAccountInput('receipt');
        });
        receiptAccount.addEventListener('blur', function() {
            saveAccountNumber('receipt');
        });
    }

    // Navigation menu clicks
    document.querySelector('.nav-payment')?.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('payment');
    });
    
    document.querySelector('.nav-receipt')?.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('receipt');
    });
    
    document.querySelector('.nav-journal')?.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('journal');
    });

    // Also add direct click handlers for save buttons
    const paymentSaveBtn = document.querySelector('#payment .save-btn');
    if (paymentSaveBtn) {
        paymentSaveBtn.addEventListener('click', function() {
            saveEntry('payment');
        });
    }

    const receiptSaveBtn = document.querySelector('#receipt .save-btn');
    if (receiptSaveBtn) {
        receiptSaveBtn.addEventListener('click', function() {
            saveEntry('receipt');
        });
    }

    const journalSaveBtn = document.querySelector('#journal .save-btn');
    if (journalSaveBtn) {
        journalSaveBtn.addEventListener('click', function() {
            saveJournal();
        });
    }

    // Cancel buttons
    const paymentCancelBtn = document.querySelector('#payment .cancel-btn');
    if (paymentCancelBtn) {
        paymentCancelBtn.addEventListener('click', function() {
            cancelEntry('payment');
        });
    }

    const receiptCancelBtn = document.querySelector('#receipt .cancel-btn');
    if (receiptCancelBtn) {
        receiptCancelBtn.addEventListener('click', function() {
            cancelEntry('receipt');
        });
    }

    const journalCancelBtn = document.querySelector('#journal .cancel-btn');
    if (journalCancelBtn) {
        journalCancelBtn.addEventListener('click', function() {
            resetJournal();
        });
    }
}

// ==================== BANK FUNCTIONS ====================

// Update bank dropdowns (remove 'other' option)
function updateBankDropdowns() {
    ['payment', 'receipt'].forEach(type => {
        const bankSelect = document.getElementById(`${type}-bank`);
        if (bankSelect) {
            let options = '<option value="">-- select bank --</option>';
            
            banks.forEach(bank => {
                options += `<option value="${bank.name}">${bank.displayName || bank.name}</option>`;
            });
            
            bankSelect.innerHTML = options;
        }
    });
}

// Show new bank modal
function showNewBankModal(type) {
    document.getElementById('bank-modal-entry-type').value = type;
    document.getElementById('modal-bank-name').value = '';
    document.getElementById('modal-bank-account').value = '';
    document.getElementById('new-bank-modal').style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('modal-bank-name').focus();
    }, 100);
}

// Close bank modal
function closeBankModal() {
    document.getElementById('new-bank-modal').style.display = 'none';
    
    const entryType = document.getElementById('bank-modal-entry-type').value;
    const bankSelect = document.getElementById(`${entryType}-bank`);
    if (bankSelect) bankSelect.focus();
}

// Create new bank
function createNewBank() {
    const name = document.getElementById('modal-bank-name').value.trim();
    const accountNo = document.getElementById('modal-bank-account').value.trim();
    const entryType = document.getElementById('bank-modal-entry-type').value;
    
    if (!name) {
        alert('Please enter a bank name');
        document.getElementById('modal-bank-name').focus();
        return;
    }
    
    // Format bank name
    let bankName = name.toLowerCase();
    if (!bankName.startsWith('bank - ')) {
        bankName = 'bank - ' + bankName;
    }
    
    // Check if bank already exists
    if (banks.some(b => b.name === bankName)) {
        alert('Bank already exists');
        document.getElementById('modal-bank-name').focus();
        return;
    }
    
    // Create display name
    let displayName = name;
    if (name.toLowerCase().includes('bank')) {
        displayName = name;
    } else {
        displayName = name + ' Bank';
    }
    
    const newBank = {
        id: banks.length + 1,
        name: bankName,
        displayName: displayName,
        accountNo: accountNo
    };
    
    banks.push(newBank);
    localStorage.setItem('banks', JSON.stringify(banks));
    
    // Also add as ledger if not exists
    if (!ledgers.some(l => l.name === bankName)) {
        const newLedger = {
            id: ledgers.length + 1,
            name: bankName,
            type: 'asset',
            category: 'bank',
            balance: 0
        };
        ledgers.push(newLedger);
        localStorage.setItem('ledgers', JSON.stringify(ledgers));
        updateAllLedgerDropdowns();
    }
    
    updateBankDropdowns();
    
    // Select the new bank
    document.getElementById(`${entryType}-bank`).value = bankName;
    handleBankSelect(entryType);
    
    closeBankModal();
    showNotification('Bank created successfully!', 'success');
}

// Handle bank selection (updated to show account field)
function handleBankSelect(type) {
    const bankSelect = document.getElementById(`${type}-bank`);
    const accountGroup = document.querySelector(`#${type} .account-group`);
    const ledgerGroup = document.querySelector(`#${type} .ledger-group`);
    
    if (!bankSelect) {
        return;
    }
    
    if (bankSelect.value) {
        // Show account field
        if (accountGroup) {
            accountGroup.style.display = 'block';
        }
        
        if (ledgerGroup) ledgerGroup.style.display = 'none';
        
        // Auto-fill account number if available
        const selectedBank = banks.find(b => b.name === bankSelect.value);
        const accountInput = document.getElementById(`${type}-account`);
        if (accountInput) {
            if (selectedBank && selectedBank.accountNo) {
                accountInput.value = selectedBank.accountNo;
            } else {
                accountInput.value = '';
            }
        }
        
        setTimeout(() => {
            if (accountInput) accountInput.focus();
        }, 100);
    } else {
        if (accountGroup) accountGroup.style.display = 'none';
        if (ledgerGroup) ledgerGroup.style.display = 'none';
    }
}

// Handle account input
function handleAccountInput(type) {
    const accountInput = document.getElementById(`${type}-account`);
    const ledgerGroup = document.querySelector(`#${type} .ledger-group`);
    
    // After account is entered, show ledger group
    if (accountInput.value.trim()) {
        ledgerGroup.style.display = 'block';
        
        // Auto-select the corresponding ledger
        const bankSelect = document.getElementById(`${type}-bank`);
        const ledgerSelect = document.getElementById(`${type}-ledger`);
        const bankLedger = ledgers.find(l => l.name === bankSelect.value);
        
        if (bankLedger) {
            ledgerSelect.value = bankLedger.id;
            handleLedgerSelect(type);
        }
    }
}

// Save account number to bank
function saveAccountNumber(type) {
    const bankSelect = document.getElementById(`${type}-bank`);
    const accountInput = document.getElementById(`${type}-account`);
    
    if (bankSelect.value && accountInput.value.trim()) {
        const bankIndex = banks.findIndex(b => b.name === bankSelect.value);
        if (bankIndex !== -1) {
            banks[bankIndex].accountNo = accountInput.value.trim();
            localStorage.setItem('banks', JSON.stringify(banks));
        }
    }
}

// ==================== COMPLETE KEYBOARD NAVIGATION ====================

function setupFullKeyboardNavigation() {
    setupFormKeyboard('payment');
    setupFormKeyboard('receipt');
    setupJournalKeyboard();
    setupModalKeyboard();
}

function setupFormKeyboard(formType) {
    const form = document.getElementById(formType);
    if (!form) return;
    
    form.addEventListener('focusin', function(e) {
        // Track focused element if needed
    });
    
    form.addEventListener('keydown', function(e) {
        const target = e.target;
        
        // === ENTER KEY HANDLING ===
        if (e.key === 'Enter') {
            e.preventDefault();
            
            // Case 1: Radio buttons
            if (target.type === 'radio') {
                handleRadioEnter(formType, target);
                return;
            }
            
            // Case 2: Select dropdowns (Bank or Ledger)
            if (target.tagName === 'SELECT') {
                handleSelectEnter(target);
                return;
            }
            
            // Case 3: Account input
            if (target.id === `${formType}-account`) {
                const ledgerSelect = document.getElementById(`${formType}-ledger`);
                if (ledgerSelect && isElementVisible(ledgerSelect)) {
                    ledgerSelect.focus();
                }
                return;
            }
            
            // Case 4: Amount input
            if (target.id === `${formType}-amount`) {
                moveToNarration(formType);
                return;
            }
            
            // Case 5: New ledger input
            if (target.id === `${formType}-new-ledger`) {
                moveToNarration(formType);
                return;
            }
            
            // Case 6: Narration
            if (target.id === `${formType}-narration`) {
                focusSaveButton(formType);
                return;
            }
            
            // Case 7: Save button
            if (target.classList.contains('save-btn') && !target.disabled) {
                saveEntry(formType);
                return;
            }
            
            // Case 8: Cancel button
            if (target.classList.contains('cancel-btn')) {
                if (confirm('Are you sure you want to cancel?')) {
                    resetForm(formType);
                }
                return;
            }
            
            // Default: Move to next visible input
            moveToNextInput(formType, target);
        }
        
        // === ARROW KEY NAVIGATION FOR DROPDOWNS ===
        if (target.tagName === 'SELECT') {
            handleSelectArrowKeys(e, target);
        }
        
        // === ESCAPE KEY HANDLING ===
        if (e.key === 'Escape') {
            handleEscapeKey();
        }
    });
    
    // Handle select change events
    const bankSelect = document.getElementById(`${formType}-bank`);
    if (bankSelect) {
        bankSelect.addEventListener('change', function() {
            handleBankSelect(formType);
        });
    }
    
    const ledgerSelect = document.getElementById(`${formType}-ledger`);
    if (ledgerSelect) {
        ledgerSelect.addEventListener('change', function() {
            handleLedgerSelect(formType);
        });
    }
}

function handleRadioEnter(formType, currentRadio) {
    const radios = document.querySelectorAll(`input[name="${formType}-type"]`);
    const currentIndex = Array.from(radios).indexOf(currentRadio);
    
    if (currentIndex < radios.length - 1) {
        radios[currentIndex + 1].focus();
    } else {
        const paymentType = document.querySelector(`input[name="${formType}-type"]:checked`).value;
        
        if (paymentType === 'bank') {
            const bankSelect = document.getElementById(`${formType}-bank`);
            if (bankSelect && isElementVisible(bankSelect)) {
                bankSelect.focus();
                announceToScreenReader('Bank selection dropdown focused');
            }
        } else {
            const ledgerSelect = document.getElementById(`${formType}-ledger`);
            if (ledgerSelect && isElementVisible(ledgerSelect)) {
                ledgerSelect.focus();
                announceToScreenReader('Ledger selection dropdown focused');
            }
        }
    }
}

function handleSelectEnter(select) {
    const event = new MouseEvent('mousedown', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    select.dispatchEvent(event);
    window.activeSelect = select;
}

function handleSelectArrowKeys(e, select) {
    const key = e.key;
    const options = Array.from(select.options);
    const currentIndex = select.selectedIndex;
    
    if (key === 'ArrowDown') {
        e.preventDefault();
        if (currentIndex < options.length - 1) {
            select.selectedIndex = currentIndex + 1;
            select.dispatchEvent(new Event('change', { bubbles: true }));
        }
    } else if (key === 'ArrowUp') {
        e.preventDefault();
        if (currentIndex > 0) {
            select.selectedIndex = currentIndex - 1;
            select.dispatchEvent(new Event('change', { bubbles: true }));
        }
    } else if (key === 'PageDown') {
        e.preventDefault();
        select.selectedIndex = Math.min(currentIndex + 10, options.length - 1);
        select.dispatchEvent(new Event('change', { bubbles: true }));
    } else if (key === 'PageUp') {
        e.preventDefault();
        select.selectedIndex = Math.max(currentIndex - 10, 0);
        select.dispatchEvent(new Event('change', { bubbles: true }));
    } else if (key === 'Home') {
        e.preventDefault();
        select.selectedIndex = 0;
        select.dispatchEvent(new Event('change', { bubbles: true }));
    } else if (key === 'End') {
        e.preventDefault();
        select.selectedIndex = options.length - 1;
        select.dispatchEvent(new Event('change', { bubbles: true }));
    }
}

function moveToNextInput(formType, currentElement) {
    const inputs = getFormInputs(formType);
    const currentIndex = inputs.indexOf(currentElement);
    
    if (currentIndex > -1 && currentIndex < inputs.length - 1) {
        const nextInput = inputs[currentIndex + 1];
        if (nextInput && isElementVisible(nextInput) && !nextInput.disabled) {
            nextInput.focus();
            highlightElement(nextInput);
        }
    }
}

function moveToPreviousInput(formType, currentElement) {
    const inputs = getFormInputs(formType);
    const currentIndex = inputs.indexOf(currentElement);
    
    if (currentIndex > 0) {
        const prevInput = inputs[currentIndex - 1];
        if (prevInput && isElementVisible(prevInput) && !prevInput.disabled) {
            prevInput.focus();
            highlightElement(prevInput);
        }
    }
}

function moveToNarration(formType) {
    const narration = document.getElementById(`${formType}-narration`);
    if (narration && isElementVisible(narration)) {
        narration.focus();
        highlightElement(narration);
    } else {
        focusSaveButton(formType);
    }
}

function focusSaveButton(formType) {
    const saveBtn = document.querySelector(`#${formType} .save-btn:not([disabled])`);
    if (saveBtn && isElementVisible(saveBtn)) {
        saveBtn.focus();
        highlightElement(saveBtn);
    }
}

function highlightElement(element) {
    document.querySelectorAll('.keyboard-focus').forEach(el => {
        el.classList.remove('keyboard-focus');
        el.style.outline = '';
    });
    
    element.classList.add('keyboard-focus');
    element.style.outline = '3px solid var(--main-color)';
    element.style.outlineOffset = '2px';
    
    setTimeout(() => {
        if (document.activeElement !== element) {
            element.classList.remove('keyboard-focus');
            element.style.outline = '';
        }
    }, 1000);
}

// ==================== JOURNAL KEYBOARD NAVIGATION ====================

function setupJournalKeyboard() {
    const journalForm = document.getElementById('journal');
    if (!journalForm) return;
    
    journalForm.addEventListener('keydown', function(e) {
        const target = e.target;
        
        if (e.key === 'Enter') {
            e.preventDefault();
            
            if (target.classList.contains('add-row-btn')) {
                addJournalRow();
                return;
            }
            
            if (target.tagName === 'SELECT' && target.classList.contains('journal-ledger-select')) {
                handleSelectEnter(target);
                return;
            }
            
            if (target.classList.contains('journal-debit')) {
                handleJournalDebitEnter(target);
                return;
            }
            
            if (target.classList.contains('journal-credit')) {
                handleJournalCreditEnter(target);
                return;
            }
            
            if (target.classList.contains('journal-new-ledger')) {
                const modalSaveBtn = document.querySelector('#new-ledger-modal .save-btn');
                if (modalSaveBtn && isElementVisible(modalSaveBtn)) {
                    modalSaveBtn.focus();
                }
                return;
            }
            
            if (target.id === 'journal-narration') {
                const saveBtn = document.querySelector('#journal .save-btn:not([disabled])');
                if (saveBtn && isElementVisible(saveBtn)) {
                    saveBtn.focus();
                }
                return;
            }
            
            if (target.classList.contains('save-btn') && !target.disabled) {
                saveJournal();
                return;
            }
            
            if (target.classList.contains('cancel-btn')) {
                if (confirm('Reset journal? All entries will be cleared.')) {
                    resetJournal();
                }
                return;
            }
        }
        
        if (e.key === 'Delete' && e.ctrlKey) {
            const row = target.closest('.journal-entry-row');
            if (row && !row.classList.contains('first-row')) {
                e.preventDefault();
                removeJournalRow(row.querySelector('.remove-row-btn'));
            }
        }
        
        if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
            e.preventDefault();
            navigateJournalRows(e.key === 'ArrowUp' ? 'up' : 'down');
        }
    });
    
    document.querySelectorAll('.journal-ledger-select').forEach(select => {
        select.addEventListener('change', function() {
            const row = this.closest('.journal-entry-row');
            const isFirstRow = row === document.querySelector('.journal-entry-row');
            
            if (this.value && this.value !== 'new') {
                setTimeout(() => {
                    if (isFirstRow) {
                        const debitInput = row.querySelector('.journal-debit');
                        if (debitInput) debitInput.focus();
                    } else {
                        const debitInput = row.querySelector('.journal-debit');
                        const creditInput = row.querySelector('.journal-credit');
                        
                        if (debitInput && !debitInput.readOnly) {
                            debitInput.focus();
                        } else if (creditInput && !creditInput.readOnly) {
                            creditInput.focus();
                        }
                    }
                }, 100);
            }
        });
    });
}

function handleJournalDebitEnter(debitInput) {
    const row = debitInput.closest('.journal-entry-row');
    const creditInput = row.querySelector('.journal-credit');
    
    if (creditInput && !creditInput.readOnly && isElementVisible(creditInput)) {
        creditInput.focus();
    } else {
        moveToNextJournalRow(debitInput);
    }
}

function handleJournalCreditEnter(creditInput) {
    moveToNextJournalRow(creditInput);
}

function moveToNextJournalRow(currentElement) {
    const rows = Array.from(document.querySelectorAll('.journal-entry-row'));
    const currentRow = currentElement.closest('.journal-entry-row');
    const currentIndex = rows.indexOf(currentRow);
    
    if (currentIndex < rows.length - 1) {
        const nextRow = rows[currentIndex + 1];
        const nextLedgerSelect = nextRow.querySelector('.journal-ledger-select');
        if (nextLedgerSelect && isElementVisible(nextLedgerSelect)) {
            nextLedgerSelect.focus();
        }
    } else {
        const addRowBtn = document.querySelector('.add-row-btn');
        if (addRowBtn && isElementVisible(addRowBtn)) {
            addRowBtn.focus();
        }
    }
}

function navigateJournalRows(direction) {
    const rows = Array.from(document.querySelectorAll('.journal-entry-row'));
    const currentRow = document.activeElement?.closest('.journal-entry-row');
    
    if (!currentRow) return;
    
    const currentIndex = rows.indexOf(currentRow);
    let targetIndex;
    
    if (direction === 'up' && currentIndex > 0) {
        targetIndex = currentIndex - 1;
    } else if (direction === 'down' && currentIndex < rows.length - 1) {
        targetIndex = currentIndex + 1;
    } else {
        return;
    }
    
    const targetRow = rows[targetIndex];
    const fieldType = document.activeElement?.classList.contains('journal-debit') ? 'debit' : 'credit';
    
    setTimeout(() => {
        if (fieldType === 'debit') {
            targetRow.querySelector('.journal-debit')?.focus();
        } else {
            targetRow.querySelector('.journal-credit')?.focus();
        }
    }, 50);
}

// ==================== MODAL KEYBOARD NAVIGATION ====================

function setupModalKeyboard() {
    const modals = ['new-ledger-modal', 'new-bank-modal', 'manage-ledgers-modal', 'delete-ledger-modal'];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const target = e.target;
                
                if (target.tagName === 'INPUT') {
                    const inputs = modal.querySelectorAll('input, select, button');
                    const currentIndex = Array.from(inputs).indexOf(target);
                    
                    if (currentIndex < inputs.length - 1) {
                        inputs[currentIndex + 1].focus();
                    } else {
                        if (modalId === 'new-ledger-modal') createNewLedger();
                        else if (modalId === 'new-bank-modal') createNewBank();
                        else if (modalId === 'delete-ledger-modal') confirmDeleteLedger();
                    }
                }
                
                if (target.tagName === 'SELECT') {
                    handleSelectEnter(target);
                }
                
                if (target.classList.contains('save-btn')) {
                    if (modalId === 'new-ledger-modal') createNewLedger();
                    else if (modalId === 'new-bank-modal') createNewBank();
                }
                
                if (target.classList.contains('delete-btn') && modalId === 'delete-ledger-modal') {
                    confirmDeleteLedger();
                }
                
                if (target.classList.contains('cancel-btn')) {
                    if (modalId === 'new-ledger-modal') closeModal();
                    else if (modalId === 'new-bank-modal') closeBankModal();
                    else if (modalId === 'manage-ledgers-modal') closeManageLedgersModal();
                    else if (modalId === 'delete-ledger-modal') closeDeleteLedgerModal();
                }
            }
            
            if (e.key === 'Escape') {
                if (modalId === 'new-ledger-modal') closeModal();
                else if (modalId === 'new-bank-modal') closeBankModal();
                else if (modalId === 'manage-ledgers-modal') closeManageLedgersModal();
                else if (modalId === 'delete-ledger-modal') closeDeleteLedgerModal();
            }
            
            if (e.key === 'Tab') {
                e.preventDefault();
                const focusable = modal.querySelectorAll('input, select, button');
                const currentIndex = Array.from(focusable).indexOf(e.target);
                
                if (e.shiftKey) {
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusable.length - 1;
                    focusable[prevIndex].focus();
                } else {
                    const nextIndex = currentIndex < focusable.length - 1 ? currentIndex + 1 : 0;
                    focusable[nextIndex].focus();
                }
            }
        });
    });
}

// ==================== GLOBAL KEYBOARD SHORTCUTS ====================

function setupGlobalKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        if (e.altKey && e.key === 'p') {
            e.preventDefault();
            switchTab('payment');
        }
        
        if (e.altKey && e.key === 'r') {
            e.preventDefault();
            switchTab('receipt');
        }
        
        if (e.altKey && e.key === 'j') {
            e.preventDefault();
            switchTab('journal');
        }
        
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            const activeTab = document.querySelector('.tab-btn.active')?.dataset.tab;
            if (activeTab === 'journal') {
                if (!document.querySelector('#journal .save-btn').disabled) {
                    saveJournal();
                }
            } else if (activeTab) {
                if (!document.querySelector(`#${activeTab} .save-btn`).disabled) {
                    saveEntry(activeTab);
                }
            }
        }
        
        if (e.ctrlKey && e.key === 'n') {
            e.preventDefault();
            const activeTab = document.querySelector('.tab-btn.active')?.dataset.tab;
            if (activeTab && activeTab !== 'journal') {
                showNewLedgerModal(activeTab);
            }
        }
        
        if (e.key === 'F5') {
            e.preventDefault();
            displayRecentTransactions();
            announceToScreenReader('Transactions refreshed');
        }
        
        if (e.ctrlKey && e.key === 'Delete') {
            e.preventDefault();
            deleteAllTransactions();
        }
    });
}

// ==================== SCREEN READER SUPPORT ====================

function announceToScreenReader(message) {
    let announcer = document.getElementById('screen-reader-announcer');
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'screen-reader-announcer';
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.style.position = 'absolute';
        announcer.style.width = '1px';
        announcer.style.height = '1px';
        announcer.style.padding = '0';
        announcer.style.margin = '-1px';
        announcer.style.overflow = 'hidden';
        announcer.style.clip = 'rect(0, 0, 0, 0)';
        announcer.style.border = '0';
        document.body.appendChild(announcer);
    }
    
    announcer.textContent = message;
}

// ==================== ENHANCED INPUT COLLECTION ====================

function getFormInputs(formType) {
    const form = document.getElementById(formType);
    if (!form) return [];
    
    const inputs = [];
    
    const dateInput = form.querySelector('.date-picker');
    if (dateInput) inputs.push(dateInput);
    
    const radioButtons = form.querySelectorAll('.type-options input[type="radio"]');
    radioButtons.forEach(radio => inputs.push(radio));
    
    const paymentType = document.querySelector(`input[name="${formType}-type"]:checked`)?.value;
    
    if (paymentType === 'bank') {
        const bankSelect = form.querySelector('.bank-select');
        if (bankSelect && isElementVisible(bankSelect)) {
            inputs.push(bankSelect);
        }
        
        const accountInput = form.querySelector('.account-group input');
        if (accountInput && isElementVisible(accountInput.closest('.account-group'))) {
            inputs.push(accountInput);
        }
    }
    
    const ledgerGroup = form.querySelector('.ledger-group');
    if (ledgerGroup && isElementVisible(ledgerGroup)) {
        const ledgerSelect = ledgerGroup.querySelector('.ledger-select');
        if (ledgerSelect) inputs.push(ledgerSelect);
        
        const newLedgerGroup = form.querySelector('.new-ledger-group');
        if (newLedgerGroup && isElementVisible(newLedgerGroup)) {
            const newLedgerInput = newLedgerGroup.querySelector('input');
            if (newLedgerInput) inputs.push(newLedgerInput);
        }
    }
    
    const amountGroup = form.querySelector('.amount-group');
    if (amountGroup && isElementVisible(amountGroup)) {
        const amountInput = amountGroup.querySelector('input[type="number"]');
        if (amountInput) inputs.push(amountInput);
    }
    
    const narration = form.querySelector('textarea');
    if (narration) inputs.push(narration);
    
    const actionBtns = form.querySelector('.action-btns');
    if (actionBtns && isElementVisible(actionBtns)) {
        const saveBtn = actionBtns.querySelector('.save-btn');
        const cancelBtn = actionBtns.querySelector('.cancel-btn');
        if (saveBtn) inputs.push(saveBtn);
        if (cancelBtn) inputs.push(cancelBtn);
    }
    
    return inputs;
}

// ==================== VISIBILITY CHECK ====================

function isElementVisible(element) {
    if (!element) return false;
    
    const style = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           style.opacity !== '0' &&
           rect.width > 0 && 
           rect.height > 0;
}

function announceCurrentPosition() {
    const active = document.activeElement;
    if (!active) return;
    
    let message = '';
    
    if (active.id.includes('date')) {
        message = 'Date field. Use arrow keys to select date.';
    } else if (active.type === 'radio') {
        message = `${active.value} option selected. Press Enter to confirm.`;
    } else if (active.tagName === 'SELECT') {
        const selected = active.options[active.selectedIndex]?.text || 'nothing selected';
        message = `Dropdown menu. Current selection: ${selected}. Use arrow keys to navigate, Enter to select.`;
    } else if (active.type === 'number') {
        message = 'Amount field. Enter numeric value.';
    } else if (active.classList.contains('save-btn')) {
        message = 'Save button. Press Enter to save.';
    }
    
    if (message) {
        announceToScreenReader(message);
    }
}

document.addEventListener('focusin', function(e) {
    announceCurrentPosition();
});

function handleEscapeKey() {
    const ledgerModal = document.getElementById('new-ledger-modal');
    const bankModal = document.getElementById('new-bank-modal');
    const manageModal = document.getElementById('manage-ledgers-modal');
    const deleteModal = document.getElementById('delete-ledger-modal');
    
    if (ledgerModal.style.display === 'block') closeModal();
    if (bankModal.style.display === 'block') closeBankModal();
    if (manageModal.style.display === 'block') closeManageLedgersModal();
    if (deleteModal.style.display === 'block') closeDeleteLedgerModal();
}

// ==================== TAB SWITCHING ====================
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.tab === tabId) btn.classList.add('active');
    });

    document.querySelectorAll('.entry-form').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    if(tabId === 'payment') resetForm('payment');
    if(tabId === 'receipt') resetForm('receipt');
    if(tabId === 'journal') resetJournal();
    
    setTimeout(() => {
        const firstInput = document.querySelector(`#${tabId} .date-picker`);
        if (firstInput) firstInput.focus();
    }, 100);
}

// ==================== PAYMENT/RECEIPT HANDLING ====================
function handleTypeChange(type) {
    const paymentType = document.querySelector(`input[name="${type}-type"]:checked`).value;
    const bankGroup = document.querySelector(`#${type} .bank-group`);
    const accountGroup = document.querySelector(`#${type} .account-group`);
    const ledgerGroup = document.querySelector(`#${type} .ledger-group`);
    const amountGroup = document.querySelector(`#${type} .amount-group`);
    const actionBtns = document.querySelector(`#${type} .action-btns`);
    
    // Reset all fields
    const amountField = document.getElementById(`${type}-amount`);
    if (amountField) amountField.value = '';
    
    const ledgerField = document.getElementById(`${type}-ledger`);
    if (ledgerField) ledgerField.value = '';
    
    const newLedgerField = document.getElementById(`${type}-new-ledger`);
    if (newLedgerField) newLedgerField.value = '';
    
    const bankField = document.getElementById(`${type}-bank`);
    if (bankField) bankField.value = '';
    
    const accountField = document.getElementById(`${type}-account`);
    if (accountField) accountField.value = '';
    
    // Hide all groups first
    if (bankGroup) bankGroup.style.display = 'none';
    if (accountGroup) accountGroup.style.display = 'none';
    if (ledgerGroup) ledgerGroup.style.display = 'none';
    if (amountGroup) amountGroup.style.display = 'none';
    if (actionBtns) actionBtns.style.display = 'none';
    
    const newLedgerGroup = document.querySelector(`#${type} .new-ledger-group`);
    if (newLedgerGroup) newLedgerGroup.style.display = 'none';
    
    const newBankGroup = document.querySelector(`#${type} .new-bank-group`);
    if (newBankGroup) newBankGroup.style.display = 'none';
    
    if (paymentType === 'cash') {
        // For cash, show ledger directly
        if (ledgerGroup) {
            ledgerGroup.style.display = 'block';
        }
        
        if (bankGroup) bankGroup.style.display = 'none';
        if (accountGroup) accountGroup.style.display = 'none';
        if (amountGroup) amountGroup.style.display = 'none';
        if (actionBtns) actionBtns.style.display = 'none';
        
        filterLedgersByType(type);
        
        setTimeout(() => {
            const ledgerSelect = document.getElementById(`${type}-ledger`);
            if (ledgerSelect) {
                ledgerSelect.focus();
            }
        }, 100);
    } else {
        // For bank, show bank selection first
        if (bankGroup) {
            bankGroup.style.display = 'block';
        }
        
        if (accountGroup) accountGroup.style.display = 'none';
        if (ledgerGroup) ledgerGroup.style.display = 'none';
        if (amountGroup) amountGroup.style.display = 'none';
        if (actionBtns) actionBtns.style.display = 'none';
        
        setTimeout(() => {
            const bankSelect = document.getElementById(`${type}-bank`);
            if (bankSelect) {
                bankSelect.focus();
            }
        }, 100);
    }
}

function filterLedgersByType(type) {
    const select = document.getElementById(`${type}-ledger`);
    if (!select) return;
    
    let options = '<option value="">-- select ledger --</option>';
    
    const groupedLedgers = {};
    
    // Filter ledgers based on payment/receipt type
    const filteredLedgers = ledgers.filter(ledger => {
        if (type === 'payment') {
            // For payments: show expense accounts and payable accounts
            return ledger.type === 'expense' || 
                   (ledger.type === 'liability' && ledger.category === 'payable') ||
                   ledger.name.includes('payable') ||
                   ledger.name.includes('expense') ||
                   ledger.name.includes('purchases') ||
                   ledger.name.includes('salary') ||
                   ledger.name.includes('rent') ||
                   ledger.name.includes('utilities');
        } else {
            // For receipts: show income accounts and receivable accounts
            return ledger.type === 'income' || 
                   (ledger.type === 'asset' && ledger.category === 'receivable') ||
                   ledger.name.includes('receivable') ||
                   ledger.name.includes('income') ||
                   ledger.name.includes('sales') ||
                   ledger.name.includes('revenue') ||
                   ledger.name.includes('interest') ||
                   ledger.name.includes('commission');
        }
    });
    
    // If no filtered ledgers, show all as fallback
    if (filteredLedgers.length === 0) {
        ledgers.forEach(ledger => {
            if (!groupedLedgers[ledger.type]) groupedLedgers[ledger.type] = [];
            groupedLedgers[ledger.type].push(ledger);
        });
    } else {
        filteredLedgers.forEach(ledger => {
            if (!groupedLedgers[ledger.type]) groupedLedgers[ledger.type] = [];
            groupedLedgers[ledger.type].push(ledger);
        });
    }
    
    // Build options with optgroups
    for (let ledgerType in groupedLedgers) {
        options += `<optgroup label="${ledgerType.toUpperCase()}">`;
        groupedLedgers[ledgerType].forEach(ledger => {
            options += `<option value="${ledger.id}">${ledger.name}</option>`;
        });
        options += '</optgroup>';
    }
    
    select.innerHTML = options;
}

function handleLedgerSelect(type) {
    const select = document.getElementById(`${type}-ledger`);
    const amountGroup = document.querySelector(`#${type} .amount-group`);
    const newLedgerGroup = document.querySelector(`#${type} .new-ledger-group`);
    const actionBtns = document.querySelector(`#${type} .action-btns`);
    
    if (select && select.value) {
        // Hide new ledger group if visible
        if (newLedgerGroup) {
            newLedgerGroup.style.display = 'none';
        }
        
        // Show amount field
        if (amountGroup) {
            amountGroup.style.display = 'block';
            
            setTimeout(() => {
                const amountInput = document.getElementById(`${type}-amount`);
                if (amountInput) {
                    amountInput.focus();
                }
            }, 100);
        }
        
        // Hide action buttons until amount is entered
        if (actionBtns) {
            actionBtns.style.display = 'none';
        }
    } else {
        // No ledger selected, hide amount field
        if (amountGroup) {
            amountGroup.style.display = 'none';
        }
        if (actionBtns) {
            actionBtns.style.display = 'none';
        }
    }
}

function handleAmountInput(type) {
    const amount = document.getElementById(`${type}-amount`).value;
    const actionBtns = document.querySelector(`#${type} .action-btns`);
    
    if(amount && parseFloat(amount) > 0) {
        actionBtns.style.display = 'flex';
    } else {
        actionBtns.style.display = 'none';
    }
}

function validateNewLedger(type) {
    const newLedger = document.getElementById(`${type}-new-ledger`).value;
    const actionBtns = document.querySelector(`#${type} .action-btns`);
    actionBtns.style.display = newLedger.trim() ? 'flex' : 'none';
}

// ==================== LEDGER MANAGEMENT ====================

function updateAllLedgerDropdowns() {
    updateLedgerDropdown('payment');
    updateLedgerDropdown('receipt');
    updateJournalLedgerDropdowns();
}

function updateLedgerDropdown(type) {
    const select = document.getElementById(`${type}-ledger`);
    if(!select) return;
    
    let options = '<option value="">-- select ledger --</option>';
    
    const groupedLedgers = {};
    ledgers.forEach(ledger => {
        if(!groupedLedgers[ledger.type]) groupedLedgers[ledger.type] = [];
        groupedLedgers[ledger.type].push(ledger);
    });
    
    for(let type in groupedLedgers) {
        options += `<optgroup label="${type.toUpperCase()}">`;
        groupedLedgers[type].forEach(ledger => {
            options += `<option value="${ledger.id}">${ledger.name}</option>`;
        });
        options += '</optgroup>';
    }
    
    select.innerHTML = options;
}

function updateJournalLedgerDropdowns() {
    document.querySelectorAll('.journal-ledger-select').forEach(select => {
        let options = '<option value="">select ledger</option>';
        
        const groupedLedgers = {};
        ledgers.forEach(ledger => {
            if(!groupedLedgers[ledger.type]) groupedLedgers[ledger.type] = [];
            groupedLedgers[ledger.type].push(ledger);
        });
        
        for(let type in groupedLedgers) {
            options += `<optgroup label="${type.toUpperCase()}">`;
            groupedLedgers[type].forEach(ledger => {
                options += `<option value="${ledger.id}">${ledger.name}</option>`;
            });
            options += '</optgroup>';
        }
        
        select.innerHTML = options;
    });
}

// ==================== LEDGER MANAGEMENT FUNCTIONS (New) ====================

function showManageLedgersModal() {
    loadLedgersList();
    document.getElementById('manage-ledgers-modal').style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('ledger-search').focus();
    }, 100);
}

function closeManageLedgersModal() {
    document.getElementById('manage-ledgers-modal').style.display = 'none';
}

function loadLedgersList() {
    const tbody = document.getElementById('ledger-list-body');
    if (!tbody) return;
    
    document.getElementById('total-ledgers-count').textContent = ledgers.length;
    
    let html = '';
    
    const sortedLedgers = [...ledgers].sort((a, b) => a.name.localeCompare(b.name));
    
    sortedLedgers.forEach(ledger => {
        const transactionCount = transactions.filter(t => t.ledger === ledger.name).length;
        const canDelete = transactionCount === 0 && !isEssentialLedger(ledger.name);
        
        html += `
            <tr>
                <td>${ledger.id}</td>
                <td>${ledger.name}</td>
                <td><span class="badge" style="background: ${getLedgerTypeColor(ledger.type)}">${ledger.type}</span></td>
                <td>${ledger.category || '-'}</td>
                <td>
                    <span class="transaction-badge">${transactionCount}</span>
                </td>
                <td>
                    <button class="delete-ledger-btn" 
                            onclick="showDeleteLedgerModal(${ledger.id}, '${ledger.name}')"
                            ${!canDelete ? 'disabled' : ''}
                            title="${!canDelete ? (transactionCount > 0 ? 'Cannot delete: Has transactions' : 'Cannot delete: Essential ledger') : 'Delete ledger'}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
}

function getLedgerTypeColor(type) {
    const colors = {
        'asset': '#3c40c6',
        'liability': '#dc3545',
        'income': '#28a745',
        'expense': '#ffc107',
        'equity': '#17a2b8'
    };
    return colors[type] || '#6c757d';
}

function isEssentialLedger(ledgerName) {
    const essentialLedgers = ['cash', 'bank', 'sales', 'purchases', 'capital'];
    return essentialLedgers.some(essential => ledgerName.includes(essential));
}

function showDeleteLedgerModal(ledgerId, ledgerName) {
    document.getElementById('delete-ledger-id').value = ledgerId;
    document.getElementById('delete-ledger-name').value = ledgerName;
    document.getElementById('delete-ledger-message').textContent = 
        `Are you sure you want to delete "${ledgerName}"?`;
    document.getElementById('delete-ledger-modal').style.display = 'block';
}

function closeDeleteLedgerModal() {
    document.getElementById('delete-ledger-modal').style.display = 'none';
}

function confirmDeleteLedger() {
    const ledgerId = parseInt(document.getElementById('delete-ledger-id').value);
    const ledgerName = document.getElementById('delete-ledger-name').value;
    
    const transactionCount = transactions.filter(t => t.ledger === ledgerName).length;
    if (transactionCount > 0) {
        alert(`Cannot delete "${ledgerName}" because it has ${transactionCount} transaction(s).`);
        closeDeleteLedgerModal();
        loadLedgersList();
        return;
    }
    
    ledgers = ledgers.filter(l => l.id !== ledgerId);
    localStorage.setItem('ledgers', JSON.stringify(ledgers));
    
    updateAllLedgerDropdowns();
    loadLedgersList();
    closeDeleteLedgerModal();
    
    alert(`Ledger "${ledgerName}" deleted successfully!`);
}

function filterLedgers() {
    const searchTerm = document.getElementById('ledger-search').value.toLowerCase();
    const rows = document.querySelectorAll('#ledger-list-body tr');
    
    rows.forEach(row => {
        const ledgerName = row.cells[1]?.textContent.toLowerCase() || '';
        const ledgerType = row.cells[2]?.textContent.toLowerCase() || '';
        const ledgerCategory = row.cells[3]?.textContent.toLowerCase() || '';
        
        if (ledgerName.includes(searchTerm) || 
            ledgerType.includes(searchTerm) || 
            ledgerCategory.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// ==================== JOURNAL FUNCTIONS ====================

function createJournalRow(isFirstRow = false, amount = '') {
    const row = document.createElement('div');
    row.className = 'journal-entry-row';
    if (isFirstRow) row.classList.add('first-row');
    
    const ledgerContainer = document.createElement('div');
    ledgerContainer.className = 'form-group ledger-select-wrapper';
    ledgerContainer.innerHTML = `
        <label>ledger *</label>
        <select class="journal-ledger-select" onchange="handleJournalLedgerSelect(this)">
            <option value="">select ledger</option>
        </select>
        <button type="button" class="journal-new-ledger-btn" onclick="showJournalNewLedgerModal(this)">
            <i class="fas fa-plus"></i> new
        </button>
    `;
    
    const debitGroup = document.createElement('div');
    debitGroup.className = 'form-group';
    debitGroup.innerHTML = `
        <label>debit</label>
        <input type="number" class="journal-debit" value="${amount}" placeholder="0.00" min="0" step="any" oninput="updateJournalTotals(); validateJournalForSave();">
    `;
    
    const creditGroup = document.createElement('div');
    creditGroup.className = 'form-group';
    
    if (isFirstRow) {
        creditGroup.innerHTML = `
            <label>credit</label>
            <input type="number" class="journal-credit" value="" placeholder="0.00" min="0" step="any" readonly disabled>
        `;
    } else {
        creditGroup.innerHTML = `
            <label>credit</label>
            <input type="number" class="journal-credit" value="" placeholder="0.00" min="0" step="any" oninput="updateJournalTotals(); validateJournalForSave();">
        `;
    }
    
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'remove-row-btn';
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    removeBtn.onclick = function() { removeJournalRow(this); };
    removeBtn.style.display = 'none';
    
    row.appendChild(ledgerContainer);
    row.appendChild(debitGroup);
    row.appendChild(creditGroup);
    row.appendChild(removeBtn);
    
    return row;
}

function handleJournalLedgerSelect(select) {
    const row = select.closest('.journal-entry-row');
    const newLedgerBtn = row.querySelector('.journal-new-ledger-btn');
    
    if(select.value === 'new') {
        select.style.display = 'none';
        newLedgerBtn.style.display = 'none';
        
        if(!row.querySelector('.journal-new-ledger-input-group')) {
            const newLedgerDiv = document.createElement('div');
            newLedgerDiv.className = 'form-group journal-new-ledger-input-group';
            newLedgerDiv.innerHTML = `
                <label>new ledger name *</label>
                <div class="new-ledger-input-wrapper">
                    <input type="text" class="journal-new-ledger" placeholder="enter ledger name" oninput="validateJournalForSave()">
                    <button type="button" class="new-ledger-cancel-btn" onclick="cancelJournalNewLedger(this)">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            const ledgerContainer = row.querySelector('.ledger-select-wrapper');
            ledgerContainer.parentNode.insertBefore(newLedgerDiv, ledgerContainer.nextSibling);
            
            setTimeout(() => {
                const newLedgerInput = row.querySelector('.journal-new-ledger');
                if (newLedgerInput) newLedgerInput.focus();
            }, 100);
        }
    } else if(select.value) {
        const isFirstRow = row === document.querySelector('.journal-entry-row');
        
        if (isFirstRow) {
            const debitInput = row.querySelector('.journal-debit');
            if (debitInput) debitInput.focus();
        } else {
            const debitInput = row.querySelector('.journal-debit');
            const creditInput = row.querySelector('.journal-credit');
            
            if (debitInput && !debitInput.readOnly) {
                debitInput.focus();
            } else if (creditInput && !creditInput.readOnly) {
                creditInput.focus();
            }
        }
        
        validateJournalForSave();
    }
}

function cancelJournalNewLedger(btn) {
    const row = btn.closest('.journal-entry-row');
    const newLedgerGroup = row.querySelector('.journal-new-ledger-input-group');
    const ledgerSelect = row.querySelector('.journal-ledger-select');
    const newLedgerBtn = row.querySelector('.journal-new-ledger-btn');
    
    if(newLedgerGroup) newLedgerGroup.remove();
    
    ledgerSelect.style.display = 'block';
    newLedgerBtn.style.display = 'block';
    ledgerSelect.value = '';
    
    setTimeout(() => {
        ledgerSelect.focus();
    }, 100);
    
    validateJournalForSave();
}

function showJournalNewLedgerModal(btn) {
    const row = btn.closest('.journal-entry-row');
    const rows = document.querySelectorAll('.journal-entry-row');
    const rowIndex = Array.from(rows).indexOf(row);
    
    document.getElementById('modal-entry-type').value = 'journal';
    document.getElementById('modal-row-id').value = rowIndex;
    document.getElementById('modal-ledger-name').value = '';
    document.getElementById('modal-ledger-type').value = 'asset';
    document.getElementById('new-ledger-modal').style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('modal-ledger-name').focus();
    }, 100);
}

function addJournalRow() {
    const container = document.querySelector('.journal-entries');
    const newRow = createJournalRow(false);
    container.appendChild(newRow);
    
    updateJournalLedgerDropdowns();
    
    if(document.querySelectorAll('.journal-entry-row').length > 1) {
        document.querySelectorAll('.remove-row-btn').forEach(btn => {
            btn.style.display = 'block';
        });
    }
    
    setTimeout(() => {
        const ledgerSelect = newRow.querySelector('.journal-ledger-select');
        if (ledgerSelect) ledgerSelect.focus();
    }, 100);
    
    validateJournalForSave();
}

function removeJournalRow(btn) {
    const row = btn.closest('.journal-entry-row');
    const rows = document.querySelectorAll('.journal-entry-row');
    const isFirstRow = rows[0] === row;
    
    if(isFirstRow) {
        alert('Cannot remove the first row');
        return;
    }
    
    const prevRow = row.previousElementSibling;
    row.remove();
    
    if(document.querySelectorAll('.journal-entry-row').length === 1) {
        const remainingBtn = document.querySelector('.remove-row-btn');
        if(remainingBtn) remainingBtn.style.display = 'none';
    }
    
    if (prevRow) {
        setTimeout(() => {
            const ledgerSelect = prevRow.querySelector('.journal-ledger-select');
            if (ledgerSelect) ledgerSelect.focus();
        }, 100);
    }
    
    updateJournalTotals();
    validateJournalForSave();
}

function updateJournalTotals() {
    let totalDebit = 0;
    let totalCredit = 0;
    
    document.querySelectorAll('.journal-entry-row').forEach(row => {
        const debit = parseFloat(row.querySelector('.journal-debit')?.value) || 0;
        const credit = parseFloat(row.querySelector('.journal-credit')?.value) || 0;
        
        totalDebit += debit;
        totalCredit += credit;
    });
    
    document.getElementById('total-debit').textContent = totalDebit.toFixed(2);
    document.getElementById('total-credit').textContent = totalCredit.toFixed(2);
    
    const debitSpan = document.getElementById('total-debit');
    const creditSpan = document.getElementById('total-credit');
    
    if(Math.abs(totalDebit - totalCredit) > 0.01) {
        debitSpan.style.color = '#dc3545';
        creditSpan.style.color = '#dc3545';
    } else {
        debitSpan.style.color = 'var(--main-color)';
        creditSpan.style.color = 'var(--main-color)';
    }
}

function validateJournalForSave() {
    let allValid = true;
    let hasAtLeastOneEntry = false;
    let totalDebit = 0;
    let totalCredit = 0;
    
    document.querySelectorAll('.journal-entry-row').forEach((row, index) => {
        const ledgerSelect = row.querySelector('.journal-ledger-select');
        const newLedgerInput = row.querySelector('.journal-new-ledger');
        const debit = parseFloat(row.querySelector('.journal-debit')?.value) || 0;
        const credit = parseFloat(row.querySelector('.journal-credit')?.value) || 0;
        
        totalDebit += debit;
        totalCredit += credit;
        
        const hasLedger = (ledgerSelect && ledgerSelect.value && ledgerSelect.value !== 'new') || 
                         (newLedgerInput && newLedgerInput.value.trim());
        const hasAmount = debit > 0 || credit > 0;
        
        if (index === 0 && credit > 0) {
            allValid = false;
        }
        
        if(hasAmount) hasAtLeastOneEntry = true;
        if(hasAmount && !hasLedger) allValid = false;
    });
    
    const rows = document.querySelectorAll('.journal-entry-row');
    const hasDebitRow = Array.from(rows).some(row => parseFloat(row.querySelector('.journal-debit')?.value) > 0);
    
    const canSaveSingleRow = rows.length === 1 && hasDebitRow && totalDebit > 0 && totalCredit === 0;
    const canSaveMultiRow = rows.length > 1 && hasDebitRow && totalDebit > 0 && totalCredit > 0 && 
                           Math.abs(totalDebit - totalCredit) < 0.01;
    
    const saveBtn = document.querySelector('#journal .save-btn');
    if(saveBtn) {
        const canSave = allValid && hasAtLeastOneEntry && (canSaveSingleRow || canSaveMultiRow);
        saveBtn.disabled = !canSave;
    }
}

function resetJournal() {
    const container = document.querySelector('.journal-entries');
    container.innerHTML = '';
    
    const firstRow = createJournalRow(true);
    container.appendChild(firstRow);
    
    updateJournalLedgerDropdowns();
    updateJournalTotals();
    document.getElementById('journal-narration').value = '';
    
    const removeBtn = document.querySelector('.remove-row-btn');
    if(removeBtn) removeBtn.style.display = 'none';
    
    validateJournalForSave();
    
    setTimeout(() => {
        const ledgerSelect = firstRow.querySelector('.journal-ledger-select');
        if (ledgerSelect) ledgerSelect.focus();
    }, 100);
}

// ==================== MODAL FUNCTIONS ====================

function showNewLedgerModal(type) {
    document.getElementById('modal-entry-type').value = type;
    document.getElementById('modal-row-id').value = '';
    document.getElementById('modal-ledger-name').value = '';
    document.getElementById('modal-ledger-type').value = 'asset';
    document.getElementById('new-ledger-modal').style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('modal-ledger-name').focus();
    }, 100);
}

function closeModal() {
    document.getElementById('new-ledger-modal').style.display = 'none';
    
    const entryType = document.getElementById('modal-entry-type').value;
    if (entryType === 'journal') {
        const rowId = document.getElementById('modal-row-id').value;
        if (rowId !== '') {
            const rows = document.querySelectorAll('.journal-entry-row');
            const targetRow = rows[parseInt(rowId)];
            if (targetRow) {
                const ledgerSelect = targetRow.querySelector('.journal-ledger-select');
                if (ledgerSelect) ledgerSelect.focus();
            }
        }
    } else if (entryType === 'payment' || entryType === 'receipt') {
        const ledgerSelect = document.getElementById(`${entryType}-ledger`);
        if (ledgerSelect) ledgerSelect.focus();
    }
}

function createNewLedger() {
    const name = document.getElementById('modal-ledger-name').value.trim();
    const type = document.getElementById('modal-ledger-type').value;
    const entryType = document.getElementById('modal-entry-type').value;
    const rowId = document.getElementById('modal-row-id').value;
    
    if(!name) {
        alert('Please enter a ledger name');
        document.getElementById('modal-ledger-name').focus();
        return;
    }
    
    if(ledgers.some(l => l.name.toLowerCase() === name.toLowerCase())) {
        alert('Ledger already exists');
        document.getElementById('modal-ledger-name').focus();
        return;
    }
    
    let category = type;
    if (name.toLowerCase().includes('bank')) {
        category = 'bank';
    } else if (type === 'asset' && name.toLowerCase().includes('receivable')) {
        category = 'receivable';
    } else if (type === 'liability' && name.toLowerCase().includes('payable')) {
        category = 'payable';
    } else if (type === 'expense') {
        category = 'expense';
    } else if (type === 'income') {
        category = 'income';
    } else if (type === 'asset' && name.toLowerCase().includes('cash')) {
        category = 'cash';
    }
    
    const newLedger = {
        id: ledgers.length + 1,
        name: name.toLowerCase(),
        type: type,
        category: category,
        balance: 0
    };
    
    ledgers.push(newLedger);
    localStorage.setItem('ledgers', JSON.stringify(ledgers));
    updateAllLedgerDropdowns();
    
    if(entryType === 'payment' || entryType === 'receipt') {
        document.getElementById(`${entryType}-ledger`).value = newLedger.id;
        handleLedgerSelect(entryType);
    } else if(entryType === 'journal' && rowId !== '') {
        const rows = document.querySelectorAll('.journal-entry-row');
        const targetRow = rows[parseInt(rowId)];
        
        if(targetRow) {
            const select = targetRow.querySelector('.journal-ledger-select');
            const newLedgerBtn = targetRow.querySelector('.journal-new-ledger-btn');
            const newLedgerGroup = targetRow.querySelector('.journal-new-ledger-input-group');
            
            if(select) {
                select.value = newLedger.id;
                select.style.display = 'block';
                select.dispatchEvent(new Event('change', { bubbles: true }));
            }
            
            if(newLedgerBtn) newLedgerBtn.style.display = 'block';
            if(newLedgerGroup) newLedgerGroup.remove();
            
            validateJournalForSave();
        }
    }
    
    closeModal();
    showNotification('Ledger created successfully!', 'success');
}

// ==================== SAVE FUNCTIONS ====================

function saveEntry(type) {
    const date = document.getElementById(`${type}-date`).value;
    const voucher = document.getElementById(`${type}-voucher`).value;
    const paymentType = document.querySelector(`input[name="${type}-type"]:checked`).value;
    const amount = parseFloat(document.getElementById(`${type}-amount`).value);
    const narration = document.getElementById(`${type}-narration`).value;
    
    let ledgerId = document.getElementById(`${type}-ledger`).value;
    const newLedgerName = document.getElementById(`${type}-new-ledger`).value.trim();
    
    let bankName = '';
    let accountNumber = '';
    
    if (paymentType === 'bank') {
        bankName = document.getElementById(`${type}-bank`).value;
        accountNumber = document.getElementById(`${type}-account`).value.trim();
        
        if (!bankName) {
            alert('Please select a bank');
            document.getElementById(`${type}-bank`).focus();
            return;
        }
        
        if (accountNumber) {
            const bankIndex = banks.findIndex(b => b.name === bankName);
            if (bankIndex !== -1) {
                banks[bankIndex].accountNo = accountNumber;
                localStorage.setItem('banks', JSON.stringify(banks));
            }
        }
    }
    
    if(!date) {
        alert('Please select a date');
        document.getElementById(`${type}-date`).focus();
        return;
    }
    
    if(!ledgerId) {
        alert('Please select a ledger');
        document.getElementById(`${type}-ledger`).focus();
        return;
    }
    
    if(!amount || amount <= 0) {
        alert('Please enter a valid amount');
        document.getElementById(`${type}-amount`).focus();
        return;
    }
    
    const ledger = ledgers.find(l => l.id == ledgerId);
    if(!ledger) return;
    
    let transactionNarration = narration;
    if (paymentType === 'bank' && bankName) {
        const bankDisplay = banks.find(b => b.name === bankName)?.displayName || bankName;
        const accountDisplay = accountNumber ? ` (A/C: ${accountNumber})` : '';
        transactionNarration = narration || `${type === 'payment' ? 'Payment' : 'Receipt'} via ${bankDisplay}${accountDisplay}`;
    }
    
    const transaction = {
        id: Date.now(),
        date: date,
        voucher: voucher,
        type: type,
        ledger: ledger.name,
        payment_type: paymentType,
        bank_name: paymentType === 'bank' ? bankName : null,
        account_number: paymentType === 'bank' ? accountNumber : null,
        amount: amount,
        debit: type === 'receipt' ? amount : 0,
        credit: type === 'payment' ? amount : 0,
        narration: transactionNarration || (type === 'payment' ? 'Payment made' : 'Receipt received'),
        entry_type: type
    };
    
    transactions = [...transactions, transaction];
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    displayRecentTransactions();
    updateVoucherNumbers();
    resetForm(type);
    updateDashboardStats();
    
    showNotification(`${type} entry saved successfully!`, 'success');
}

function saveJournal() {
    const date = document.getElementById('journal-date').value;
    const voucher = document.getElementById('journal-voucher').value;
    const narration = document.getElementById('journal-narration').value;
    
    if(!date) {
        alert('Please select a date');
        document.getElementById('journal-date').focus();
        return;
    }
    
    const rows = [];
    let totalDebit = 0;
    let totalCredit = 0;
    let hasErrors = false;
    
    document.querySelectorAll('.journal-entry-row').forEach((row, index) => {
        const ledgerSelect = row.querySelector('.journal-ledger-select');
        const newLedgerInput = row.querySelector('.journal-new-ledger');
        const debit = parseFloat(row.querySelector('.journal-debit')?.value) || 0;
        const credit = parseFloat(row.querySelector('.journal-credit')?.value) || 0;
        
        if (index === 0 && credit > 0) {
            alert('First row cannot have credit amount');
            hasErrors = true;
            return;
        }
        
        let ledgerId = ledgerSelect ? ledgerSelect.value : null;
        const newLedgerName = newLedgerInput ? newLedgerInput.value.trim() : '';
        
        if(!ledgerId && !newLedgerName && debit === 0 && credit === 0) return;
        
        if(ledgerId === 'new') {
            if(!newLedgerName) {
                alert('Please enter a name for the new ledger');
                hasErrors = true;
                return;
            }
            
            let existingLedger = ledgers.find(l => l.name.toLowerCase() === newLedgerName.toLowerCase());
            if(existingLedger) {
                ledgerId = existingLedger.id;
            } else {
                const newLedger = {
                    id: ledgers.length + 1,
                    name: newLedgerName.toLowerCase(),
                    type: 'asset',
                    category: 'asset',
                    balance: 0
                };
                ledgers.push(newLedger);
                localStorage.setItem('ledgers', JSON.stringify(ledgers));
                ledgerId = newLedger.id;
            }
        }
        
        if(ledgerId && (debit > 0 || credit > 0)) {
            const ledger = ledgers.find(l => l.id == ledgerId);
            if(ledger) {
                rows.push({ ledger: ledger.name, debit, credit });
                totalDebit += debit;
                totalCredit += credit;
            }
        } else if(ledgerId || debit > 0 || credit > 0) {
            alert('Please complete all fields in each row');
            hasErrors = true;
        }
    });
    
    if(hasErrors) return;
    if(rows.length === 0) {
        alert('Please add at least one journal entry');
        return;
    }
    
    if(rows.length === 1) {
        if(totalDebit === 0) {
            alert('Please enter a debit amount');
            return;
        }
        
        const cashLedger = ledgers.find(l => l.name === 'cash');
        rows.push({
            ledger: cashLedger ? cashLedger.name : 'cash',
            debit: 0,
            credit: totalDebit
        });
        
        totalCredit = totalDebit;
    } else {
        if(Math.abs(totalDebit - totalCredit) > 0.01) {
            alert('Total debit must equal total credit');
            return;
        }
    }
    
    const transactions_to_add = rows.map((row, index) => ({
        id: Date.now() + index,
        date: date,
        voucher: voucher,
        type: 'journal',
        ledger: row.ledger,
        debit: row.debit,
        credit: row.credit,
        narration: narration || 'Journal entry',
        entry_type: 'journal'
    }));
    
    transactions = [...transactions, ...transactions_to_add];
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    updateAllLedgerDropdowns();
    displayRecentTransactions();
    updateVoucherNumbers();
    resetJournal();
    updateDashboardStats();
    
    showNotification('Journal entry saved successfully!', 'success');
}

// ==================== RESET FUNCTIONS ====================

function resetForm(type) {
    document.getElementById(`${type}-amount`).value = '';
    document.getElementById(`${type}-ledger`).value = '';
    document.getElementById(`${type}-new-ledger`).value = '';
    document.getElementById(`${type}-bank`).value = '';
    document.getElementById(`${type}-account`).value = '';
    document.getElementById(`${type}-narration`).value = '';
    
    document.querySelector(`#${type} .amount-group`).style.display = 'none';
    document.querySelector(`#${type} .ledger-group`).style.display = 'none';
    document.querySelector(`#${type} .bank-group`).style.display = 'none';
    document.querySelector(`#${type} .account-group`).style.display = 'none';
    document.querySelector(`#${type} .new-bank-group`).style.display = 'none';
    document.querySelector(`#${type} .new-ledger-group`).style.display = 'none';
    document.querySelector(`#${type} .action-btns`).style.display = 'none';
    
    // Reset radio to cash
    const cashRadio = document.querySelector(`input[name="${type}-type"][value="cash"]`);
    if (cashRadio) {
        cashRadio.checked = true;
    }
}

function cancelEntry(type) {
    if(confirm('Are you sure you want to cancel? All entered data will be lost.')) {
        resetForm(type);
        
        setTimeout(() => {
            document.getElementById(`${type}-date`).focus();
        }, 100);
    }
}

// ==================== UTILITY FUNCTIONS ====================

function updateVoucherNumbers() {
    const today = new Date();
    const year = today.getFullYear();
    const todayStr = today.toISOString().split('T')[0];
    
    const todayPayments = transactions.filter(t => t.type === 'payment' && t.date === todayStr).length;
    const todayReceipts = transactions.filter(t => t.type === 'receipt' && t.date === todayStr).length;
    const todayJournals = transactions.filter(t => t.type === 'journal' && t.date === todayStr).length;
    
    const paymentVoucher = document.getElementById('payment-voucher');
    const receiptVoucher = document.getElementById('receipt-voucher');
    const journalVoucher = document.getElementById('journal-voucher');
    
    if (paymentVoucher) {
        paymentVoucher.value = `PAY-${year}-${String(todayPayments + 1).padStart(3, '0')}`;
    }
    if (receiptVoucher) {
        receiptVoucher.value = `REC-${year}-${String(todayReceipts + 1).padStart(3, '0')}`;
    }
    if (journalVoucher) {
        journalVoucher.value = `JRN-${year}-${String(todayJournals + 1).padStart(3, '0')}`;
    }
}

function displayRecentTransactions() {
    const tbody = document.getElementById('transactions-body');
    
    if (!tbody) return;
    
    if (transactions.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="no-data">no transactions yet</td></tr>';
        const totalCountEl = document.getElementById('total-count');
        if (totalCountEl) totalCountEl.textContent = '0';
        return;
    }
    
    const sortedTransactions = [...transactions].sort((a, b) => {
        const dateCompare = new Date(b.date) - new Date(a.date);
        if (dateCompare !== 0) return dateCompare;
        return b.id - a.id;
    });
    
    const recentTransactions = sortedTransactions.slice(0, 10);
    
    let html = '';
    recentTransactions.forEach(t => {
        let ledgerDisplay = t.ledger;
        if (t.bank_name) {
            const bank = banks.find(b => b.name === t.bank_name);
            ledgerDisplay = bank ? bank.displayName : t.bank_name;
            if (t.account_number) {
                ledgerDisplay += ` (${t.account_number})`;
            }
        }
        
        const displayDate = formatDate(t.date);
        
        html += `
            <tr>
                <td>${displayDate}</td>
                <td>${t.voucher || '-'}</td>
                <td><span class="badge ${t.entry_type || t.type}">${t.type || '-'}</span></td>
                <td>${ledgerDisplay || '-'}</td>
                <td class="${t.debit > 0 ? 'debit-amount' : ''}">${t.debit > 0 ? formatNumber(t.debit) : '-'}</td>
                <td class="${t.credit > 0 ? 'credit-amount' : ''}">${t.credit > 0 ? formatNumber(t.credit) : '-'}</td>
                <td>${t.narration ? t.narration.substring(0, 30) + (t.narration.length > 30 ? '...' : '') : '-'}</td>
                <td>
                    <button onclick="deleteTransaction(${t.id})" class="delete-btn" title="Delete transaction">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
    
    const totalCountEl = document.getElementById('total-count');
    if (totalCountEl) {
        totalCountEl.textContent = transactions.length;
    }
}

function formatDate(dateString) {
    if (!dateString) return '-';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    } catch (e) {
        return dateString;
    }
}

function formatNumber(num) {
    if (num === undefined || num === null || isNaN(num)) return '-';
    return Number(num).toFixed(2);
}

function showReport(type) {
    alert(`${type} report generation will be implemented here`);
}

function validateForm(type) {
    // Validation logic here if needed
}

// ==================== EXPORT FUNCTIONS ====================
window.switchTab = switchTab;
window.saveEntry = saveEntry;
window.cancelEntry = cancelEntry;
window.saveJournal = saveJournal;
window.resetJournal = resetJournal;
window.addJournalRow = addJournalRow;
window.removeJournalRow = removeJournalRow;
window.showNewLedgerModal = showNewLedgerModal;
window.showJournalNewLedgerModal = showJournalNewLedgerModal;
window.handleJournalLedgerSelect = handleJournalLedgerSelect;
window.cancelJournalNewLedger = cancelJournalNewLedger;
window.closeModal = closeModal;
window.createNewLedger = createNewLedger;
window.showReport = showReport;
window.updateJournalTotals = updateJournalTotals;
window.validateJournalForSave = validateJournalForSave;
window.deleteTransaction = deleteTransaction;
window.deleteAllTransactions = deleteAllTransactions;
window.showNewBankModal = showNewBankModal;
window.closeBankModal = closeBankModal;
window.createNewBank = createNewBank;
window.handleBankSelect = handleBankSelect;
window.announceToScreenReader = announceToScreenReader;
window.highlightElement = highlightElement;
window.displayRecentTransactions = displayRecentTransactions;
window.formatDate = formatDate;
window.formatNumber = formatNumber;
window.showManageLedgersModal = showManageLedgersModal;
window.closeManageLedgersModal = closeManageLedgersModal;
window.showDeleteLedgerModal = showDeleteLedgerModal;
window.closeDeleteLedgerModal = closeDeleteLedgerModal;
window.confirmDeleteLedger = confirmDeleteLedger;
window.filterLedgers = filterLedgers;

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);