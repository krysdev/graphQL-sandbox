const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3000, () => {
    console.log('Server is working');
})