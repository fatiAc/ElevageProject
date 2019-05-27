let ingredientParam = require('../models/T_Ingredient_param');

class ingredientParamService {


    static create(livraisonQtte, pourcentage, ingredientID, livraisonID) {
        return ingredientParam.create({
            qte_theorique: livraisonQtte * pourcentage / 100,
            ingredient_ID: ingredientID,
            livraison_ID: livraisonID
        });
    }


}

module.exports = ingredientParamService;
