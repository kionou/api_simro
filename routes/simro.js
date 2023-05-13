var express = require('express');
const dataSimro = require('../controllers/controller_simro');
var router = express.Router();


/* GET home page. */
router.get('/',dataSimro.Simro );
router.get('/marche',dataSimro.SimroAll ); 
router.get('/magasin',dataSimro.SimroMagasin );

router.get('/produit',dataSimro.SimroProduit );
router.get('/region',dataSimro.SimroRegion );
router.get('/gamme',dataSimro.SimroGamme );
router.get('/prix',dataSimro.SimroPrix );
router.get('/prix_moy',dataSimro.SimroPrix_Moy );





module.exports = router;