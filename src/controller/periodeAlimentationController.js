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
                console.log(data);

            } else
                res.status(401).send(false);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});




// router.get('/alimentationParams', function (req, res) {
//     params = [
//         {
//             periodes: null,
//             rations: null,
//             quantites: null,
//             moy_qte_vache: null
//         }
//     ];
//     periodeRationSrv.findByDetailSession(3230)
//         .then(periodeRationData => {
//             if (periodeRationData != null) {
//                 console.log("lengh     of data    !!!!!!", periodeRationData.length);
//                 for (let item of periodeRationData) {
//                     console.log("i found the daataaaa  11111111  !!!!!         !!!!!!");
//                     periodeAlimentationSrv.findIdByID(item.periodeAlimentation_ID)
//                         .then(periodeID => {
//                             if (periodeID != null) {
//                                 console.log("Periodes ***********************************  ***** ");
//                                 params.periodes.push(periodeID.periode);
//                             }
//                         });
//                     nourritureSrv.findByID(item.nourriture_ID)
//                         .then(nourritureID => {
//                             if (nourritureID != null) {
//                                 console.log("rations ************** ******* ********** ***** ");
//                                 params.rations.push(nourritureID.nom);
//                             }
//                         });
//                     params.quantites.push(item.quantite);
//                 }
//                 res.status(200).send(data);
//             } else res.status(200).send(null)
//         })
//         .catch(err => {
//             res.status(401).json(err);
//         })
// });

router.get('/alimentationParams0', function (req, res) {

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
                                            console.log("out = ");
                                            console.log("first item  = ", myData[1].periode);
                                            console.log("second item  = ", myData[2].periode);
                                            console.log("second item ration = ", myData[1].ration);
                                        }
                                    })
                            }
                        })

                    console.log("lenght of my params === ", myData.length);
                }
                console.log("first item ============== = ", myData);

                res.status(200).json(myData);
            } else res.status(200).send(false)
        })
        .catch(err => {
            res.status(401).json(err);
        })
});
//


module.exports = router;
