let paddockParam = require('../models/T_Paddock_param');

class paddockParamService {

    static create(quantite, paddock_ID, nbrElement, commentaire, moyOfElement, livraison_ID) {
        return paddockParam.create({
            quantite: quantite,
            moyOfElement: moyOfElement,
            commentaire: commentaire,
            paddock_ID: paddock_ID,
            nbrElement: nbrElement,
            livraison_ID: livraison_ID
        });
    }
}

module.exports = paddockParamService;
