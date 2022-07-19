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
      .then((dbUser) =>
        res.json(dbUser).catch((err) => {
          console.log(err);
          res.sendStatus(400);
        })
      );
  },
};

module.exports = userController;
