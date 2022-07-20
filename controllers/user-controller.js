const { User } = require("../models");

const userController = {
  // get all users
  getAllUser(req, res) {
    User.find({})
      // .populate({
      //   path: "comments",
      //   select: "-__v",
      // })
      // .select("-__v")
      // .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      // .populate({
      //   path: "comments",
      //   select: "-__v",
      // })
      // .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
