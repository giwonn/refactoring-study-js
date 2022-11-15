const statement = require('./statement.js');
const invoices = require('./invoices.json');
const plays = require('./plays.json');

const result = statement(invoices[0], plays);

console.log(result);