let mouvement = require('../models/T_Mouvement');
let animal = require('../models/T_Animal');

class mouvementService {


    static create(date, paddock_src, paddock_dest, animal_ID, user_login, mesure_ID) {
        return mouvement.create({
            dateMvnt: date,
            paddock_src: paddock_src,
            paddock_dest: paddock_dest,
            animal_ID: animal_ID,
            user_login: user_login,
            mesure_ID: mesure_ID
        });
    }

    // static createItems(date, paddock_src, paddock_Dest, user_login) {
    //      animal.findAll({
    //         where: {
    //             paddock_ID: paddock_src
    //         },
    //         attributes: ['snit', 'paddock_ID']
    //     })
    //         .then(animals => {
    //             for (let animal of animals) {
    //                 let data = this.create(date, paddock_src, paddock_Dest, animal.snit, user_login, null);
    //                 mouvementData.push(data);
    //             }
    //         })
    //     return mouvementData;
    // }
}

module.exports = mouvementService;
