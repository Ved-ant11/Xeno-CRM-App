const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = new Customer({
      ...req.body,
      user: req.user.id,
    });
    const customer = await newCustomer.save();
    res.json(customer);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({ user: req.user.id });
    res.json(customers);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(customer);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    res.json(customer);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};