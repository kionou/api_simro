const { request,response } = require("express");
const SimroRequette = require("../other/api");







const dataSimro = class{
    
    static Simro = async (req =request,res =response)=>{
        // const marche = await SimroRequette.MarcheAll()
        // const produit = await SimroRequette.ProduitAll()
        // const region = await SimroRequette.RegionAll()
        const gamme = await SimroRequette.GammeAll()
        // const prix = await SimroRequette.PrixAll()


        if (gamme.success) {
       
            res.status(201).send({
                // marche:marche.success ,
                // produit:produit.success,
                // region:region.success,
                gamme:gamme.success,
                // prix:prix.success,

            })
        } else {
            res.status(400).json({"Une erreur est surveni":gamme.erreur})
        }

    }



   
}

 


module.exports = dataSimro