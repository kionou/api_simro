var express = require('express');
const dataSimro = require('../controllers/controller_simro');
var router = express.Router();


/* GET home page. */
router.get('/',dataSimro.Simro );
router.get('/marche',dataSimro.SimroAll ); 
router.get('/magasin',dataSimro.SimroMagasin );




module.exports = router;