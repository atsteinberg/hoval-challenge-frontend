import { StackScreenProps } from '@react-navigation/stack';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import DeviceItem from '../../../components/device-item';
import Loading from '../../../components/loading';
import { userState } from '../../../recoil/store';
import useGetSmartHomeDevices from '../../../services/graphql/queries/use-get-smart-home-devices';
import { RootStackParamsList } from '../authenticated-app';
import { Greeting, Separator, StyledList, Title, Wrapper } from './home.styled';

type HomeProps = StackScreenProps<RootStackParamsList, 'Home'>;

const Home: FC<HomeProps> = ({ navigation }) => {
  const { username } = useRecoilValue(userState) ?? {};
  const { loading, devices } = useGetSmartHomeDevices();
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <Greeting>Hallo {username}!</Greeting>
      <Title>Hier sind deine SmartHome Geräte</Title>
      <StyledList
        data={devices}
        renderItem={({ item }) => (
          <DeviceItem
            {...item}
            onPress={() => {
              navigation.navigate('Details', { id: item.id, name: item.name });
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
      />
    </Wrapper>
  );
};

export default Home;
