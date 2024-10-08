const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const port = 3000;
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let result = (marketPrice - boughtAt) * quantity;
  res.send(result.toString());
});
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = stock1 + stock2 + stock3 + stock4;
  res.status(result.toString());
});
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let result = (returns / boughtAt) * 100;
  res.send(boughtAt.toString());
});
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = stock1 + stock2 + stock3 + stock4;
  res.status(result.toString());
});
app.get('/status', (req, res) => {
  let returnPercentage = req.query.returnPercentage;
  if (returnPercentage > 0) {
    res.send('Profit');
  } else {
    res.send('Loss');
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
