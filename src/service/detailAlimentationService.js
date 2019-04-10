let detailAlimentation = require('../models/T_Detail_session_alimnt.js');

class detailAlimentationService {

    static create(note, nbrVache, comment, paddockID, sessionAlimentatinID) {
        return detailAlimentation.create({
            note: note,
            nbrVache: nbrVache,
            commentaire: comment,
            paddock_ID: paddockID,
            session_alimentation_ID: sessionAlimentatinID
        });
    }

    static findBySessionAlimnt(sessionAlimentID) {
        return detailAlimentation.findAll({
            where: {session_alimentation_ID: sessionAlimentID}
        })
    };


    static findByID(id) {
        return detailAlimentation.findOne({
            where: {id: id},
            attributes: ['id', 'note', 'nbrVache', 'paddock_ID']
        })
    }
}

module.exports = detailAlimentationService;
