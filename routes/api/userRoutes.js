// routes for looking at the req destination (url path)

/* 
We need to look for requests in: 

- /api/users
- /api/users/:userId
- /api/users/:userId/friends/:friendId
- /api/thoughts
- /api/thoughts/:thoughtId/reactions

*/

// bring in and import router, and functions from the controller exports
const router = require('express').Router();


const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;



