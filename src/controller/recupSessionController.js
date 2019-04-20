let express = require('express');
let router = express.Router();
let recupSessionSrv = require('../service/recup_sessionService');
let sessionAlimentationSrv = require('../service/sessionAlimentationService');
let livraisonSrv = require('../service/livraisonService');
let paddockParamSrv = require('../service/paddockParamService');
let formuleSrv = require('../service/formuleService');
let ingredientParamSrv = require('../service/ingredientParamService');

let sessionAliment_ID;
let recupSession_ID;

router.get('/sessionByDateAndLogin/:date/:userLogin', function (req, res) {
    sessionAlimentationSrv.findBydateAndUser(req.params.date, req.params.userLogin)
        .then(sessionAlimentation => {
            if (sessionAlimentation != null) {
                sessionAliment_ID = sessionAlimentation.id;
                res.status(200).send(sessionAlimentation);
            } else
                res.status(200).send(null);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});


router.post('/saveRecupSession', function (req, res) {
    recupSessionSrv.create(req.body.nbrPartie, req.body.qtteTotal, sessionAliment_ID,
        req.body.machineID, req.body.periodeID, req.body.nourritureID)
        .then(recupSessionData => {
            if (recupSessionData != null) {
                recupSession_ID = recupSessionData.id;
                res.status(200).send(recupSessionData);

            } else
                res.status(200).send(null);
        })
        .catch(err => {
                res.status(401).json(err);
            }
        )
});

router.post('/saveLivraison', function (req, res) {
    livraisonSrv.create(req.body.numero, req.body.quantite, recupSession_ID)
        .then(livraisonData => {
            if (livraisonData != null) {
                for (let detail of req.body.details) {
                    paddockParamSrv.create(detail.qtte, detail.paddockID, livraisonData.id)
                        .then(paddockParamData => {
                            if (paddockParamData != null) {
                                res.status(200).send(paddockParamData);
                            } else
                                res.status(200).send(null);
                        })
                        .catch(err => {
                                res.status(401).json(err);
                            }
                        )
                }
                formuleSrv.findByRation(req.body.nourriture_ID)
                    .then(formuleData => {
                        if (formuleData != null) {
                            for (let formule of formuleData) {
                                ingredientParamSrv.create(livraisonData.quantite, formule.pourcentage, formule.ingredient_ID, livraisonData.id)
                                    .then(ingredinetParamData => {
                                        if (ingredinetParamData != null) {
                                            console.log("save ingredient param succes -*-*-  ");
                                        }
                                    }).catch(err => {
                                    res.status(401).json(err);

                                })
                            }
                        }
                    })

            }
        })
        .catch(err => {
                res.status(401).json(err);
            }
        )
});


module.exports = router;
