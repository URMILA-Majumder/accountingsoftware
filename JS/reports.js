// Modern Reports JavaScript

// Initialize date pickers when page loads
document.addEventListener('DOMContentLoaded', function() {
    initReportDatePickers();
    loadLedgersForSelector();
    setupReportEventListeners();
    addReportStyles();
});

// ==================== INITIALIZATION ====================

function initReportDatePickers() {
    flatpickr(".date-picker", {
        dateFormat: "Y-m-d",
        defaultDate: "today",
        allowInput: true,
        altInput: true,
        altFormat: "F j, Y",
        theme: "material_blue"
    });
}

function setupReportEventListeners() {
    // Add loading states to buttons
    document.querySelectorAll('.btn-primary, .btn-success').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('btn-primary') && this.innerHTML.includes('load')) {
                showButtonLoading(this);
            }
        });
    });
}

function addReportStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .report-section {
            animation: fadeIn 0.5s ease;
        }
        
        .report-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 0.5rem;
            font-size: 1.4rem;
        }
        
        .report-table th {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-radius: 12px 12px 0 0;
        }
        
        .report-table td {
            padding: 1.2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            color: #2d3748;
        }
        
        .report-table tbody tr {
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .report-table tbody tr:hover td {
            transform: scale(1.01);
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            background: linear-gradient(135deg, #f7fafc, #edf2f7);
        }
        
        .report-table .total-row td {
            background: linear-gradient(135deg, #667eea20, #764ba220);
            font-weight: 700;
            border: 2px solid #667eea;
        }
        
        .report-summary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 20px;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
        }
        
        .summary-item {
            text-align: center;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .summary-item .label {
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .summary-item .value {
            font-size: 2.4rem;
            font-weight: 800;
            color: white;
        }
        
        .summary-item .value.positive {
            color: #84fab0;
        }
        
        .summary-item .value.negative {
            color: #fc8181;
        }
        
        .report-header {
            margin-bottom: 2.5rem;
            text-align: center;
        }
        
        .report-header h2 {
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
        }
        
        .report-header p {
            font-size: 1.5rem;
            color: #718096;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .report-header p i {
            color: #667eea;
        }
        
        .loading {
            text-align: center;
            padding: 5rem;
            color: #a0aec0;
            font-size: 1.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
        
        .loading i {
            font-size: 4rem;
            color: #667eea;
            animation: spin 2s linear infinite;
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .badge-success {
            background: linear-gradient(135deg, #84fab0, #8fd3f4);
            color: #2d3748;
            padding: 0.4rem 1rem;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: 600;
        }
        
        .badge-warning {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: white;
            padding: 0.4rem 1rem;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: 600;
        }
        
        .btn-loading {
            position: relative;
            pointer-events: none;
            opacity: 0.8;
        }
        
        .btn-loading i {
            animation: spin 1s linear infinite;
        }
        
        @media print {
            .report-controls,
            .ledger-selector,
            .report-actions,
            .export-options {
                display: none !important;
            }
            
            .report-section {
                padding: 0;
            }
            
            .report-header h2 {
                -webkit-text-fill-color: #2d3748;
                color: #2d3748;
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== HELPER FUNCTIONS ====================

function showButtonLoading(btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner"></i> Loading...';
    btn.classList.add('btn-loading');
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('btn-loading');
        btn.disabled = false;
    }, 1000);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-BD', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function showNotification(message, type = 'info') {
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

// ==================== LEDGER SELECTOR ====================

function loadLedgersForSelector() {
    const ledgerSelect = document.getElementById('ledger-select');
    if (!ledgerSelect) return;
    
    let options = '<option value="">-- Select Ledger --</option>';
    
    // Get all unique ledgers from transactions
    const uniqueLedgers = [...new Set(transactions.map(t => t.ledger))];
    
    // Add ledgers from master list that have transactions
    ledgers.forEach(ledger => {
        if (uniqueLedgers.includes(ledger.name)) {
            options += `<option value="${ledger.name}" data-type="${ledger.type}">${ledger.name} (${ledger.type})</option>`;
        }
    });
    
    // Add ledgers without transactions
    ledgers.forEach(ledger => {
        if (!uniqueLedgers.includes(ledger.name)) {
            options += `<option value="${ledger.name}" data-type="${ledger.type}">${ledger.name} (${ledger.type}) - No transactions</option>`;
        }
    });
    
    ledgerSelect.innerHTML = options;
}

// ==================== LEDGER REPORT ====================

function loadLedgerReport() {
    const fromDate = document.getElementById('from-date')?.value;
    const toDate = document.getElementById('to-date')?.value;
    const selectedLedger = document.getElementById('ledger-select')?.value;
    
    if (!selectedLedger) {
        showNotification('Please select a ledger', 'error');
        return;
    }
    
    if (!fromDate || !toDate) {
        showNotification('Please select from and to dates', 'error');
        return;
    }
    
    // Filter transactions for selected ledger and date range
    let filteredTransactions = transactions.filter(t => t.ledger === selectedLedger);
    
    if (fromDate) {
        filteredTransactions = filteredTransactions.filter(t => t.date >= fromDate);
    }
    if (toDate) {
        filteredTransactions = filteredTransactions.filter(t => t.date <= toDate);
    }
    
    if (filteredTransactions.length === 0) {
        document.getElementById('report-content').innerHTML = `
            <div class="loading">
                <i class="fas fa-search"></i>
                <p>No transactions found for this period</p>
            </div>
        `;
        return;
    }
    
    // Sort by date
    filteredTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Calculate opening balance (all transactions before fromDate)
    let openingBalance = 0;
    if (fromDate) {
        const previousTransactions = transactions.filter(t => 
            t.ledger === selectedLedger && t.date < fromDate
        );
        previousTransactions.forEach(t => {
            openingBalance += (t.debit - t.credit);
        });
    }
    
    // Get ledger info
    const ledgerInfo = ledgers.find(l => l.name === selectedLedger);
    const ledgerType = ledgerInfo ? ledgerInfo.type : 'unknown';
    
    // Generate report HTML
    let reportHTML = `
        <div class="report-header">
            <h2>${selectedLedger} Ledger</h2>
            <p><i class="fas fa-calendar"></i> ${formatDate(fromDate)} to ${formatDate(toDate)}</p>
            <p><span class="badge ${getLedgerBadgeClass(ledgerType)}">${ledgerType}</span></p>
        </div>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Voucher</th>
                    <th>Description</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    let runningBalance = openingBalance;
    let totalDebit = 0;
    let totalCredit = 0;
    
    // Show opening balance row
    if (fromDate) {
        reportHTML += `
            <tr class="opening-balance">
                <td colspan="3"><strong>Opening Balance</strong></td>
                <td></td>
                <td></td>
                <td><strong>${formatCurrency(openingBalance)}</strong></td>
            </tr>
        `;
    }
    
    filteredTransactions.forEach(t => {
        runningBalance += (t.debit - t.credit);
        totalDebit += t.debit;
        totalCredit += t.credit;
        
        reportHTML += `
            <tr>
                <td>${formatDate(t.date)}</td>
                <td>${t.voucher || '-'}</td>
                <td>${t.narration || '-'}</td>
                <td class="debit-amount">${t.debit > 0 ? formatCurrency(t.debit) : '-'}</td>
                <td class="credit-amount">${t.credit > 0 ? formatCurrency(t.credit) : '-'}</td>
                <td class="${runningBalance >= 0 ? 'debit-amount' : 'credit-amount'}">${formatCurrency(runningBalance)}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
            <tfoot>
                <tr class="total-row">
                    <td colspan="3"><strong>Total</strong></td>
                    <td><strong>${formatCurrency(totalDebit)}</strong></td>
                    <td><strong>${formatCurrency(totalCredit)}</strong></td>
                    <td><strong>${formatCurrency(runningBalance)}</strong></td>
                </tr>
            </tfoot>
        </table>
        
        <div class="report-summary">
            <div class="summary-item">
                <div class="label">Opening Balance</div>
                <div class="value">${formatCurrency(openingBalance)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Total Debit</div>
                <div class="value positive">${formatCurrency(totalDebit)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Total Credit</div>
                <div class="value negative">${formatCurrency(totalCredit)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Closing Balance</div>
                <div class="value ${runningBalance >= 0 ? 'positive' : 'negative'}">${formatCurrency(runningBalance)}</div>
            </div>
        </div>
    `;
    
    document.getElementById('report-content').innerHTML = reportHTML;
    showNotification('Ledger report generated successfully!', 'success');
}

function getLedgerBadgeClass(type) {
    const classes = {
        'asset': 'badge-primary',
        'liability': 'badge-warning',
        'income': 'badge-success',
        'expense': 'badge-danger',
        'equity': 'badge-info'
    };
    return classes[type] || 'badge-secondary';
}

// ==================== TRIAL BALANCE ====================

function loadTrialBalance() {
    const asOfDate = document.getElementById('as-of-date')?.value;
    
    if (!asOfDate) {
        showNotification('Please select a date', 'error');
        return;
    }
    
    // Filter transactions up to asOfDate
    const filteredTransactions = transactions.filter(t => t.date <= asOfDate);
    
    if (filteredTransactions.length === 0) {
        document.getElementById('report-content').innerHTML = `
            <div class="loading">
                <i class="fas fa-search"></i>
                <p>No transactions found</p>
            </div>
        `;
        return;
    }
    
    // Calculate balances for each ledger
    const balances = {};
    filteredTransactions.forEach(t => {
        if (!balances[t.ledger]) {
            balances[t.ledger] = { debit: 0, credit: 0, type: 'unknown' };
        }
        balances[t.ledger].debit += t.debit;
        balances[t.ledger].credit += t.credit;
        
        // Get ledger type
        const ledgerInfo = ledgers.find(l => l.name === t.ledger);
        if (ledgerInfo) {
            balances[t.ledger].type = ledgerInfo.type;
        }
    });
    
    let totalDebit = 0;
    let totalCredit = 0;
    let reportHTML = `
        <div class="report-header">
            <h2>Trial Balance</h2>
            <p><i class="fas fa-calendar"></i> As of ${formatDate(asOfDate)}</p>
        </div>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Type</th>
                    <th>Debit</th>
                    <th>Credit</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    Object.keys(balances).sort().forEach(ledger => {
        const balance = balances[ledger].debit - balances[ledger].credit;
        totalDebit += balances[ledger].debit;
        totalCredit += balances[ledger].credit;
        
        reportHTML += `
            <tr>
                <td>${ledger}</td>
                <td><span class="badge ${getLedgerBadgeClass(balances[ledger].type)}">${balances[ledger].type}</span></td>
                <td class="debit-amount">${balances[ledger].debit > 0 ? formatCurrency(balances[ledger].debit) : '-'}</td>
                <td class="credit-amount">${balances[ledger].credit > 0 ? formatCurrency(balances[ledger].credit) : '-'}</td>
            </tr>
        `;
    });
    
    const difference = totalDebit - totalCredit;
    
    reportHTML += `
            </tbody>
            <tfoot>
                <tr class="total-row">
                    <td colspan="2"><strong>Total</strong></td>
                    <td><strong>${formatCurrency(totalDebit)}</strong></td>
                    <td><strong>${formatCurrency(totalCredit)}</strong></td>
                </tr>
            </tfoot>
        </table>
        
        <div class="report-summary">
            <div class="summary-item">
                <div class="label">Total Debits</div>
                <div class="value positive">${formatCurrency(totalDebit)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Total Credits</div>
                <div class="value negative">${formatCurrency(totalCredit)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Difference</div>
                <div class="value ${Math.abs(difference) < 0.01 ? 'positive' : 'negative'}">${formatCurrency(difference)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Status</div>
                <div class="value">
                    <span class="badge ${Math.abs(difference) < 0.01 ? 'badge-success' : 'badge-warning'}">
                        ${Math.abs(difference) < 0.01 ? 'Balanced ✓' : 'Unbalanced ⚠'}
                    </span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('report-content').innerHTML = reportHTML;
    showNotification('Trial balance generated successfully!', 'success');
}

// ==================== PROFIT & LOSS ====================

function loadProfitLoss() {
    const fromDate = document.getElementById('from-date')?.value;
    const toDate = document.getElementById('to-date')?.value;
    
    if (!fromDate || !toDate) {
        showNotification('Please select from and to dates', 'error');
        return;
    }
    
    // Filter transactions for date range
    const filteredTransactions = transactions.filter(t => 
        t.date >= fromDate && t.date <= toDate
    );
    
    if (filteredTransactions.length === 0) {
        document.getElementById('report-content').innerHTML = `
            <div class="loading">
                <i class="fas fa-search"></i>
                <p>No transactions found for this period</p>
            </div>
        `;
        return;
    }
    
    // Calculate income and expenses
    let totalIncome = 0;
    let totalExpenses = 0;
    const incomeDetails = {};
    const expenseDetails = {};
    
    filteredTransactions.forEach(t => {
        const ledgerInfo = ledgers.find(l => l.name === t.ledger);
        
        if (ledgerInfo?.type === 'income' || t.type === 'receipt') {
            const amount = t.credit || t.amount || 0;
            totalIncome += amount;
            incomeDetails[t.ledger] = (incomeDetails[t.ledger] || 0) + amount;
        } else if (ledgerInfo?.type === 'expense' || t.type === 'payment') {
            const amount = t.debit || t.amount || 0;
            totalExpenses += amount;
            expenseDetails[t.ledger] = (expenseDetails[t.ledger] || 0) + amount;
        }
    });
    
    const netProfit = totalIncome - totalExpenses;
    const profitMargin = totalIncome > 0 ? (netProfit / totalIncome * 100) : 0;
    
    let reportHTML = `
        <div class="report-header">
            <h2>Profit & Loss Statement</h2>
            <p><i class="fas fa-calendar"></i> ${formatDate(fromDate)} to ${formatDate(toDate)}</p>
        </div>
        
        <table class="report-table">
            <thead>
                <tr>
                    <th colspan="2" style="background: linear-gradient(135deg, #84fab0, #8fd3f4); color: #2d3748;">
                        <i class="fas fa-arrow-up"></i> INCOME
                    </th>
                </tr>
                <tr>
                    <th>Particulars</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    Object.keys(incomeDetails).sort().forEach(ledger => {
        reportHTML += `
            <tr>
                <td>${ledger}</td>
                <td class="debit-amount">${formatCurrency(incomeDetails[ledger])}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
            <tfoot>
                <tr class="total-row">
                    <td><strong>Total Income</strong></td>
                    <td><strong>${formatCurrency(totalIncome)}</strong></td>
                </tr>
            </tfoot>
        </table>
        
        <table class="report-table" style="margin-top: 2rem;">
            <thead>
                <tr>
                    <th colspan="2" style="background: linear-gradient(135deg, #fc8181, #f56565); color: white;">
                        <i class="fas fa-arrow-down"></i> EXPENSES
                    </th>
                </tr>
                <tr>
                    <th>Particulars</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    Object.keys(expenseDetails).sort().forEach(ledger => {
        reportHTML += `
            <tr>
                <td>${ledger}</td>
                <td class="credit-amount">${formatCurrency(expenseDetails[ledger])}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
            <tfoot>
                <tr class="total-row">
                    <td><strong>Total Expenses</strong></td>
                    <td><strong>${formatCurrency(totalExpenses)}</strong></td>
                </tr>
            </tfoot>
        </table>
        
        <div class="report-summary">
            <div class="summary-item">
                <div class="label">Total Income</div>
                <div class="value positive">${formatCurrency(totalIncome)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Total Expenses</div>
                <div class="value negative">${formatCurrency(totalExpenses)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Net Profit/Loss</div>
                <div class="value ${netProfit >= 0 ? 'positive' : 'negative'}">${formatCurrency(netProfit)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Profit Margin</div>
                <div class="value ${profitMargin >= 0 ? 'positive' : 'negative'}">${profitMargin.toFixed(2)}%</div>
            </div>
        </div>
    `;
    
    document.getElementById('report-content').innerHTML = reportHTML;
    showNotification('Profit & Loss statement generated successfully!', 'success');
}

// ==================== BALANCE SHEET ====================

function loadBalanceSheet() {
    const asOfDate = document.getElementById('as-of-date')?.value;
    
    if (!asOfDate) {
        showNotification('Please select a date', 'error');
        return;
    }
    
    // Filter transactions up to asOfDate
    const filteredTransactions = transactions.filter(t => t.date <= asOfDate);
    
    if (filteredTransactions.length === 0) {
        document.getElementById('report-content').innerHTML = `
            <div class="loading">
                <i class="fas fa-search"></i>
                <p>No transactions found</p>
            </div>
        `;
        return;
    }
    
    // Calculate balances by account type
    const balances = {
        assets: {},
        liabilities: {},
        equity: {}
    };
    
    let totalAssets = 0;
    let totalLiabilities = 0;
    let totalEquity = 0;
    
    filteredTransactions.forEach(t => {
        const ledgerInfo = ledgers.find(l => l.name === t.ledger);
        if (!ledgerInfo) return;
        
        const balance = t.debit - t.credit;
        
        if (ledgerInfo.type === 'asset') {
            balances.assets[t.ledger] = (balances.assets[t.ledger] || 0) + balance;
            totalAssets += balance;
        } else if (ledgerInfo.type === 'liability') {
            balances.liabilities[t.ledger] = (balances.liabilities[t.ledger] || 0) - balance;
            totalLiabilities -= balance;
        } else if (ledgerInfo.type === 'equity') {
            balances.equity[t.ledger] = (balances.equity[t.ledger] || 0) - balance;
            totalEquity -= balance;
        }
    });
    
    const totalLiabilitiesEquity = totalLiabilities + totalEquity;
    const difference = totalAssets - totalLiabilitiesEquity;
    
    let reportHTML = `
        <div class="report-header">
            <h2>Balance Sheet</h2>
            <p><i class="fas fa-calendar"></i> As of ${formatDate(asOfDate)}</p>
        </div>
        
        <table class="report-table">
            <thead>
                <tr>
                    <th colspan="2" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
                        <i class="fas fa-chart-bar"></i> ASSETS
                    </th>
                </tr>
                <tr>
                    <th>Particulars</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    Object.keys(balances.assets).sort().forEach(asset => {
        if (Math.abs(balances.assets[asset]) > 0.01) {
            reportHTML += `
                <tr>
                    <td>${asset}</td>
                    <td class="debit-amount">${formatCurrency(balances.assets[asset])}</td>
                </tr>
            `;
        }
    });
    
    reportHTML += `
            </tbody>
            <tfoot>
                <tr class="total-row">
                    <td><strong>Total Assets</strong></td>
                    <td><strong>${formatCurrency(totalAssets)}</strong></td>
                </tr>
            </tfoot>
        </table>
        
        <table class="report-table" style="margin-top: 2rem;">
            <thead>
                <tr>
                    <th colspan="2" style="background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white;">
                        <i class="fas fa-credit-card"></i> LIABILITIES
                    </th>
                </tr>
                <tr>
                    <th>Particulars</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    Object.keys(balances.liabilities).sort().forEach(liability => {
        if (Math.abs(balances.liabilities[liability]) > 0.01) {
            reportHTML += `
                <tr>
                    <td>${liability}</td>
                    <td class="credit-amount">${formatCurrency(balances.liabilities[liability])}</td>
                </tr>
            `;
        }
    });
    
    reportHTML += `
            </tbody>
            <tfoot>
                <tr class="total-row">
                    <td><strong>Total Liabilities</strong></td>
                    <td><strong>${formatCurrency(totalLiabilities)}</strong></td>
                </tr>
            </tfoot>
        </table>
        
        <table class="report-table" style="margin-top: 2rem;">
            <thead>
                <tr>
                    <th colspan="2" style="background: linear-gradient(135deg, #84fab0, #8fd3f4); color: #2d3748;">
                        <i class="fas fa-hand-holding-usd"></i> EQUITY
                    </th>
                </tr>
                <tr>
                    <th>Particulars</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    Object.keys(balances.equity).sort().forEach(equity => {
        if (Math.abs(balances.equity[equity]) > 0.01) {
            reportHTML += `
                <tr>
                    <td>${equity}</td>
                    <td class="credit-amount">${formatCurrency(balances.equity[equity])}</td>
                </tr>
            `;
        }
    });
    
    reportHTML += `
            </tbody>
            <tfoot>
                <tr class="total-row">
                    <td><strong>Total Equity</strong></td>
                    <td><strong>${formatCurrency(totalEquity)}</strong></td>
                </tr>
            </tfoot>
        </table>
        
        <div class="report-summary">
            <div class="summary-item">
                <div class="label">Total Assets</div>
                <div class="value positive">${formatCurrency(totalAssets)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Total Liabilities</div>
                <div class="value negative">${formatCurrency(totalLiabilities)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Total Equity</div>
                <div class="value">${formatCurrency(totalEquity)}</div>
            </div>
            <div class="summary-item">
                <div class="label">Liabilities + Equity</div>
                <div class="value ${Math.abs(difference) < 0.01 ? 'positive' : 'negative'}">${formatCurrency(totalLiabilitiesEquity)}</div>
            </div>
        </div>
        
        ${Math.abs(difference) > 0.01 ? `
            <div style="margin-top: 2rem; text-align: center;">
                <span class="badge-warning" style="padding: 1rem 2rem; font-size: 1.4rem;">
                    <i class="fas fa-exclamation-triangle"></i> Difference: ${formatCurrency(difference)}
                </span>
            </div>
        ` : ''}
    `;
    
    document.getElementById('report-content').innerHTML = reportHTML;
    showNotification('Balance sheet generated successfully!', 'success');
}

// ==================== UTILITY FUNCTIONS ====================

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

function printReport() {
    window.print();
}

function exportToPDF() {
    showNotification('Preparing PDF...', 'info');
    // Use browser's print to PDF with custom settings
    window.print();
}

function exportToExcel() {
    const reportContent = document.getElementById('report-content').innerHTML;
    const reportTitle = document.querySelector('.report-header h2')?.textContent || 'Report';
    const date = new Date().toISOString().split('T')[0];
    
    // Create a more comprehensive Excel export
    const styles = `
        <style>
            table { border-collapse: collapse; width: 100%; }
            th { background: #667eea; color: white; padding: 10px; }
            td { padding: 8px; border: 1px solid #ddd; }
            .debit-amount { color: #10b981; }
            .credit-amount { color: #ef4444; }
            .total-row { font-weight: bold; background: #f3f4f6; }
        </style>
    `;
    
    const fullHTML = `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>${reportTitle}</title>
                ${styles}
            </head>
            <body>
                ${reportContent}
                <p><em>Generated on ${new Date().toLocaleString()}</em></p>
            </body>
        </html>
    `;
    
    const blob = new Blob([fullHTML], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${reportTitle.replace(/\s+/g, '_')}_${date}.xls`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showNotification('Excel file downloaded successfully!', 'success');
}

// Make functions globally available
window.loadLedgerReport = loadLedgerReport;
window.loadTrialBalance = loadTrialBalance;
window.loadProfitLoss = loadProfitLoss;
window.loadBalanceSheet = loadBalanceSheet;
window.printReport = printReport;
window.exportToPDF = exportToPDF;
window.exportToExcel = exportToExcel;