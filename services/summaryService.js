const { expenses } = require('../models/expenseModel');

exports.generateSummaryReport = (period) => {
    const now = new Date();
    let summary = {};

    let filteredExpenses = expenses.filter(exp => {
        let expDate = new Date(exp.date);
        if (period === 'daily') {
            return expDate.toDateString() === now.toDateString();
        } else if (period === 'weekly') {
            let oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
            return expDate >= oneWeekAgo;
        } // Add 'monthly' logic similarly
    });

    filteredExpenses.forEach(exp => {
        if (!summary[exp.category]) summary[exp.category] = 0;
        summary[exp.category] += exp.amount;
    });

    console.log(`Generated ${period} summary report:`, summary);
};
