const express = require('express');
const exGraphQl = require('express-graphql');
const schema = require('./src/search');
const app = express();

app.use('/api/v1/search', exGraphQl({ schema, graphiql: true }));

app.listen(3900, () => console.log('Listen on Port 3900...'));
