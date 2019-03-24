let express = require('express');
let router = express.Router();

router.use('/paddock', require('./paddockController'));
router.use('/user', require('./userController'));

module.exports = router;
