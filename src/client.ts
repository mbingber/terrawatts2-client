import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import Cookies from "js-cookie";

const isProd = process.env.NODE_ENV === "production";

const url = isProd ? "terrawatts2.herokuapp.com" : "192.168.1.174:4000"

const cache = new InMemoryCache();

// Create an http link:
const httpLink = new HttpLink({
  uri: `http://${url}`,
  credentials: 'include'
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://${url}/graphql`,
  options: {
    reconnect: true
  }
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('access_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
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
  authLink.concat(httpLink),
);

export const client = new ApolloClient({
  cache,
  link
});
