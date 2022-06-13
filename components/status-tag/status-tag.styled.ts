import { View } from 'react-native';
import styled from 'styled-components/native';
import { LatoText } from '../../styled/global.styled';

export const Tag = styled(View)<{ $color: string }>`
  color: white;
  padding: 2px 10px;
  border-radius: 10px;
  ${({ $color }) => `background-color: ${$color};`}
`;

export const Label = styled(LatoText)`
  color: white;
`;
