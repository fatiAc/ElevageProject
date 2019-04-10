let nourriture = require('../models/T_Nourriture');
let dbConnect = require('../../config/dbConnection');
let sequelize = require('sequelize');

class nourritureService {

    static getRationName() {
        return nourriture.findAll({
            attributes: ['nom']
        });
    }

    static findByIdName(rationName) {
        return nourriture.findOne({
            where: {nom: rationName},
            attributes: ['id']
        });
    };

    static findByID(id) {
        return nourriture.findOne({
            where: {id: id},
            attributes: ['nom']
        });
    }

    static rationOfSelectedPeriode(periodeID, date, connectedUser) {
        let query = `SELECT distinct (nourriture_ID) as id, nom AS rationName
                        FROM T_Periode_Ration priodeRation
                        INNER JOIN T_Nourriture nourriture ON priodeRation.nourriture_ID = nourriture.id
                        WHERE periodeAlimentation_ID = ${periodeID}
                        AND nourriture.id NOT IN (SELECT T_Recup_sessionAlimnt.nourriture_ID from T_Recup_sessionAlimnt
                                                  where sessionAlimnt_ID IN (SELECT id FROM T_Session_alimentation
                                                                  WHERE date = '${date}' AND user_login = '${connectedUser}'))
                        AND detailAlimentation_ID IN (SELECT id FROM T_Detail_session_alimnt
                              WHERE session_alimentation_ID IN (SELECT id FROM T_Session_alimentation
                                       WHERE date = '${date}' AND user_login = '${connectedUser}'))`
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})

    }

};

module.exports = nourritureService;
