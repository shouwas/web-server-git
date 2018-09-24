const express = require('express');

const hbs = require('hbs');

const port = process.env.Port || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', ()=>{

    return new Date().getFullYear();
});

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render('home.hbs', {
        titlePage : 'Home page',
        welcomePage : 'Welcome to home page',
  });
}); 

  app.get('/about', function(req, res){

    res.render('about.hbs', {
        title : 'About page ...',
    });
  });


  app.get('/bad', function(req, res){

    res.send({

        errorMessage : 'Unable to connect'
    });
  })

  app.listen(port, ()=>{
console.log(`connection is stablishing ${port}`);
  });