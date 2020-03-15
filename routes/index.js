var router = require('express').Router();

// all the endpoints under api.
router.use('/api', require('./api'));

// serve the frontend which is generated under public folder to when user lands on the page.
router.get('/', function (req, res) {
    res.sendFile("index.html");
});


module.exports = router;
