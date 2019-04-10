let livraison = require('../models/T_Livraison');

class livraisonService {

    static create(numero, quantite, recup_sessionAlimnt_ID) {
        return livraison.create({
            numero: numero,
            quantite: quantite,
            recup_sessionAlimnt_ID: recup_sessionAlimnt_ID

        });
    }
}

module.exports = livraisonService;
