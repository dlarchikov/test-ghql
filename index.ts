import * as  express from 'express';
import {buildSchema} from 'graphql';
import * as graphqlHTTP from 'express-graphql';

import {BlogAppSchema as schema} from './src/schema'

let port = 3000;

const app = express();
app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true
}));


app.listen(port);
console.log('GraphQL API server running at localhost: ' + port);