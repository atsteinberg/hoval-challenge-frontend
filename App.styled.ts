import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

export const StyledView = styled(View)`
  background-color: red;
  padding: 10px 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled(Text)`
  color: white;
`;
