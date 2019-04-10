let express = require('express');
let router = express.Router();
let nourritureSrv = require('../service/nourritureService');
let periodeAlimentationSrv = require('../service/periodeAlimentationService');
let periodeRationSrv = require('../service/periodeRationService');

router.get('/periodeName', function (req, res) {
    periodeAlimentationSrv.getPeriodeName()
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

router.get('/alimentationParams', function (req, res) {
    myData = [
        {
            periode: null,
            ration: null,
            quantite: null,
            moy_qte_vache: null
        }
    ];
    periodeRationSrv.findByDetailSession(3230)
        .then(periodeRationData => {
            if (periodeRationData != null) {
                console.log("lengh         !!!!!!", periodeRationData.length);

                for (let item of periodeRationData) {
                    console.log("periode ration ID !!!!!         !!!!!!  ", item.id);
                    periodeAlimentationSrv.findIdByID(item.periodeAlimentation_ID)
                        .then(periodeData => {
                            if (periodeData != null) {
                                nourritureSrv.findByID(item.nourriture_ID)
                                    .then(rationData => {
                                        if (rationData != null) {
                                            console.log("ration name !!!!!  ", periodeData.periode);
                                            console.log("periode name !!!!!  ", rationData.nom);

                                            myData.push({
                                                periode: periodeData.periode,
                                                ration: rationData.nom,
                                                quantite: item.quantite,
                                                moy_qte_vache: item.moy_qte_vache
                                            })
                                        }
                                    })
                            }
                        })
                }
                res.status(200).json(myData);
            } else res.status(200).send(false)
        })
        .catch(err => {
            res.status(401).json(err);
        })
});


module.exports = router;
