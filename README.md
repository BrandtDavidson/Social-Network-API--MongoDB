# Social Network API - MongoDB

## Description

Using the highly versatile MongoDB for the backend database, this application was designed to function as a fast and reliable social network API. 

Application owners can access the application's functionality by executing command line prompts (Node.js) to initiate the server. The server is then started and the Mongoose models (Users, thoughts, and reactions) are synced to the MongoDB database. 

Using an API platform or API Client such as Postman or Insomnia an owner can initiate various GET, POST, PUT, and DELETE methods on the available API Routes. The data returned will be in a formatted JSON. 

Optimization has been employed to ensure routes are functioning properly across methods. 

## Technologies, Packages, and API Routes

- Packages (npm) with Node.js include: Nodemon, Express.js, and Mongoose.
- MongoDB database

## Routes

Users: 

`/api/users` : GET, POST

`/api/users/:userId` : GET, PUT, DELETE

`/api/users/:userId/friends/:friendId` : POST, DELETE

Thoughts and Reactions:

`/api/thoughts` : GET, POST

`/api/thoughts/:thoughId` : GET, PUT, DELETE

`/api/thoughts/:thoughId/reactions` : POST

`/api/thoughts/:thoughId/reactions/:reactionId` : DELETE

## Demo of Routes

>[Video Walkthrough Link](https://drive.google.com/file/d/1mJk5kbd86WtIC6YZ-J-ZIecmhxpB3Xue/view)

## Screenshots 

![Insomnia1](./assets/Screen%20Shot%202022-08-17%20at%203.51.02%20PM.png)
![Insomnia2](./assets/Screen%20Shot%202022-08-17%20at%203.51.15%20PM.png)
![Insomnia3](./assets/Screen%20Shot%202022-08-17%20at%203.51.32%20PM.png)
![MongoDB](./assets/Screen%20Shot%202022-08-17%20at%203.52.14%20PM.png)


## Contact and Contributions 

[GitHub Profile](https://github.com/BrandtDavidson)

Instructional reference provided by Trilogy Education Services, 2U and University of Arizona.