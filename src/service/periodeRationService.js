let periodeRation = require('../models/T_Periode_Ration');
let nourritureService = require('./nourritureService');
let periodeAlimentationService = require('./periodeAlimentationService');

class periodeRationService {


    static create( qtte,detailAlimentation, nbrVache, nourritureID, periodeID) {
        return periodeRation.create({
            quantite: qtte,
            moy_qte_vache: qtte / nbrVache,
            detailAlimentation_ID: detailAlimentation,
            nourriture_ID: nourritureID,
            periodeAlimentation_ID: periodeID
        });
    }


}

module.exports = periodeRationService;
