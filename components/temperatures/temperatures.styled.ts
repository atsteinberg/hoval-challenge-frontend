import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View } from 'react-native';
import styled from 'styled-components';
import { LatoBoldText } from '../../styled/global.styled';

export const TemperatureView = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const TemperatureText = styled(LatoBoldText)`
  font-size: 30px;
`;
export const ChooseTargetTemperatureIcons = styled(View)`
  margin: 0 10px 0 15px;
`;

export const TemperaturesView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const TopIcon = styled(FontAwesomeIcon)`
  margin-bottom: 5px;
`;
