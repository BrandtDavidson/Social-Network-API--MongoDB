// need to default the index to the api routes 
const router = require('express').Router();
const apiRoutes = require('./api');
// router middleware
router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('You have hit the wrong route!');
});

module.exports = router;