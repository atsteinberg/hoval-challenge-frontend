import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import DeviceDetails from './device-details/device-details';
import home from './home';

type RootStackParamsList = {
  Home: undefined;
  Details: { id: string; name: string };
};

export type ScreenProps = StackScreenProps<RootStackParamsList>;

// TODO improve typing
const getDynamicTitle = ({
  route,
}: {
  route: RouteProp<ParamListBase, 'Details'>;
}) => {
  const { params } = route;
  if (!params || !('name' in params)) {
    return { title: 'Details' };
  }
  return { title: (params as { name: string }).name };
};

const AuthenticatedApp = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'LatoBold',
          },
        }}
      >
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen
          name="Details"
          component={DeviceDetails}
          options={getDynamicTitle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedApp;
