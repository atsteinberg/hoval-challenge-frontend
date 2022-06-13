import { View } from 'react-native';
import styled from 'styled-components/native';
import { LatoBoldText, LatoText } from '../../../styled/global.styled';

export const Wrapper = styled(View)`
  padding: 20px;
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled(LatoBoldText)`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Details = styled(LatoText)`
  margin-bottom: 20px;
`;

export const TextWrapper = styled(View)``;
