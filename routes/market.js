const axios  = require('axios');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
    axios
    .get('https://simro-kberthe.pythonanywhere.com/api/liste-marche/')
    .then((resul) =>{
      console.log("ee",resul.data);
      res.json(resul.data)
    })

});
// router.get("/emailfetch", authCheck, async (req, res, next) => {
//   try {
//   //listing messages in users mailbox 
//     let emailFetch = await gmaiLHelper.getEmails(req.user._doc.profile_id , '/messages', req.user.accessToken)
//     emailFetch = emailFetch.data
//     res.send(emailFetch)
//   } catch (err) {
//     next(err);
//   }
// })

module.exports = router;