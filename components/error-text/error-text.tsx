import { FC } from 'react';
import { LatoLightText } from '../../styled/global.styled';

type ErrorTextProps = {
  errorMessage?: string;
};

const ErrorText: FC<ErrorTextProps> = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }
  return <LatoLightText>{errorMessage}</LatoLightText>;
};

export default ErrorText;
