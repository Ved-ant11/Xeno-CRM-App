const router = require("express").Router();
const customerController = require("../controllers/customerController");
const express = require("express");
const {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

router.post("/", authenticate, createCustomer);
router.get("/", authenticate, getCustomers);

router.get("/:id", authenticate, getCustomerById);
router.put("/:id", authenticate, updateCustomer);
router.delete("/:id", authenticate, deleteCustomer);


module.exports = router;
