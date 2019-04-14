let express = require('express');
let router = express.Router();
let animalSrv = require('../service/animalService');
let mesureSrv = require('../service/mesureService');


router.get('/findBySnit/:snit', function (req, res) {
    animalSrv.findByID(req.params.snit)
        .then(data => {
            if (data != null) {
                res.status(200).send(data);
            } else
                res.status(200).send(false);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});


router.post('/createMesure', function (req, res) {
    mesureSrv.create(req.body.poids, req.body.dateMeure, req.body.user_login, req.body.snit)
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
