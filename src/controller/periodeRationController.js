let express = require('express');
let router = express.Router();
let periodeRationSrv = require('../service/periodeRationService');


router.get('/periodeRationParams/:detailSessionID', function (req, res) {
    periodeRationSrv.findByDetailSession(req.params.detailSessionID)
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


router.get('/qtteTotale/:periodeID/:rationID/:date/:userLogin', function (req, res) {
    periodeRationSrv.calculeQuantiteTotal(req.params.periodeID, req.params.rationID, req.params.date, req.params.userLogin)
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



router.get('/paddocksWithQtte/:periodeID/:rationID/:date/:userLogin', function (req, res) {
    periodeRationSrv.paddocksWithQtte(req.params.periodeID, req.params.rationID, req.params.date, req.params.userLogin)
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
