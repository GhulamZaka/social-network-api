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

  // get thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      // .populate({
      //   path: "comments",
      //   select: "-__v",
      // })
      // .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // // create thought
  // createThought({ body }, res) {
  //   Thought.create(body)
  //     .then((dbThoughtData) => res.json(dbThoughtData))
  //     .catch((err) => res.json(err));
  // },

  // // update thought by id
  // updateThought({ params, body }, res) {
  //   Thought.findOneAndUpdate({ _id: params.id }, body, {
  //     new: true,
  //     runValidators: true,
  //   })
  //     .then((dbThoughtData) => {
  //       if (!dbThoughtData) {
  //         res.status(404).json({ message: "No thought found with this id!" });
  //         return;
  //       }
  //       res.json(dbThoughtData);
  //     })
  //     .catch((err) => res.status(400).json(err));
  // },

  // // delete thought
  // deleteThought({ params }, res) {
  //   Thought.findOneAndDelete({ _id: params.id })
  //     .then((dbThoughtData) => {
  //       if (!dbThoughtData) {
  //         res.status(404).json({ message: "No thought found with this id!" });
  //         return;
  //       }
  //       res.json(dbThoughtData);
  //     })
  //     .catch((err) => res.status(400).json(err));
  // },
  // add comment to pizza
  addThought({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
