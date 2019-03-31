let express = require('express');
let router = express.Router();

router.use('/paddock', require('./paddockController'));
router.use('/user', require('./userController'));
router.use('/periodeAlimentation', require('./periodeAlimentationController'));
router.use('/nourriture', require('./nourritureController'));
router.use('/sessionAlimentation', require('./sessionAlimentationController'));

module.exports = router;
