import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { SERVER_BASE_URL } from '@env';
import { GRAPHQL_ENDPOINT } from '../../common/constants';
import { setContext } from '@apollo/client/link/context';

const setAuthorizationLink = setContext((_request, previousContext) => {
  const { headers, accessToken } = previousContext;
  if (!accessToken) {
    return previousContext;
  }

  return {
    ...previousContext,
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
});

const httpLink = new HttpLink({
  uri: `${SERVER_BASE_URL}/${GRAPHQL_ENDPOINT}`,
});

const initializeClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: setAuthorizationLink.concat(httpLink),
  });

  return client;
};

export default initializeClient;
