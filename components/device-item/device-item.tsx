import { faFire, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { SmartHomeDeviceType } from '../../classes/smart-home-device.class';
import { ItemWrapper, Label } from './device-item.styled';

type DeviceItemProps = {
  name: string;
  type: SmartHomeDeviceType;
  hasErrors: boolean;
  onPress?: () => void;
};

const DeviceItem: FC<DeviceItemProps> = ({
  name,
  type,
  hasErrors,
  onPress,
}) => {
  const icon =
    type === SmartHomeDeviceType.HeatingCircuit ? faFire : faSnowflake;
  return (
    <TouchableOpacity onPress={onPress}>
      <ItemWrapper $hasErrors={hasErrors}>
        <Label>{name}</Label>
        <FontAwesomeIcon icon={icon} />
      </ItemWrapper>
    </TouchableOpacity>
  );
};

export default DeviceItem;
