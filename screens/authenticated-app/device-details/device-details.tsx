import { FC } from 'react';
import Loading from '../../../components/loading';
import useGetSmartHomeDevice from '../../../services/graphql/queries/use-get-smart-home-device';
import { ScreenProps } from '../authenticated-app';
import Temperatures from '../../../components/temperatures';
import DeviceInfo from '../../../components/device-info/device-info';
import { Wrapper } from './device-details.styled';
import EventsList from '../../../components/events-list';

const DeviceDetails: FC<ScreenProps> = ({ route: { params } }) => {
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
      />
    </Wrapper>
  );
};

export default DeviceDetails;
