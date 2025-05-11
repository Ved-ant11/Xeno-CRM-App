const router = require("express").Router();
const customerController = require("../controllers/customerController");

router
  .route("/")
  .post(customerController.createCustomer)
  .get(customerController.getAllCustomers);

router
  .route("/:id")
  .get(customerController.getCustomerById)
  .put(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;
