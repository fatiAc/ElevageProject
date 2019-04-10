let periodeRation = require('../models/T_Periode_Ration');
let dbConnect = require('../../config/dbConnection');
let sequelize = require('sequelize');


class periodeRationService {


    static create(qtte, detailAlimentation, nbrVache, nourritureID, periodeID) {
        return periodeRation.create({
            quantite: qtte,
            moy_qte_vache: qtte / nbrVache,
            detailAlimentation_ID: detailAlimentation,
            nourriture_ID: nourritureID,
            periodeAlimentation_ID: periodeID
        });
    }

    static findByDetailSession(detailSessionID) {
        let query = `
        select periode, nom as rationName, quantite from T_Periode_Ration pr
            inner join T_Periode_alimentation pa on pr.periodeAlimentation_ID = pa.id
            inner join T_Nourriture nr on pr.nourriture_ID = nr.id
            where pr.detailAlimentation_ID =${detailSessionID}
        `
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})
    }

    static calculeQuantiteTotal(periodeID, rationID, date, connectedUser) {
        let query = `
       SELECT sum(quantite) as qtteTotale FROM T_Periode_Ration priodeRation
              INNER JOIN T_Nourriture TN ON priodeRation.nourriture_ID = TN.id
              WHERE periodeAlimentation_ID = ${periodeID}
                    and nourriture_ID = ${rationID}
                    AND detailAlimentation_ID IN (SELECT id FROM T_Detail_session_alimnt
                                WHERE session_alimentation_ID IN (SELECT id FROM T_Session_alimentation
                                       WHERE date = '${date}' AND user_login = '${connectedUser}'))
        `
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})
    }

    static paddocksWithQtte(periodeID, rationID, date, connectedUser) {
        let query = `SELECT paddock_ID, nom AS paddockName,TPR.id as periodeRationID, TPR.quantite
                       FROM T_Detail_session_alimnt ds
                       INNER JOIN T_Paddock p ON p.id = ds.paddock_ID
                       INNER JOIN T_Periode_Ration TPR ON ds.id = TPR.detailAlimentation_ID
                            WHERE ds.id IN (SELECT detailAlimentation_ID FROM T_Periode_Ration
                                   WHERE periodeAlimentation_ID = ${periodeID}
                                   AND nourriture_ID = ${rationID}
                                   AND detailAlimentation_ID IN (SELECT id FROM T_Detail_session_alimnt
                                                WHERE session_alimentation_ID IN (SELECT id
                                                                                  FROM T_Session_alimentation
                                                                                  WHERE date = '${date}'
                                                                                  AND user_login = '${connectedUser}')))
                       AND TPR.periodeAlimentation_ID = ${periodeID} AND TPR.nourriture_ID = ${rationID}
                       ORDER BY p.typePaddock, p.nom
        `;
        return dbConnect.query(query, {type: sequelize.QueryTypes.SELECT})
    }


}

module.exports = periodeRationService;
