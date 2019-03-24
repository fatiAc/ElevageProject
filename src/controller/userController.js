let express = require('express');
let router = express.Router();
let userSrv = require('../service/userService');

var login;
router.get('/verifyPassword/:password', function (req, res) {
    console.log(req.params.password);
    userSrv.findOneByCredinitals(login, req.params.password)
        .then(data => {
            if (data != null) {
                res.status(200).send(true);
            } else
                res.status(401).send(false);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.get('/verifyLogin/:login', function (req, res) {
    console.log(req.params.login);
    userSrv.findByLogin(req.params.login)
        .then(data => {
            if (data != null) {
                login = req.params.login;
                res.status(200).send(true);
            } else
                res.status(401).send(false);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});


module.exports = router;
