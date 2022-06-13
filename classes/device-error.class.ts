import { ErrorStatus } from './enums';

export class DeviceError {
  constructor(input: Partial<DeviceError>) {
    Object.assign(this, input);
  }

  __typename: 'DeviceError';
  id: string;
  createdAt: Date;
  updatedAt: Date;

  errorType: string;
  message: string;
  status: ErrorStatus;
}
