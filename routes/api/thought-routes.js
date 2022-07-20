const router = require("express").Router();

const {
  getAllThought,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/thought-controller");

// /api/users
router.route("/").get(getAllThought);
// .post(createUser);

// /api/users/:id
// router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
