var express = require('express');
var router = express.Router();
router.get('/maps', function(req, res, next) {
    res.render('index')
})
/* GET home page. */
router.get('/', function(req, res, next) {


    let produits =[
        {
          "code_produit": "RLE",
          "nom_produit": "Riz Local Etuvé",
          "filiere": null,
          "image": null,
          "famille_produit": "Céréale",
          "affichage_ecran": 1
        },
        {
          "code_produit": "RIP",
          "nom_produit": "Riz Paddy",
          "filiere": null,
          "image": null,
          "famille_produit": "Céréale",
          "affichage_ecran": 1
        },
        {
          "code_produit": "OLO",
          "nom_produit": "Oignon Local",
          "filiere": null,
          "image": null,
          "famille_produit": "Bulbe",
          "affichage_ecran": 1
        },
        {
          "code_produit": "ECH",
          "nom_produit": "Echalote (oignon local)",
          "filiere": "Oignon",
          "image": null,
          "famille_produit": "Bulbe",
          "affichage_ecran": 1
        },
        {
          "code_produit": "SRI",
          "nom_produit": "Semences de Riz",
          "filiere": null,
          "image": null,
          "famille_produit": "Semences",
          "affichage_ecran": 1
        }
      ]
    
    let prix =[
        {
            "region": "EXTREME-NORD",
            "code_produit": "SRI",
            "produit": "Semences de Riz",
            "prix_moy": 100.0,
            "nb_marche": 1,
            "dernier_date": "2023-04-24"
        },
        {
            "region": "EXTREME-NORD",
            "code_produit": "OLO",
            "produit": "Oignon Local",
            "prix_moy": 17.0,
            "nb_marche": 2,
            "dernier_date": "2023-04-24"
        },
        {
            "region": "EXTREME-NORD",
            "code_produit": "RIP",
            "produit": "Riz Paddy",
            "prix_moy": 120.0,
            "nb_marche": 1,
            "dernier_date": "2023-02-24"
        },
        {
            "region": "EXTREME-NORD",
            "code_produit": "RLE",
            "produit": "Riz Local Etuvé",
            "prix_moy": 20.0,
            "nb_marche": 1,
            "dernier_date": "2023-02-24"
        },
        {
            "region": "NORD",
            "code_produit": "OLO",
            "produit": 'Oignon Local',
            "prix_moy": 33.0,
            "nb_marche": 1,
            "dernier_date": "2023-04-26"
        },
        {
            "region": "NORD",
            "code_produit": "RIP",
            "produit": "Riz Paddy",
            "prix_moy": 200.0,
            "nb_marche": 1,
            "dernier_date": "2023-04-26"
        },
        {
            "region": "NORD",
            "code_produit": "OLO",
            "produit": "Oignon Local",
            "prix_moy": 200.0,
            "nb_marche": 1,
            "dernier_date": "2023-04-24"
        },
        {
            "region": "NORD",
            "code_produit": "RLE",
            "produit": "Riz Local Etuvé",
            "prix_moy": 500.0,
            "nb_marche": 1,
            "dernier_date": "2023-04-18"
        },
        {
            "region": "NORD-OUEST",
            "code_produit": "RLE",
            "produit": "Riz Local Etuvé",
            "prix_moy": 186.66667,
            "nb_marche": 1,
            "dernier_date": "2023-03-25"
        },
        {
            "region": "NORD-OUEST",
            "code_produit": "ECH",
            "produit": "Echalote (oignon local)",
            "prix_moy": 240.0,
            "nb_marche": 1,
            "dernier_date": "2023-02-24"
        },
        {
            "region": "NORD-OUEST",
            "code_produit": "OLO",
            "produit": "Oignon Local",
            "prix_moy": 300.0,
            "nb_marche": 1,
            "dernier_date": "2023-03-12"
        },
        {
            "region": "NORD-OUEST",
            "code_produit": "SRI",
            "produit": "Semences de Riz",
            "prix_moy": 2500.0,
            "nb_marche": 1,
            "dernier_date": "2023-02-24"
        }
    
    
    
    ]
    
    var produitsAvecPrix = [];

    for (var i = 0; i < produits.length; i++) {
        for (var j = 0; j < prix.length; j++) {
            if (produits[i].nom_produit === prix[j].produit) {
                produitsAvecPrix.push([ prix[j]]);
                      
                  }
        }
      
    }
    
    const groupedData = produitsAvecPrix.reduce((acc, curr) => {
        const productName = curr[0].produit;
        if (!acc[productName]) {
          acc[productName] = [];
        }
        acc[productName].push(curr[0]);
        return acc;
      }, {});
      
      const groupedArray = Object.keys(groupedData).map((key) => {
        return groupedData[key];
      });

res.send( { "data":groupedArray });


});

