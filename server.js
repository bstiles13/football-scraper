const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/build"));
app.use('/', routes);

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
})