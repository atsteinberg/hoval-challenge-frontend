import { View } from 'react-native';
import styled from 'styled-components/native';
import { LatoText } from '../../styled/global.styled';

export const ItemWrapper = styled(View)<{ $hasErrors: boolean }>`
  /* margin-bottom: 10px; */
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: ${({ $hasErrors }) =>
    $hasErrors ? 'rgba(255,0,0, 0.1)' : 'rgba(0,255,0,0.1)'};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled(LatoText)`
  font-size: 20px;
  margin-right: 20px;
`;
