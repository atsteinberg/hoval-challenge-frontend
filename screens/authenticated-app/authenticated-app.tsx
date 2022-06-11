import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/store';

const AuthenticatedApp = () => {
  const [user, setUser] = useRecoilState(userState);
  const handlePress = () => setUser(null);
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={handlePress}>
          <Text>Hello {user?.userName}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AuthenticatedApp;
