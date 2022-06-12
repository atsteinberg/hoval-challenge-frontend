import { IsNotEmpty } from 'class-validator';

class User {
  accessToken?: string;

  @IsNotEmpty({ message: 'Bitte geben Sie einen Benutzernamen an!' })
  username: string;
}

export default User;
