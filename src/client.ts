import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { ApolloClient, split, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from "js-cookie";

// const isProd = process.env.NODE_ENV === "production";
const isProd = true; // TEMP

const url = isProd ? "terrawatts2-server.herokuapp.com" : "localhost:4000"

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
  link,
  cache: new InMemoryCache(),
});
