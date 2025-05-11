const Order = require("../models/Order");
const Customer = require("../models/Customer");


exports.createOrder = async (req, res) => {
  try {
    
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(404).json({ error: "Customer not found" });

    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};



exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getOrderById = async (req, res) => {
    try{
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.json(order);
    }
    catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}