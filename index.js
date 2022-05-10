const express = require('express');
const app = express();
const port = 3000;


const handlebars = require('express-handlebars');


app.set('view engine', 'hbs');


app.engine('hbs', handlebars.engine({
layoutsDir: __dirname + '/views/layouts', 
extname: 'hbs', 
defaultLayout: 'planB', 
partialsDir: __dirname + '/views/partials/',
}));

app.use(express.static('public'));

fakeApi = () => {
    return [
      {
        name: 'Katarina',
        lane: 'midlaner'
      },
      {
        name: 'Jayce',
        lane: 'toplaner'
      },
      {
        name: 'Heimerdinger',
        lane: 'toplaner'
      },
      {
        name: 'Zed',
        lane: 'midlaner'
      },
      {
        name: 'Azir',
        lane: 'midlaner'
      }
    ];
  }
  
  app.get('/', (req, res) => {
    res.render('MainView', {layout: 'index'});
    });

  app.get('/leaguechamps', (req, res) => {
    res.render('LeagueChampsView', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
    });

  app.get('/resume', (req, res) => {
    res.render('ResumeView', {layout: 'index'});
    });

app.listen(port, () => console.log(`App listening to port ${port}`));