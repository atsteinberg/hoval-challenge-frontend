export enum ErrorStatus {
  Active = 'Active',
  Checked = 'Checked',
  Resolved = 'Resolved',
}

export class DeviceError {
  __typename: 'DeviceError';
  id: string;
  createdAt: Date;
  updatedAt: Date;

  errorType: string;
  message: string;
  status: ErrorStatus;
}
