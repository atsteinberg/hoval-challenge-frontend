import { IsEmail, IsString, Length } from 'class-validator';

class UserLogin {
  constructor(loginData: UserLogin) {
    Object.assign(this, loginData);
  }

  @IsEmail(
    {},
    {
      message: 'Please provide a valid email address',
    },
  )
  email: string;

  @IsString()
  @Length(6, 24, {
    message: 'Password must be between 6 and 24 characters long',
  })
  password: string;
}

export default UserLogin;
