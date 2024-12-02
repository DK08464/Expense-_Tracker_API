const express = require('express');
const router = express.Router();
const { addExpense, getExpenses, analyzeSpending } = require('../controllers/expenseController');

router.post('/expenses', addExpense);
router.get('/expenses', getExpenses);
router.get('/expenses/analysis', analyzeSpending);

module.exports = router;
