const { Thought } = require("../models");

const thoughtController = {
  // get all thoughts
  getAllThought(req, res) {
    Thought.find({})
      // .populate({
      //   path: "comments",
      //   select: "-__v",
      // })
      // .select("-__v")
      // .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create user
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
  },
};
// addThought({ params, body }, res) {
//   console.log(body);
//   Thought.create(body)
//     .then(({ _id }) => {
//       return Thought.findOneAndUpdate(
//         { _id: params.thoughtId },
//         { $push: { thoughts: _id } },
//         { new: true }
//       );
//     })
//     .then((dbThoughtData) => {
//       if (!dbThoughtData) {
//         res.status(404).json({ message: "No thought found with this id!" });
//         return;
//       }
//       res.json(dbThoughtData);
//     })
//     .catch((err) => res.json(err));
// },

module.exports = thoughtController;
