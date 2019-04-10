let express = require('express');
let router = express.Router();
let paddockSrv = require('../service/paddockService');

router.get('/allPadock', function (req, res) {
    paddockSrv.gettAll()
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


router.get('/paddockName/:paddockID', function (req, res) {
    paddockSrv.findByID(req.params.paddockID)
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
