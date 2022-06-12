import { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ErrorStatus } from '../../classes/device-error.class';
import StatusTag from '../status-tag';
import { Date, Message, Wrapper } from './event-item.styled';

export type EventItemProps = {
  message: string;
  dateString: string;
  acknowledge?: () => void;
  status: ErrorStatus | null;
};

const EventItem: FC<EventItemProps> = ({
  message,
  dateString,
  acknowledge,
  status,
}) => {
  return (
    <TouchableOpacity onPress={acknowledge}>
      <Wrapper>
        <Date>{dateString}</Date>
        <Message>{message}</Message>
        <StatusTag status={status} />
      </Wrapper>
    </TouchableOpacity>
  );
};

export default EventItem;
