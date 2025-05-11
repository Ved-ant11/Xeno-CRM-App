const express = require("express");
const app = express();
const connectDB = require("./config/db");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(express.json());

connectDB();

app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);


app.get("/", (req, res) => res.send("Xeno App"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
