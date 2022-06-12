import { FC } from 'react';
import { ErrorStatus } from '../../classes/device-error.class';
import { Label, Tag } from './status-tag.styled';

type StatusTagProps = {
  status: ErrorStatus | null;
};

const getTagLabel = (status: ErrorStatus) => {
  switch (status) {
    case ErrorStatus.Active:
      return 'ungelesen';
    case ErrorStatus.Checked:
      return 'gelesen';
    case ErrorStatus.Resolved:
      return 'quittiert';
  }
};

const StatusTag: FC<StatusTagProps> = ({ status }) => {
  if (!status) {
    return null;
  }
  const color = status === ErrorStatus.Active ? 'red' : 'lightgray';
  return (
    <Tag $color={color}>
      <Label>{getTagLabel(status)}</Label>
    </Tag>
  );
};

export default StatusTag;
