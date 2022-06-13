import { UserInteractionType } from './enums';

export class UserInteraction {
  __typename: 'UserInteraction';
  id: string;
  date: Date;
  interactionType: UserInteractionType;
  message: string;
}
