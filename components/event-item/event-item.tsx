import { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ErrorStatus } from '../../classes/enums';
import StatusTag from '../status-tag';
import { Date, Header, Message, Wrapper } from './event-item.styled';

export type EventItemProps = {
  id: string;
  shortMessage: string;
  dateString: string;
  message?: string;
  status: ErrorStatus | null;
  type: 'DeviceError' | 'UserInteraction' | 'DeviceStatusChange';
  navigate: (
    to: 'EventDetails',
    params: Omit<EventItemProps, 'navigate'>,
  ) => void;
};

const EventItem: FC<EventItemProps> = ({
  id,
  shortMessage,
  dateString,
  status,
  type,
  message,
  navigate,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigate('EventDetails', {
          id,
          status,
          shortMessage,
          dateString,
          type,
          message,
        })
      }
    >
      <Wrapper>
        <Header>
          <Date>{dateString}</Date>
          <StatusTag status={status} />
        </Header>
        <Message>{shortMessage}</Message>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default EventItem;
