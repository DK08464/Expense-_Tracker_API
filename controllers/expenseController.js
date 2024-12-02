const { Expense, expenses } = require('../models/expenseModel');
const { categories } = require('../config/categories');

exports.addExpense = (req, res) => {
    const { category, amount, date, description } = req.body;

    // Validation
    if (!categories.includes(category)) {
        return res.status(400).json({ status: 'error', error: 'Invalid category' });
    }
    if (amount <= 0) {
        return res.status(400).json({ status: 'error', error: 'Amount must be positive' });
    }

    const newExpense = new Expense(Date.now(), category, amount, date || new Date(), description || '');
    expenses.push(newExpense);

    res.status(201).json({ status: 'success', data: newExpense });
};

exports.getExpenses = (req, res) => {
    const { category, startDate, endDate } = req.query;
    let filteredExpenses = expenses;

    if (category) {
        filteredExpenses = filteredExpenses.filter(exp => exp.category === category);
    }
    if (startDate && endDate) {
        filteredExpenses = filteredExpenses.filter(exp =>
            new Date(exp.date) >= new Date(startDate) && new Date(exp.date) <= new Date(endDate)
        );
    }

    res.status(200).json({ status: 'success', data: filteredExpenses });
};

exports.analyzeSpending = (req, res) => {
    const analysis = {};

    expenses.forEach(exp => {
        if (!analysis[exp.category]) {
            analysis[exp.category] = 0;
        }
        analysis[exp.category] += exp.amount;
    });

    res.status(200).json({ status: 'success', data: analysis });
};
