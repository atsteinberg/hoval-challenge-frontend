import {
  faTemperature3,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useUpdateSmartHomeDevice from '../../services/graphql/mutations/use-update-smart-home-device';
import {
  ChooseTargetTemperatureIcons,
  TemperaturesView,
  TemperatureText,
  TemperatureView,
  TopIcon,
} from './temperatures.styled';

type TemperaturesProps = {
  id?: string;
  actualTemperature?: number;
  targetTemperature?: number;
};

const Temperatures: FC<TemperaturesProps> = ({
  actualTemperature,
  targetTemperature,
  id,
}) => {
  const { updateSmartHomeDevice } = useUpdateSmartHomeDevice();
  if (!id) {
    return null;
  }
  const handleArrowUpPress = () => {
    if (!targetTemperature) {
      return;
    }
    updateSmartHomeDevice({
      variables: {
        input: {
          id,
          targetTemperature: targetTemperature + 0.1,
        },
      },
    });
  };
  const handleArrowDownPress = () => {
    if (!targetTemperature) {
      return;
    }
    updateSmartHomeDevice({
      variables: {
        input: {
          id,
          targetTemperature: targetTemperature - 0.1,
        },
      },
    });
  };
  return (
    <TemperaturesView>
      <TemperatureView>
        <FontAwesomeIcon icon={faTemperature3} size={60} />
        <TemperatureText>{actualTemperature ?? '?'}°C</TemperatureText>
      </TemperatureView>
      <TemperatureView>
        <TemperatureText>{targetTemperature ?? '?'}°C</TemperatureText>
        <ChooseTargetTemperatureIcons>
          <TouchableOpacity onPress={handleArrowUpPress}>
            <TopIcon icon={faTemperatureArrowUp} size={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleArrowDownPress}>
            <FontAwesomeIcon icon={faTemperatureArrowDown} size={40} />
          </TouchableOpacity>
        </ChooseTargetTemperatureIcons>
      </TemperatureView>
    </TemperaturesView>
  );
};
export default Temperatures;
