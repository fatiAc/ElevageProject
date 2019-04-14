let express = require('express');
let router = express.Router();
let nourritureSrv = require('../service/nourritureService');


router.get('/rationsInfo', function (req, res) {
    nourritureSrv.getRationsInfo()
        .then(data => {
            if (data != null) {
                res.status(200).send(data);
            } else
                res.status(401).send(false);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});


router.get('/rationOfSelectedPeriode/:periodeID/:date/:userLogin', function (req, res) {
    nourritureSrv.rationOfSelectedPeriode(req.params.periodeID, req.params.date, req.params.userLogin)
        .then(data => {
            if (data != null) {
                res.status(200).send(data);
                console.log(data);

            } else
                res.status(401).send(null);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

module.exports = router;
