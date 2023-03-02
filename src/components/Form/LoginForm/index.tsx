import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../providers/useContext/useContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import * as yup from 'yup';
import Input from '../Input';
import { ILoginFormValues } from '../../../providers/useContext/@types';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>();

  return (
    <StyledForm onSubmit={handleSubmit(userLogin)}>
      <Input
        label='E-mail'
        type='email'
        placeholder='Digite seu e-mail'
        defaultValue=''
        register={register}
        name='email'
        errors={errors.email}
      />
      <Input
        label='Senha'
        type='password'
        placeholder='Digite sua senha'
        register={register}
        name='password'
        errors={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
