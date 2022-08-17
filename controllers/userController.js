const User = require("../models/User");

/* We want to -
- GET all users  --> find()
- GET a single user by its _id and populated thought and friend data findOne()
- POST a new user create()
- PUT to update a user by its _id --> findOneAndUpdate()
- DELETE to remove user by its _id --> findOneAndDelete()
BONUS: remove a user's associated thoughts when deleted

/api/users/:userId/friends/:friendID

- POST method to add a new friend to a user's friend list
- DELETE to remove a friend from a user's friend list 
*/


module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      // .select('-__v') // versionKey --> contains the internal revision of the document, the name of the document is configurable
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "No user found with that associated ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Cannot delete, no user with that associated ID",
            })
          : res.json({ message: "User has been deleted" })
      )
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true, runValidators: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "No user found with that associated ID (update)",
            })
          : res.json(user)
      )
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true, runValidators: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "No user found with that associated ID (adding friend",
            })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true, rundValidators: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({
              message:
                "No user found with that associated ID (removing a friend",
            })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
