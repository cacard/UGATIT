let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile("index.html"); 
});

module.exports = router;