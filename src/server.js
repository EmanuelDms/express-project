const express = require('express');
const routes = require('./routes');

const app = express();

// Faz com que as requisições entendam json
app.use(express.json());

// Usa as rotas
app.use(routes);

app.listen(3333);