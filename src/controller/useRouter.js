let express = require('express');
let router = express.Router();

router.use('/paddock', require('./paddockController'));

module.exports = router;
