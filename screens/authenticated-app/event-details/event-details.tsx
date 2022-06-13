import { StackScreenProps } from '@react-navigation/stack';
import { FC } from 'react';
import { LatoButton } from '../../../styled/global.styled';
import { RootStackParamsList } from '../authenticated-app';
import { Details, TextWrapper, Title, Wrapper } from './event-details.styled';
import useEventDetails from './event.details.hook';

export type EventDetailsProps = StackScreenProps<
  RootStackParamsList,
  'EventDetails'
>;

const EventDetails: FC<EventDetailsProps> = ({
  route: { params },
  navigation: { goBack },
}) => {
  const { shortMessage, message } = params;
  const { acknowledge, buttonDisabled, shouldShowButton } = useEventDetails(
    params,
    goBack,
  );
  return (
    <Wrapper>
      <TextWrapper>
        <Title>{shortMessage}</Title>
        {message ? <Details>{message}</Details> : null}
      </TextWrapper>
      {shouldShowButton && (
        <LatoButton
          onPress={acknowledge}
          title="Quittieren"
          disabled={buttonDisabled}
        />
      )}
    </Wrapper>
  );
};

export default EventDetails;
