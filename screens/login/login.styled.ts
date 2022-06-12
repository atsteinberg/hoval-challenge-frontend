import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import {
  LatoBoldText,
  LatoLightText,
  LatoTextInput,
} from '../../styled/global.styled';

export const StyledView = styled(View)`
  padding: 20px;
  justify-content: center;
  flex: 1;
`;

export const StyledTextInput = styled(LatoTextInput)`
  position: relative;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 15px 20px;
  border-radius: 5px;
  margin-bottom: 40px;
`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  background-color: white;
  flex: 1;
`;

export const StyledText = styled(LatoBoldText)`
  max-width: 45%;
  margin-bottom: 50px;
`;

export const StyledErrorComponent = styled(LatoLightText)`
  font-size: 12px;
  position: absolute;
  top: 52px;
  left: 20px;
  right: 20px;
  color: red;
`;

export const Label = styled(LatoLightText)`
  margin-bottom: 10px;
`;
