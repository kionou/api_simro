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
            '/famille-produit/',
            '/liste-dernier-prix-marche',
          ];
          
          axios . all ( endpoints . map ( ( endpoint ) => axiosClient . get ( endpoint ))). then ( 
            axios . spread ( ({ data : marche }, { data : produit }, { data : region }, { data : gamme } , { data : prix }) => { 
                
                // console . log ({ marche , produit , region, gamme  , prix});
                res.send({marche , produit , region, gamme  , prix})
            })
          );

        

    }

    static SimroMagasin = async (req =request,res =response)=>{
        axiosClient
        .get('/liste-magasin/')
        .then(resultat=>{
            res.status(201).send(resultat.data )
        }).catch(err=>{
            console.log("eee",err);
            res.status(400).json({"Une erreur est surveni":err})

       })
    
    }

   
}

 


module.exports = dataSimro