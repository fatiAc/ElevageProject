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
let connectedUser;

router.get('/getConnectedUser/:login', function (req, res) {
    connectedUser = req.params.login;
    console.log("connected user =====  ", connectedUser);
});

router.get('/getPaddockBySession/:date/:' + connectedUser, function (req, res) {
    console.log("55555555555555555555")
    paddockSrv.getPaddocksBySession(req.params.date, connectedUser)
        .then(data => {
            if (data != null) {
                res.status(200).send(data);
            } else {
                res.status(401).send(null);
            }
        })
        .catch(err => {
            res.status(401).send(err);
        });
});

router.post('/saveSessionAlimentation', function (req, res) {
    date = req.body.date;
    sessionAlimentationSrv.findBydateAndUser(date, connectedUser)
        .then(data => {
            if (data != null) {
                sessionAlimentatinID = data.id;
                res.status(200).json(data);
            } else {
                sessionAlimentationSrv.create(date, connectedUser)
                    .then(data => {
                        if (data != null) {
                            sessionAlimentatinID = data.id;
                            res.status(200).json(data);
                        }
                    })
            }
        })
        .catch(err => {
            res.status(401).send(err);
        });
});

router.get('/paddockID/:name', function (req, res) {
    paddockSrv.findPaddockID(req.params.name)
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

router.post('/detailSessionAlimentation', function (req, res) {
    detailAlimentationSrv.create(req.body.note, req.body.nbrVache, req.body.comment, req.body.paddockID, sessionAlimentatinID)
        .then(data => {
            if (data != null) {
                detailAlimentationID = data.id;
                res.status(200).json(data);
            } else {
                res.status(200).send(false);
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
    let rations = req.body.rations;
    let qttes = req.body.quantites
    let periodes = req.body.periodes;
    let indx = 0;
    for (let item of periodes) {
        let qtte = qttes[periodes.indexOf(item)];
        let ration = rations[periodes.indexOf(item)];
        if (qttes != null && ration != null) {
            periodeRationSrv.create(qtte, detailAlimentationID, req.body.nbrVache, ration, item.id)
                .then(data => {
                    if (data != null) {
                        indx++;
                        if (indx == periodes.length) {
                            res.status(200).send(true);
                        }
                    } else {
                        console.log("saving periode ration is failed !!!!!! ")
                        res.status(200).send(null);
                    }
                })
                .catch(err => {
                    res.status(401).json(err);
                })
        }
    }
    res.status(200).send(true);


});

router.get('/detailOfSession', function (req, res) {
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
