let express = require('express');
let router = express.Router();
let paddockSrv = require('../service/paddockService');
let mouvementSrv = require('../service/mouvementService');
let mesureSrv = require('../service/mesureService');
let animalSrv = require('../service/animalService');

var connectedUser;

router.get('/getConnectedUser/:login', function (req, res) {
    connectedUser = req.params.login;
})

router.get('/paddockByAnimal/:snit', function (req, res) {
    paddockSrv.findByAnimal(req.params.snit)
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


router.get('/desPaddocks/:snit', function (req, res) {
    paddockSrv.getDesPaddocks(req.params.snit)
        .then(data => {
            if (data != null) {
                res.status(200).send(data);
            } else
                res.status(401).send(null);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});


router.post('/createMouvmntMesure', function (req, res) {
    if (req.body.poids != null) {
        mesureSrv.create(req.body.poids, req.body.date, connectedUser, req.body.animal_ID)
            .then(mesureData => {
                if (mesureData != null) {
                    mouvementSrv.create(req.body.date, req.body.paddock_src, req.body.paddock_dest, req.body.animal_ID, connectedUser, mesureData.id)
                        .then(mouvementData => {
                            res.status(200).send(mouvementData);
                        })
                } else
                    res.status(401).send(false);
            })
            .catch(err => {
                res.status(401).json(err);
            })
    } else {
        mouvementSrv.create(req.body.date, req.body.paddock_src, req.body.paddock_dest, req.body.animal_ID, connectedUser, null)
            .then(mouvementData => {
                res.status(200).send(mouvementData);
            })
    }
});

router.put('/updateAnimalPaddock/:snit/:paddock_ID', function (req, res) {
    animalSrv.updatePadockOfAnimal(req.params.snit, req.params.paddock_ID)
        .then(data => {
            if (data != null) {
                res.status(200).send(data)
            }
        }).catch(err => {
        res.status(401).send(err);
    })
});


router.get('/countAnimalOfPaddock/:paddock_ID', function (req, res) {
    animalSrv.countAnimalOfPaddock(req.params.paddock_ID)
        .then(data => {
            if (data != null) {
                res.status(200).send(data);
            } else
                res.status(401).send(null);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});


router.get('/getPaddocksDest/:paddock_ID', function (req, res) {
    paddockSrv.getPaddocksDest(req.params.paddock_ID)
        .then(data => {
            if (data != null) {
                res.status(200).send(data);
            } else
                res.status(401).send(null);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

router.post('/createItems', function (req, res) {
    animalSrv.findAllByPaddock(req.body.paddock_src)
        .then(animalsData => {
            for (let animal of animalsData) {
                mouvementSrv.create(req.body.date, req.body.paddock_src, req.body.paddock_dest, animal.snit, connectedUser, null)
                    .then(mouvementData => {
                    })
            }
            if (animalsData != null) {
                res.status(200).send(animalsData);
            } else res.status(200).send(false);
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.put('/updatePaddockOfAnimals/:paddock_src/:paddock_dest', function (req, res) {
    animalSrv.updatePadockOfAnimals(req.params.paddock_src, req.params.paddock_dest)
        .then(data => {
            if (data != null) {
                res.status(200).send(data)
            } else res.status(200).send(false)

        }).catch(err => {
        res.status(401).send(err);
    })
});


module.exports = router;
