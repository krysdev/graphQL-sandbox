const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const {MONGODB} = require('./config.js')

const app = express();

mongoose.connect(MONGODB, {useNewUrlParser: true})
mongoose.connection.once('open', () => console.log('Connected to DB'))

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('Server is working');
})