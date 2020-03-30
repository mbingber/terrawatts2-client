import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';

const isProd = process.env.NODE_ENV === "production";

const url = isProd ? "terrawatts2.herokuapp.com" : "192.168.1.174:4000"

const cache = new InMemoryCache();

// Create an http link:
const httpLink = new HttpLink({
  uri: `http://${url}`
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://${url}/graphql`,
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  cache,
  link
});
