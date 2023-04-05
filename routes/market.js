const axios  = require('axios');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
    axios
    .get('http://simro-kberthe.pythonanywhere.com/api/marche/')
    .then((resul) =>{
      console.log("ee",resul.data);
      res.json(resul.data)
    })

});

module.exports = router;