import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../recoil/store';

const UnauthenticatedApp = () => {
  const setUser = useSetRecoilState(userState);
  const handlePress = () => setUser({ userName: 'Alex' });
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={handlePress}>
          <Text>Hello world!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UnauthenticatedApp;
