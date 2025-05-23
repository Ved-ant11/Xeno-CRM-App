const router = require("express").Router();
const orderController = require("../controllers/orderController");

router
  .route("/")
  .post(orderController.createOrder) 
  .get(orderController.getAllOrders); 

router
  .route("/:id")
  .get(orderController.getOrderById) 
  .put(orderController.updateOrder) 
  .delete(orderController.deleteOrder); 

module.exports = router;
