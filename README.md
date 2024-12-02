1. Personal Expense Tracker API
 Overview
 Managing daily expenses is crucial for budgeting and financial planning. The Personal Expense
 Tracker API helps users log, view, and analyze their expenses. It provides insights into spending
 patterns and assists in better decision-making.
 Features
 1. Addanewexpense with details such as category, amount, and date.
 2. Retrieve a summary of expenses filtered by category or date range.
 3. Analyze spending patterns, such as the highest spending category or monthly totals.
 4. Generate a weekly or monthly summary report using automated tasks.
Requirements
 ● Endpoints:
 ○ AddExpense(POST /expenses): Log a new expense.
 ○ GetExpenses (GET /expenses): Retrieve expenses based on filters like category
 or date range.
 ○ Analyze Spending (GET /expenses/analysis): Get insights like total by
 category or time.
 ○ Generate Summary (CRON job): Automated reports for daily / weekly / monthly
 expense summaries.
 ● DataValidation (Optional) :
 ○ Expensecategories (e.g., "Food", "Travel") must be predefined.
 ○ Amountmustbeapositive number.
 ● Response Format: JSON structured as { status, data, error }.
 Solution Design
 ● Usearrays for in-memory storage.
 ● Implement sorting and filtering logic to retrieve and group expenses.
 ● Leverage node-cron for generating summary reports.
