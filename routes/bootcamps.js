const express = require("express");

const {
  getAllBootCamps,
  getBootCamp,
  createBootCamp,
  updateBootCamp,
  deleteBootCamp,
  getSingleBootCamp,
} = require("../controllers/bootcamps");

const router = express.Router();

router.route("/").get(getAllBootCamps);
router.route("/").post(createBootCamp);
router
  .route("/:id")
  .get(getSingleBootCamp)
  .put(updateBootCamp)
  .delete(deleteBootCamp);

module.exports = router;
