let express = require('express');
let router = express.Router();
let machineSrv = require('../service/machineService');


router.get('/machineInfo', function (req, res) {
    machineSrv.gettAll()
        .then(data => {
            if (data != null) {
                res.status(200).send(data);
            } else
                res.status(200).send(null);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.get('/findByNourriture/:nourriture_ID', function (req, res) {
    machineSrv.findByNourriture(req.params.nourriture_ID)
        .then(data => {
            if (data != null) {
                res.status(200).send(data);
            } else
                res.status(200).send(null);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

module.exports = router;
