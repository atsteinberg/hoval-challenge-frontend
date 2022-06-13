import { FC } from 'react';
import { ErrorStatus } from '../../classes/enums';
import { Label, Tag } from './status-tag.styled';

type StatusTagProps = {
  status: ErrorStatus | null;
};

const getTagLabel = (status: ErrorStatus) => {
  switch (status) {
    case ErrorStatus.Unread:
      return 'ungelesen';
    case ErrorStatus.Read:
      return 'gelesen';
    case ErrorStatus.Acknowledged:
      return 'quittiert';
  }
};

const StatusTag: FC<StatusTagProps> = ({ status }) => {
  if (!status) {
    return null;
  }
  const color = status !== ErrorStatus.Acknowledged ? 'red' : 'lightgray';
  return (
    <Tag $color={color}>
      <Label>{getTagLabel(status)}</Label>
    </Tag>
  );
};

export default StatusTag;
