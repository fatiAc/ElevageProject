let express = require('express');
let router = express.Router();
let sessionAlimentationSrv = require('../service/sessionAlimentationService');
let detailAlimentationSrv = require('../service/detailAlimentationService');
let paddockSrv = require('../service/paddockService');
let periodeRationSrv = require('../service/periodeRationService');
let periodeAlimentationSrv = require('../service/periodeAlimentationService');
let nourritureSrv = require('../service/nourritureService');

let sessionAlimentatinID;
let rationID;
let detailAlimentationID;
let periodeID;


router.post('/saveSessionAlimentation', function (req, res) {
    console.log("before create it ID SESSION == " + sessionAlimentatinID);
    sessionAlimentationSrv.create(req.body.date, req.body.login)
        .then(data => {
            if (data != null) {
                sessionAlimentatinID = data.id;
                console.log("After create it ID SESSION == " + sessionAlimentatinID);

                res.status(200).json(data);
            } else {
                res.status(401).send(false);
            }
        })
        .catch(err => {
            console.log("errooooora  !! ");
            res.status(401).send(err);
        });
});


router.get('/paddockID/:name', function (req, res) {
    console.log(req.params.name);
    paddockSrv.findPaddockID(req.params.name)
        .then(data => {
            if (data != null) {
                console.log("************** ID + " + data.id);
                res.status(200).send(data);
            } else
                res.status(401).send(false);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.post('/detailSessionAlimentation', function (req, res) {
    detailAlimentationSrv.create(req.body.note, req.body.nbrVache, req.body.comment, req.body.paddockID, sessionAlimentatinID)
        .then(data => {
            if (data != null) {
                detailAlimentationID = data.id;
                res.status(200).json(data);
            } else {
                res.status(401).send(false);
            }
        })
        .catch(err => {
            console.log("errooooora  !! ");
            res.status(401).send(err);
        });
});

router.get('/rationID/:ration', function (req, res) {
    nourritureSrv.findByName(req.params.ration)
        .then(data => {
            if (data != null) {
                res.status(200).json(data);
            } else
                res.status(401).send(false);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.get('/periodeID/:periode', function (req, res) {
    periodeAlimentationSrv.findByName(req.params.periode)
        .then(data => {
            if (data != null) {
                res.status(200).json(data);
            } else
                res.status(401).send(false);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.post('/periodeRation', function (req, res) {
    periodeRationSrv.create(req.body.quantite, detailAlimentationID, req.body.nbrVache, req.body.rationID, req.body.periodeID)
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


module.exports = router;
