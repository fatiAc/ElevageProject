let express = require('express');
let router = express.Router();

router.use('/machine', require('./machineController'));
router.use('/nourriture', require('./nourritureController'));
router.use('/paddock', require('./paddockController'));
router.use('/periodeAlimentation', require('./periodeAlimentationController'));
router.use('/periodeRation', require('./periodeRationController'));
router.use('/recup_session', require('./recupSessionController'));
router.use('/sessionAlimentation', require('./sessionAlimentationController'));
router.use('/user', require('./userController'));

module.exports = router;
