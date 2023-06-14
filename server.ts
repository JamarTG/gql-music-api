import express from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schema/typeDefs";
import resolvers from "./schema/resolvers";

async function startApolloServer() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();

  const app = express();
  apolloServer.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log("Server running at localhost:4000/graphql")
  );
}

startApolloServer();