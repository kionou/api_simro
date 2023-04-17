const { request,response } = require("express");
const SimroRequette = require("../other/api");
const axiosClient = require('../bin/data');
const  axios  = require("axios");






const dataSimro = class{
    
    static Simro = async (req =request,res =response)=>{
        const marche = await SimroRequette.MarcheAll()
        const produit = await SimroRequette.ProduitAll()
        const region = await SimroRequette.RegionAll()
        const gamme = await SimroRequette.GammeAll()
        const prix = await SimroRequette.PrixAll()


        if (marche,produit,region,gamme.success) {
       
            res.status(201).send({
                marche:marche.success ,
                produit:produit.success,
                region:region.success,
                gamme:gamme.success,
                prix:prix.success,

            })
        } else {
            res.status(400).json({"Une erreur est surveni":marche.erreur})
        }

        

    }

    static SimroAll = async (req =request,res =response)=>{
        

        let endpoints = [
            '/liste-marche/',
            '/liste-produit/',
            '/region/',
            '/famille-produit/'
          ];
          
          axios . all ( endpoints . map ( ( endpoint ) => axiosClient . get ( endpoint ))). then ( 
            axios . spread ( ({ data : user }, { data : repos }, { data : followers }, { data : following }) => { 
                
                console . log ({ user , repos , followers, following });
                res.send({ user , repos , followers, following })
            })
          );

        

    }

   
}

 


module.exports = dataSimro