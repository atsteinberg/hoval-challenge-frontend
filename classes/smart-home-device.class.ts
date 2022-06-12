import { DeviceError, ErrorStatus } from './device-error.class';
import { DeviceStatusChange } from './device-status-change.class';
import { UserInteraction } from './user-interaction.class';

export enum SmartHomeDeviceType {
  HeatingCircuit = 'HeatingCircuit',
  CoolingCircuit = 'CoolingCircuit',
}

const isActiveError = (error: DeviceError) =>
  error.status === ErrorStatus.Active;

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
