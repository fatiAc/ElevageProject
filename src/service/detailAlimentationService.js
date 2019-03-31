let detailAlimentation = require('../models/T_Detail_session_alimnt.js');

class detailAlimentationService {

    static create(note, nbrVache, comment, paddockID, sessionAlimentatinID){
        return detailAlimentation.create({
            note: note,
            nbrVache: nbrVache,
            commentaire: comment,
            paddock_ID: paddockID,
            session_alimentation_ID: sessionAlimentatinID
        });
    }
}

module.exports = detailAlimentationService;
