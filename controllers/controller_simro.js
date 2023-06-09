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
        const prix_moy = await SimroRequette.PrixMoy()
        const texte = await SimroRequette.Texte()
        



        if (marche,produit,region,gamme,prix_moy,texte.success) {
       
            res.status(201).send({
                marche:marche.success ,
                produit:produit.success,
                region:region.success,
                gamme:gamme.success,
                prix:prix.success,
                prix_moy:prix_moy.success,
                texte:texte.success,


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
             '/liste-dernier-prix-marche/',
             '/liste-prix-moyen-par-region/',
             '/liste-texte-accueil/'
          ];
          
          axios . all ( endpoints . map ( ( endpoint ) => axiosClient . get ( endpoint ))). then ( 
            axios . spread ( ({ data : marche }, { data : produit }, { data : region }, { data : gamme }, { data : prix }, { data : prix_moy } , { data : texte } ) => { 
                
                 console . log ( marche );
                 res.send({marche , produit , region, gamme ,prix ,prix_moy , texte })
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

    static SimroProduit = async (req =request,res =response)=>{
        axiosClient
        .get('/liste-produit/')
        .then(resultat=>{
            res.status(201).send(resultat.data )
        }).catch(err=>{
            console.log("eee",err);
            res.status(400).json({"Une erreur est surveni":err})

       })
    
    } 
     static SimroRegion = async (req =request,res =response)=>{
        axiosClient
        .get('/region/')
        .then(resultat=>{
            res.status(201).send(resultat.data )
        }).catch(err=>{
            console.log("eee",err);
            res.status(400).json({"Une erreur est surveni":err})

       })
    
    } 
     static SimroGamme = async (req =request,res =response)=>{
        axiosClient
        .get('/famille-produit/')
        .then(resultat=>{
            res.status(201).send(resultat.data )
        }).catch(err=>{
            console.log("eee",err);
            res.status(400).json({"Une erreur est surveni":err})

       })
    
    } 
     static SimroPrix = async (req =request,res =response)=>{
        axiosClient
        .get('/liste-dernier-prix-marche/')
        .then(resultat=>{
            res.status(201).send(resultat.data )
        }).catch(err=>{
            console.log("eee",err);
            res.status(400).json({"Une erreur est surveni":err})

       })
    
    }  
    static SimroPrix_Moy = async (req =request,res =response)=>{
        axiosClient
        .get('/liste-prix-moyen-par-region/')
        .then(resultat=>{
            res.status(201).send(resultat.data )
        }).catch(err=>{
            console.log("eee",err);
            res.status(400).json({"Une erreur est surveni":err})

       })
    
    }

   
}

 


module.exports = dataSimro