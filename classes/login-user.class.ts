import { IsString, Length } from 'class-validator';
import User from './user.class';

class LoginUser extends User {
  constructor(loginData: LoginUser) {
    super();
    Object.assign(this, loginData);
  }

  @IsString()
  @Length(6, 24, {
    message: 'Das Passwort muss zwischen 6 und 24 Zeichen lang sein.',
  })
  password: string;
}

export default LoginUser;
