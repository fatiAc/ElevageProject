let paddockParam = require('../models/T_Paddock_param');

class paddockParamService {

    static create(quantite, paddock_ID, livraison_ID) {
        return paddockParam.create({
            quantite: quantite,
            paddock_ID: paddock_ID,
            livraison_ID: livraison_ID
        });
    }
}

module.exports = paddockParamService;
