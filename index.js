const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const pg = require('pg');
const Routes = require('./routes/dnd.routes');
const CharacterMethods = require('./methods/character.methods');
const charcterDB = require('./services/charcater.db.service');
const allRequestsDB = require('./services/get.requests.db');

const app = express()

const Pool = pg.Pool;

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}
const connectionString = process.env.DATABASE_URL || 'postgresql://nachobits:1997@localhost:5432/dnd';


const pool = new Pool({
    connectionString,
    ssl: useSSL
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use(express.static('public'));

//Method instances
const characterDbServices = charcterDB(pool);
const getRequests = allRequestsDB(pool);
const characterMethods = CharacterMethods(characterDbServices, getRequests);
const route = Routes(characterMethods);


app.get('/', route.home);
app.get('/character-stats', route.characterStats)
app.get('/inventory', route.inventory)




app.post('/deposit-coins', route.depositCoins);
app.post('/withdraw-coin', route.withdrawCoins);
// app.get('/api', api.routes)
// app.get('/api/games', api.allGames);
// app.get('/api/platforms', api.allPlatforms);


let PORT = process.env.PORT || 3008;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});