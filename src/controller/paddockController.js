let express = require('express');
let router = express.Router();
let paddockSrv = require('../service/paddockService');

router.get('/allPadock', function (req, res) {
    paddockSrv.gettAll()
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


module.exports = router;
