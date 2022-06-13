import { View } from 'react-native';
import styled from 'styled-components/native';
import { LatoLightText, LatoText } from '../../styled/global.styled';

export const Wrapper = styled(View)`
  position: relative;
  background-color: #eee;
  border-radius: 5px;
  padding: 5px 20px 20px 20px;
`;

export const Date = styled(LatoLightText)``;

export const Message = styled(LatoText)``;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
