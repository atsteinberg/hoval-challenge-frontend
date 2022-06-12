import { View } from 'react-native';
import styled from 'styled-components/native';
import { LatoBoldText, LatoText } from '../../styled/global.styled';

export const Wrapper = styled(View)`
  align-items: center;
`;

export const Title = styled(LatoBoldText)`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Type = styled(LatoText)`
  margin-bottom: 20px;
`;
