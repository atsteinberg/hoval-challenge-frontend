import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { useFonts } from 'expo-font';

import Screens from './screens';
import Toast from 'react-native-toast-message';
import Loading from './components/loading';
import initializeClient from './services/graphql/initialize-client';

const App = () => {
  const [loaded] = useFonts({
    Lato: require('./assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('./assets/fonts/Lato-Bold.ttf'),
    LatoLight: require('./assets/fonts/Lato-Light.ttf'),
  });

  const client = initializeClient();

  if (!loaded) {
    return <Loading />;
  }

  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Screens />
        <Toast />
      </RecoilRoot>
    </ApolloProvider>
  );
};
export default App;
