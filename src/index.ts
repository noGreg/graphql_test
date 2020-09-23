import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express';
import formatArgumentValidationError, { buildSchema } from 'type-graphql';
import Express from 'express';
import { createConnection } from 'typeorm';
import { RegisterResolver } from './entity/modules/user/Register';

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [ RegisterResolver ]
  })

  const app = Express();

  const apolloServer = new ApolloServer({ 
    schema,
    formatError: formatArgumentValidationError as any
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000');
  })
}

main();