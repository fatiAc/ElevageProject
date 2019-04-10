let express = require('express');
let router = express.Router();
let sessionAlimentationSrv = require('../service/sessionAlimentationService');
let detailAlimentationSrv = require('../service/detailAlimentationService');
let paddockSrv = require('../service/paddockService');
let periodeRationSrv = require('../service/periodeRationService');
let periodeAlimentationSrv = require('../service/periodeAlimentationService');
let nourritureSrv = require('../service/nourritureService');

let sessionAlimentatinID;
let detailAlimentationID;


router.post('/saveSessionAlimentation', function (req, res) {
    sessionAlimentationSrv.create(req.body.date, req.body.login)
        .then(data => {
            if (data != null) {
                sessionAlimentatinID = data.id;
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
    nourritureSrv.findByIdName(req.params.ration)
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
    periodeAlimentationSrv.findIdByName(req.params.periode)
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

    var periodeID = null;
    var rationID = null;
    for (let periode of req.body.periodes) {
        if (req.body.rations[req.body.periodes.indexOf(periode)] != null && periode != null) {
            periodeAlimentationSrv.findIdByName(periode)
                .then(periodeData => {
                    if (periodeData != null) {
                        nourritureSrv.findByIdName(req.body.rations[req.body.periodes.indexOf(periode)])
                            .then(rationData => {
                                if (rationData != null) {
                                    periodeID = periodeData.id;
                                    rationID = rationData.id;
                                    console.log("periode id == " + periodeID + "  ration ID == " + rationID);
                                    periodeRationSrv.create(req.body.quantites[req.body.periodes.indexOf(periode)], detailAlimentationID, req.body.nbrVache, rationID, periodeID)
                                        .then(data => {
                                            if (data != null) {
                                                console.log("success !!!!!! ")
                                            } else {
                                                console.log("saving data is failed !!!!!! ")
                                                res.status(401).send(false);
                                            }
                                        })
                                        .catch(err => {
                                            res.status(401).json(err);
                                        })
                                }
                            })
                            .catch(err => {
                                res.status(401).json(err);
                            })
                    }
                })
                .catch(err => {
                    res.status(401).json(err);
                })
        }
    }


});

router.get('/detailOfSession', function (req, res) {
    console.log("voila session id == " + detailAlimentationID);
    detailAlimentationSrv.findByID(detailAlimentationID)
        .then(data => {
            if (data != null) {
                res.status(200).send(data)
            } else res.status(200).send(false)
        })
        .catch(err => {
            res.status(401).json(err);
        })

});



module.exports = router;
