import { View } from 'react-native';
import styled from 'styled-components/native';
import { LatoLightText, LatoText } from '../../styled/global.styled';

export const Wrapper = styled(View)`
  position: relative;
  background-color: #eee;
  border-radius: 5px;
  padding: 30px 20px 20px 20px;
`;

export const Date = styled(LatoLightText)`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const Message = styled(LatoText)``;
