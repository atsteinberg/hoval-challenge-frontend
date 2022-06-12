export enum UserInteractionType {
  NameChange = 'NameChange',
  TargetTemperatureChange = 'TargetTemperatureChange',
}

export class UserInteraction {
  __typename: 'UserInteraction';
  id: string;
  date: Date;
  interactionType: UserInteractionType;
  message: string;
}
