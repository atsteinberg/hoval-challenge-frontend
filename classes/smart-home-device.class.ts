import { DeviceError } from './device-error.class';
import { DeviceStatusChange } from './device-status-change.class';
import { ErrorStatus, SmartHomeDeviceType } from './enums';
import { UserInteraction } from './user-interaction.class';

const isActiveError = (error: DeviceError) =>
  error.status !== ErrorStatus.Acknowledged;

export class SmartHomeDevice {
  constructor(input: Partial<SmartHomeDevice>) {
    Object.assign(this, input);
    this.hasErrors = this.getHasErrors();
  }
  id: string;
  name: string;
  targetTemperature: number;
  actualTemperature: number;
  type: SmartHomeDeviceType;
  errors: DeviceError[];
  statusChanges: DeviceStatusChange[];
  hasErrors: boolean;
  userInteractions: UserInteraction[];
  getHasErrors() {
    return this.errors.some(isActiveError);
  }
}
