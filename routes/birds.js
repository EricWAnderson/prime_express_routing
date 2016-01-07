/**
 * Created by ericanderson on 1/7/16.
 */
var express = require('express');
var router = express.Router();

//middleware this is specific to this router
router.use(function timeLog(request, response, next){
   console.log('Time: ', Date.now());
    next();
});

//define the home page route
router.get('/', function(request, response){
   response.send('Birds home page');
});

//define the about route
router.get('/about', function(request, response){
   response.send('About birds');
});

module.exports = router;