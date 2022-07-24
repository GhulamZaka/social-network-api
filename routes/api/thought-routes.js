const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  addThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThought);

// /api/thoughts/:id
router.route("/:id").get(getThoughtById);

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").delete(deleteThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(addReaction);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route("/:userId/:thoughtId/:reactionId").delete(deleteReaction);

module.exports = router;
