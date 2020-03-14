const express = require('express');
const exGraphQl = require('express-graphql');
const davedb = require('./src/davedb');
const app = express();

app.use('/api/v1/search', exGraphQl({ schema: davedb, graphiql: true }));

app.listen(3900, () => console.log('Listen on Port 3900...'));
