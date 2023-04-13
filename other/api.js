// const  axios  = require("axios").create({
//     baseURL: 'http://simro-kberthe.pythonanywhere.com/api/',
//   });


const axiosClient = require('../bin/data')

const SimroRequette = class{

    static MarcheAll=  ()=>{
        return new Promise(async (next)=>{
            axiosClient
            .get('/liste-marche/')
            .then(resultat=>{
                // console.log('ss',resultat);
                next({success:resultat.data})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static ProduitAll=  ()=>{
        return new Promise(async (next)=>{
            axiosClient
            .get('/liste-produit/')
            .then(resultat=>{
                // console.log('ss',resultat);
                next({success:resultat.data})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static RegionAll=  ()=>{
        return new Promise(async (next)=>{
            axiosClient
            .get('/region/')
            .then(resultat=>{
                // console.log('ss',resultat);
                next({success:resultat.data})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static GammeAll=  ()=>{
        return new Promise(async (next)=>{
            axiosClient
            .get('/famille-produit/')
            .then(resultat=>{
                // console.log('ss',resultat);
                next({success:resultat.data})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static PrixAll=  ()=>{
        return new Promise(async (next)=>{
            axiosClient
            .get('/liste-tout-prix-marche/')
            .then(resultat=>{
                // console.log('ss',resultat);
                next({success:resultat.data})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }


   
   
   
}

 


module.exports =  SimroRequette ;
