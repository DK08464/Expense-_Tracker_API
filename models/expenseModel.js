let expenses = []; // In-memory storage

class Expense {
    constructor(id, category, amount, date, description) {
        this.id = id;
        this.category = category;
        this.amount = amount;
        this.date = date;
        this.description = description;
    }
}

module.exports = { Expense, expenses };
