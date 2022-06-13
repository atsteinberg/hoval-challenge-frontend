import { FC } from 'react';
import Loading from '../../../components/loading';
import useGetSmartHomeDevice from '../../../services/graphql/queries/use-get-smart-home-device';
import { RootStackParamsList } from '../authenticated-app';
import Temperatures from '../../../components/temperatures';
import DeviceInfo from '../../../components/device-info/device-info';
import { Wrapper } from './device-details.styled';
import EventsList from '../../../components/events-list';
import { StackScreenProps } from '@react-navigation/stack';

type DeviceDetailsProps = StackScreenProps<RootStackParamsList, 'EventDetails'>;

const DeviceDetails: FC<DeviceDetailsProps> = ({
  route: { params },
  navigation,
}) => {
  const { device, loading } = useGetSmartHomeDevice(params?.id);
  if (loading) {
    return <Loading />;
  }
  if (!device) {
    return null;
  }
  return (
    <Wrapper>
      <DeviceInfo name={device.name} type={device.type} />
      <Temperatures
        id={device.id}
        actualTemperature={device.actualTemperature}
        targetTemperature={device.targetTemperature}
      />
      <EventsList
        events={[
          ...(device.errors ?? []),
          ...(device.statusChanges ?? []),
          ...(device.userInteractions ?? []),
        ]}
        navigate={navigation.navigate}
      />
    </Wrapper>
  );
};

export default DeviceDetails;
