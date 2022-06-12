import { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { CenteredView } from '../../styled/global.styled';

const Loading: FC = () => (
  <CenteredView>
    <ActivityIndicator size="large" />
  </CenteredView>
);

export default Loading;
