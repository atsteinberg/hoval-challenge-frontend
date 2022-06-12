import FormTextInput from '../../components/form-text-input';
import {
  Label,
  StyledErrorComponent,
  StyledSafeAreaView,
  StyledText,
  StyledTextInput,
  StyledView,
} from './login.styled';
import { useLogin } from './login.hook';
import { LatoButton } from '../../styled/global.styled';

const UnauthenticatedApp = () => {
  const { control, errors, handleSubmit } = useLogin();

  return (
    <StyledSafeAreaView>
      <StyledView>
        <StyledText>Bitte logge dich ein!</StyledText>
        <Label>Benutzername</Label>
        <FormTextInput
          control={control}
          name="username"
          errors={errors}
          StyledTextInput={StyledTextInput}
          StyledErrorComponent={StyledErrorComponent}
        />
        <Label>Passwort</Label>
        <FormTextInput
          control={control}
          name="password"
          errors={errors}
          StyledTextInput={StyledTextInput}
          secureTextEntry={true}
          StyledErrorComponent={StyledErrorComponent}
        />
        <LatoButton title="OK" onPress={handleSubmit} />
      </StyledView>
    </StyledSafeAreaView>
  );
};

export default UnauthenticatedApp;
