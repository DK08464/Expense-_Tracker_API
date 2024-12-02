const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const expenseRoutes = require('./routes/expenseRoutes');
const { generateSummaryReport } = require('./services/summaryService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', expenseRoutes);

// Schedule CRON job for daily summary
cron.schedule('0 0 * * *', () => {
    generateSummaryReport('daily');
});

// Weekly and monthly CRON jobs can be similarly scheduled

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
