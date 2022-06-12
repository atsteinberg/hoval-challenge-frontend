import { FC } from 'react';
import { SmartHomeDeviceType } from '../../classes/smart-home-device.class';
import { Title, Type, Wrapper } from './device-info.styled';

type DeviceInfoProps = {
  name: string;
  type: SmartHomeDeviceType;
};

const getTypeLabel = (type: SmartHomeDeviceType) => {
  switch (type) {
    case SmartHomeDeviceType.HeatingCircuit:
      return 'Heizkreizlauf';
    case SmartHomeDeviceType.CoolingCircuit:
      return 'Kühlkreislauf';
    default:
      return '';
  }
};

const DeviceInfo: FC<DeviceInfoProps> = ({ name, type }) => (
  <Wrapper>
    <Title>{name}</Title>
    <Type>{getTypeLabel(type)}</Type>
  </Wrapper>
);

export default DeviceInfo;
