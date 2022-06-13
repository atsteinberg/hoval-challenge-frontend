import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EventItemProps } from '../../components/event-item/event-item';
import DeviceDetails from './device-details';
import EventDetails from './event-details';
import home from './home';

export type RootStackParamsList = {
  Home: undefined;
  Details: { id: string; name: string };
  EventDetails: Omit<EventItemProps, 'navigate'>;
};

// TODO improve typing
const getDynamicDetailsTitle = ({
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
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'LatoBold',
          },
          headerBackTitle: 'zurück',
        }}
      >
        <RootStack.Group>
          <RootStack.Screen name="Home" component={home} />
          <RootStack.Screen
            name="Details"
            component={DeviceDetails}
            options={getDynamicDetailsTitle}
          />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen
            name="EventDetails"
            component={EventDetails}
            options={{ title: 'Event Details' }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedApp;
