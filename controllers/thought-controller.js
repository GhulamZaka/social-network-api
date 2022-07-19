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
      .then((dbThought) =>
        res.json(dbThought).catch((err) => {
          console.log(err);
          res.sendStatus(400);
        })
      );
  },
};

module.exports = thoughtController;
