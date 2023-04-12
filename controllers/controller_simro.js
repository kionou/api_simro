const { request,response } = require("express");
const SimroRequette = require("../other/api");







const dataSimro = class{
    
    static Simro = async (req =request,res =response)=>{
        const marche = await SimroRequette.MarcheAll()
        const produit = await SimroRequette.ProduitAll()

        if (marche,produit.success) {
       
            res.status(201).send({marche:marche.success ,produit:produit.success})
        } else {
            res.status(400).json({"Une erreur est surveni":marche.erreur})
        }

    }



   
}

 


module.exports = dataSimro