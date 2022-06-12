import { format } from 'date-fns';
import de from 'date-fns/esm/locale/de/index.js';
import { FC } from 'react';
import { FlatList } from 'react-native';
import { DeviceError } from '../../classes/device-error.class';
import { DeviceStatusChange } from '../../classes/device-status-change.class';
import { UserInteraction } from '../../classes/user-interaction.class';
import EventItem from '../event-item';
import { EventItemProps } from '../event-item/event-item';
import { Separator } from './events-list.styled';

type EventsListProps = {
  events: (UserInteraction | DeviceError | DeviceStatusChange)[];
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

const transformToEventItemProps = (
  item: UserInteraction | DeviceError | DeviceStatusChange,
): EventItemProps => {
  const message =
    item.__typename === 'DeviceStatusChange' ? item.event : item.message;
  const fullMessage =
    item.__typename === 'DeviceError'
      ? `${item.errorType}: ${message}`
      : message;
  const date = item.__typename === 'DeviceError' ? item.createdAt : item.date;
  const dateString = date
    ? format(new Date(date), 'do Mo, HH:mm', { locale: de })
    : '';
  const status = item.__typename === 'DeviceError' ? item.status : null;
  console.log({ status });
  const acknowledge = status
    ? () => console.log(`acknowledge ${item.id}`)
    : undefined;
  return {
    message: fullMessage,
    dateString,
    status,
    acknowledge,
  };
};

const EventsList: FC<EventsListProps> = ({ events }) => {
  events.sort(sortByDate);
  return (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <EventItem {...transformToEventItemProps(item)} />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default EventsList;
