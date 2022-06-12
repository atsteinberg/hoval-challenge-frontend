import { Controller, FieldError, FieldValues } from 'react-hook-form';
import { ControllerProps } from 'react-hook-form';
import { TextInputProps as RNTextInputProps, View } from 'react-native';
import { TextInput, Text } from 'react-native';
import { StyledComponent } from 'styled-components';

type Errors = {
  errors?: { [key: string]: FieldError | undefined };
  StyledErrorComponent?: StyledComponent<typeof Text, any>;
};

type ControllerPropsWithoutRender<T extends FieldValues> = Omit<
  ControllerProps<T>,
  'render'
>;

type TextInputProps = RNTextInputProps & {
  StyledTextInput?: StyledComponent<typeof TextInput, any>;
};

type FormTextInputProps<T extends FieldValues> =
  ControllerPropsWithoutRender<T> & Errors & TextInputProps;

const FormTextInput = <T extends object>({
  control,
  name,
  errors,
  StyledErrorComponent,
  StyledTextInput,
  ...textInputProps
}: FormTextInputProps<T>) => {
  const error = errors?.[name];
  const ErrorComponent = StyledErrorComponent ?? Text;
  const TextInputComponent = StyledTextInput ?? TextInput;

  return (
    <>
      <Controller<T>
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <View style={{ position: 'relative' }}>
            <TextInputComponent
              value={value as string}
              onChangeText={onChange}
              onBlur={onBlur}
              {...textInputProps}
            />
            {error && <ErrorComponent>{error.message}</ErrorComponent>}
          </View>
        )}
        name={name}
      />
    </>
  );
};

export default FormTextInput;
