import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import { LatoBoldText, LatoText } from '../../../styled/global.styled';

export const StyledList = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
}))`
  flex-shrink: 10;
  overflow: hidden;
` as unknown as typeof FlatList;

export const Greeting = styled(LatoBoldText)`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Wrapper = styled(View)`
  padding: 20px;
  padding-bottom: 40px;
  flex: 1;
`;

export const Title = styled(LatoText)`
  margin-bottom: 20px;
`;

export const Separator = styled(View)`
  height: 10px;
`;
