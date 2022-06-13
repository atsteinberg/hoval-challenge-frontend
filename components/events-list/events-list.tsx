import { format } from 'date-fns';
import de from 'date-fns/esm/locale/de/index.js';
import { FC } from 'react';
import { FlatList } from 'react-native';
import { DeviceError } from '../../classes/device-error.class';
import { DeviceStatusChange } from '../../classes/device-status-change.class';
import { UserInteractionType } from '../../classes/enums';
import { UserInteraction } from '../../classes/user-interaction.class';
import EventItem from '../event-item';
import { EventItemProps } from '../event-item/event-item';
import { Separator } from './events-list.styled';

type EventsListProps = {
  events: (UserInteraction | DeviceError | DeviceStatusChange)[];
  navigate: (
    to: 'EventDetails',
    params: Omit<EventItemProps, 'navigate'>,
  ) => void;
};

const sortByDate = (
  a: UserInteraction | DeviceError | DeviceStatusChange,
  b: UserInteraction | DeviceError | DeviceStatusChange,
) => {
  const aDate = new Date(a instanceof DeviceError ? a.createdAt : a.date);
  const bDate = new Date(b instanceof DeviceError ? b.createdAt : b.date);
  console.log('bDate', bDate.getDate());
  return bDate.getTime() - aDate.getTime();
};

const getInteractionShortMessage = (type: UserInteractionType) => {
  switch (type) {
    case UserInteractionType.NameChange:
      return 'Namensänderung';
    case UserInteractionType.TargetTemperatureChange:
      return 'Solltemperaturänderung';
    default:
      return 'Benutzerinteraktion';
  }
};

const transformToEventItemProps = (
  item: UserInteraction | DeviceError | DeviceStatusChange,
): Omit<EventItemProps, 'navigate'> => {
  console.log({ item });
  const message =
    item.__typename === 'DeviceError' || item.__typename === 'UserInteraction'
      ? item.message
      : '';
  const shortMessage =
    item.__typename === 'StatusChange'
      ? item.event
      : item.__typename === 'DeviceError'
      ? item.errorType
      : getInteractionShortMessage(item.interactionType);
  const date = item.__typename === 'DeviceError' ? item.createdAt : item.date;
  const dateString = date
    ? format(new Date(date), 'do Mo, HH:mm', { locale: de })
    : '';
  const status = item.__typename === 'DeviceError' ? item.status : null;
  console.log({ status });
  return {
    message,
    shortMessage,
    dateString,
    status,
    id: item.id,
    type: item.__typename,
  };
};

const EventsList: FC<EventsListProps> = ({ events, navigate }) => {
  events.sort(sortByDate);
  return (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <EventItem {...transformToEventItemProps(item)} navigate={navigate} />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default EventsList;
