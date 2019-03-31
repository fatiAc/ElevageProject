let express = require('express');
let router = express.Router();
let periodAlimentationSrv = require('../service/periodeAlimentationService');


router.get('/periodeName', function (req, res) {
    periodAlimentationSrv.getPeriodeName()
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
