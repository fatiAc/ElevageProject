let recupSession = require('../models/T_Recup_sessionAlimnt');



class recup_sessionService {

    static create(nbrPreaparation,qtteTotale,sessionAliment_ID,machine_ID, periode_ID,nourriture_ID){
        return recupSession.create({
            nbrPreparation: nbrPreaparation,
            qteTotal: qtteTotale,
            sessionAlimnt_ID: sessionAliment_ID,
            machine_ID: machine_ID,
            periode_ID: periode_ID,
            nourriture_ID: nourriture_ID
        });
    }

}

module.exports = recup_sessionService;
