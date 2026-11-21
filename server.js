const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// YAHI TERA STOCK LIST HAI - Yaha kuch bhi add kar, Front me aa jayega
let allStocks = [
  { symbol: "ALIOCN", name: "Aliocn", price: 1097.05, change: 11.12 },
  { symbol: "TATAMOTORS", name: "Tata Motors", price: 987.45, change: 4.52 },
  { symbol: "SUZLON", name: "Suzlon Energy", price: 72.30, change: 5.80 },
  { symbol: "RELIANCE", name: "Reliance", price: 2980.00, change: 1.20 },
  { symbol: "INFY", name: "Infosys", price: 1845.20, change: -1.50 },
  { symbol: "IDEA", name: "Vodafone Idea", price: 15.20, change: -6.20 },
  { symbol: "YESBANK", name: "Yes Bank", price: 24.50, change: -4.10 },
  { symbol: "BITCOIN", name: "Btc", price: 56324, change: 4.2},
  { symbol: "NIFTY50", name: "Nifty", price: 25800.60, change:52},
];
// Price ko har 2 second me hilao
setInterval(() => {
  allStocks.forEach(s => {
    let move = (Math.random() - 0.48) * s.price * 0.002;
    s.price = +(s.price + move).toFixed(2);
    s.change = +(parseFloat(s.change) + (Math.random() - 0.5) * 0.2).toFixed(2);
  });
}, 2000);

app.get('/api/all-stocks', (req, res) => {
  res.json(allStocks);
});

app.get('/', (req, res) => res.send("Backend Chal Raha Hai"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server on " + PORT));
