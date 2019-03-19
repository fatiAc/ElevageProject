let express = require('express');
let router = express.Router();
let paddockSrv = require('../service/paddockService');

router.get('/allPadock', function (req, res) {
    paddockSrv.gettAll()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(401).json(err);
        })

})

module.exports = router;
