import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { GRAPHQL_API } from '@env';
import { RecoilRoot } from 'recoil';

import Screens from './screens/screens';

const App = () => {
  const client = new ApolloClient({
    uri: GRAPHQL_API,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Screens />
      </RecoilRoot>
    </ApolloProvider>
  );
};
export default App;
