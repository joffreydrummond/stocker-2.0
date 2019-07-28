const router = require("express").Router();
const strainsController = require("../../controllers/strainsController");

router
  .route("/")
  .get(strainsController.findAll);
  // .post(strainsController.create);

// router
//   .route("/:_id")
//   .get(strainsController.findById);

module.exports = router;
