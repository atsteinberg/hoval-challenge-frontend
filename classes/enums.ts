export enum UserInteractionType {
  NameChange = 'NameChange',
  TargetTemperatureChange = 'TargetTemperatureChange',
}

export enum SmartHomeDeviceType {
  HeatingCircuit = 'HeatingCircuit',
  CoolingCircuit = 'CoolingCircuit',
}

export enum EventType {
  UserInteraction = 'UserInteraction',
  DeviceError = 'DeviceError',
  DeviceStatusChange = 'DeviceStatusChange',
}

export enum ErrorStatus {
  Unread = 'Unread',
  Read = 'Read',
  Acknowledged = 'Acknowledged',
}
