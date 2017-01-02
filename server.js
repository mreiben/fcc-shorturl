var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("enter 'new/' + a valid URL as a parameter above to get a shorter working link!");
});

// function created by Diego Cardoso http://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}

app.get('/new/:url(*)', function(req,res){
    var url = req.params.url;
    console.log(url);
    
    //check if url is valid
    var urlValid = isURL(url);
    
    // res.json({
    //     "site": url,
    //     "isValid": urlValid
    // });  

    //if invalid, return json with error
    if(!urlValid){
        res.json({
            "error": "Please enter a valid URL"
        });
    } else {
        //if url is valid, create new url and store old and new url in mongodb
        res.json({
            "site": url,
            "isValid": urlValid
        }); 
    }
    
    
    
    
    //display new json with working new route
    
    
});

app.get('/:dbVal', function(req, res){
    var dbVal = req.params.dbVal;
    
    //render url at specified db location
    
    
});


var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, function() {
    console.log('Listening on port %d', server_port);
});