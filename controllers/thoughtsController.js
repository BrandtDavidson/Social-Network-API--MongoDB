const { User, Thought } = require("../models");

/*
/api/thoughts
- GET to get all thoughts --> .find()
- GET to get single thought by its _id --> .findOne()
- POST to create a new thought (note: push the created thought's _id to the associated user's thoughts array field ( aggregate )
    - --> .create()

- PUT to update a thought by its _id --> findOneAndUpdate()
- DELETE to remove a thought by its _id --> findOneAndDelete()


/api/thoughts/:thoughtId/reactions
- POST to create a reaction stored in a single thoughts reactions array field --> findOneAndUpdate(), aggregate
- DELETE to pull and remove a reaction by the reactions reactionId value  --> findOneAndUpdate()
*/

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId})
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought was found with that associated id'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
  },

  addThought(req, res) {
      Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate({ _id: req.body.userId}, { $push: { thoughts: thought._id} }, { new: true });
        })
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No user associated with that ID'})
                : res.json('Successful thought creation')
        )
        .catch((err) => {
            res.status(500).json(err);
        });
  },

updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId}, { $set: req.body }, { runValidators: true, new: true})
    .then((thought) => 
        !thought
            ? res.status(404).json({ message: 'No thought was found with the associated ID'})
            : res.json(thought)
    )
    .catch((err) => {
        res.status(500).json(err);
    });
},

addReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId}, { $push: { reactions: req.body}}, { runValidators: true, new: true})
    .then((thought) => 
        !thought
            ? res.status(404).json({ message: 'No thought was found with the associated id'})
            : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

deleteReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId}, { $pull: { reactions: { reactionId: req.params.reactionId}}}, { runValidators: true,new: true })
    .then((thought) => 
        !thought
            ? res.status(404).json({ message: 'No thought was found with the associated id'})
            : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId})
    .then((thought) => 
        !thought
            ? res.status(404).json({ message: 'No thought was found with the associated id'})
            : res.json({ message: 'Success'})
    )
    .catch((err) => res.status(500).json(err))
}


};
