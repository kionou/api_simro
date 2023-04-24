var express = require('express');
var router = express.Router();
router.get('/maps', function(req, res, next) {
    res.render('index')
})
/* GET home page. */
router.get('/', function(req, res, next) {


let prix =
 [
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
    "id_fiche": 9,
    "enquete": 1919102217130281,
    "date_enquete": "2023-01-21",
    "marche": "MORA",
    "nom_region":"EXTREME-NORD",
    "contact_enqueteur": "695495040",
    "num_fiche": "1",
    "produit": "Oignon Importé",
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

let prixParMarche = filteredMarchePrix.reduce((resultat, element) => {
    if (!resultat[element.marche]) {
        console.log(resultat[element.marche]);
        resultat[element.marche] = {};
    }
    console.log(...[element.produit]);

    // element.forEach(prixProduit => {
    //     resultat[element.marche][prixProduit.produit] = prixProduit.prix_kg;
    // });
    return resultat;
}, {});
  
//   console.log(result);

// console.log('hhhhhhhh',data);
res.send( { "data":filteredMarchePrix , "arr":prixParMarche });


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
