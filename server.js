const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    orderID: 1,
    customerName: "Pamal Ranasinghe",
    district: "Colombo",
    totalbill: "Rs.18500/=",
  },
  {
    orderID: 2,
    customerName: "Didula Lakminda",
    district: "Anuradhapura",
    totalbill: "Rs.22500/=",
  },
  {
    orderID: 3,
    customerName: "Lumini Nanayakkara",
    district: "Jaffna",
    totalbill: "Rs.1250/=",
  },
  {
    orderID:4,
    customerName: "Kaveen Akash",
    district: "Matara",
    totalbill: "Rs.4500/=",
  },
  {
    orderID: 5,
    customerName: "Tharusha",
    district: "Kegalle",
    totalbill: "Rs.28500/=",
  },
];
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hi Order Service");
  });

app.get("/orders", (req, res) => {
    return res.send(data);
  });

app.post("/orders-by-district", (req, res) => {
  const result = data.filter(
    (item) => item.district == req.body.district
  );
  res.send(result);
});



app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