router.get('/ddd', function(req, res, next) {
  let prix = [
    {
        "id_fiche": 6,
        "enquete": 1919102017130281,
        "date_enquete": "2023-01-21",
        "marche": "MORA",
        "nom_region":"EXTREME-NORD",
        "contact_enqueteur": "695495040",
        "num_fiche": "1",
        "produit": "Ail",
        "famille_produit": "Bulbe",
        "categorie_produit": null,
        "unite": "Balance",
        "poids_unitaire": 4.0,
        "prix_kg": 125.0,
        "montant_achat": 500.0,
        "montant_transport": 3000.0,
        "distance_origine_marche": 88.0,
        "etat_route": "Autre",
        "niveau_approvisionement": 1,
        "statut": 0
    },
    {
        "id_fiche": 60,
        "enquete": 1919102017130391,
        "date_enquete": "2023-01-21",
        "marche": "MORA",
        "nom_region":"EXTREME-NORD",
        "contact_enqueteur": "695495040",
        "num_fiche": "1",
        "produit": "Oignon Local",
        "famille_produit": "Bulbe",
        "categorie_produit": null,
        "unite": "Balance",
        "poids_unitaire": 4.0,
        "prix_kg": 100.0,
        "montant_achat": 500.0,
        "montant_transport": 3000.0,
        "distance_origine_marche": 88.0,
        "etat_route": "Autre",
        "niveau_approvisionement": 1,
        "statut": 0
    },
    {
        "id_fiche": 18,
        "enquete": 1919102017130281,
        "date_enquete": "2023-01-21",
        "marche": "MORA",
        "nom_region":"EXTREME-NORD",
        "contact_enqueteur": "695495040",
        "num_fiche": "1",
        "produit": "Riz Local Etuvé",
        "famille_produit": "Céréale",
        "categorie_produit": null,
        "unite": "Balance",
        "poids_unitaire": 15.0,
        "prix_kg": 46.666668,
        "montant_achat": 700.0,
        "montant_transport": 4000.0,
        "distance_origine_marche": 40.0,
        "etat_route": "Autre",
        "niveau_approvisionement": 1,
        "statut": 0
    },
    {
        "id_fiche": 31,
        "enquete": 1919102017130292,
        "date_enquete": "2023-04-06",
        "marche": "GOULFEY",
        "nom_region":"EXTREME-NORD",
        "contact_enqueteur": "691070867",
        "num_fiche": "1",
        "produit": "Oignon Local",
        "famille_produit": "Bulbe",
        "categorie_produit": null,
        "unite": "Balance",
        "poids_unitaire": 5.0,
        "prix_kg": 14.0,
        "montant_achat": 70.0,
        "montant_transport": 2000.0,
        "distance_origine_marche": 50.0,
        "etat_route": "Autre",
        "niveau_approvisionement": 1,
        "statut": 0
    }
  ]
  let filteredMarchePrix = [];
for (let i= 0; i<prix.length; i++) {

 if (prix[i].famille_produit === "Bulbe" && prix[i].nom_region === 'EXTREME-NORD') {

     filteredMarchePrix = [...filteredMarchePrix, prix[i]];
}
}
filteredMarchePrix.map((item, index) => {
    let matchingItems = filteredMarchePrix.filter(el => el.marche === item.marche);

    matchingItems.map(matchingItem => {

        let key = filteredMarchePrix.indexOf(matchingItem)
    console.log(key);

        if (key !== index) {
            filteredMarchePrix.splice(key, 1);
        }
    });
});
res.send( { "data":filteredMarchePrix ,  });

});

module.exports = router;
