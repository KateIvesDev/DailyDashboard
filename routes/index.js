/* eslint-disable no-undef */
var express = require('express');
var router = express.Router();
require('dotenv').config()

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  const auth = process.env.PEXELS_API_KEY
  //fetch my collection id from collections endpoint
  const collectionAPI = `https://api.pexels.com/v1/collections?per_page=1`
  fetch (collectionAPI, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  })
  .then(res => res.json())
  .then(data => {
    let collectionID = data.collections[0].id
    console.log(collectionID)
    const collectionImages = `https://api.pexels.com/v1/collections/${collectionID}`
    //fetch images from collection
    return fetch(collectionImages, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
      })
      .then(res => res.json())
      .then(data => {
        let max = data.per_page
        let min = 0
        let random = Math.floor(Math.random() * (max-min +1)+ min) 
        let image = data.media[random]
          res.render('index', {
            url: image.src.large,
          });
      })
  })
  
});
*/
  
router.get('/', function(req,res) {
  res.render('index', {})
})

router.post('/', function(req,res) {
  res.render('index', {})
})

module.exports = router;
