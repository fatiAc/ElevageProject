let express = require('express');
let router = express.Router();
let nourritureSrv = require('../service/nourritureService');


router.get('/rationName', function (req, res) {
    nourritureSrv.getRationName()
        .then(data => {
            if(data != null){
                res.status(200).send(data);
            }else
                res.status(401).send(false);
        })
        .catch(err => {
            res.status(401).json(err);
        })
});

module.exports = router;
