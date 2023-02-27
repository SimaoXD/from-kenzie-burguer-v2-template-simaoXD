
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValues } from '../../../providers/useContext/@types';
import { UserContext } from '../../../providers/useContext/useContext';






const RegisterForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<IRegisterFormValues>();
  const {userRegister} = useContext(UserContext)

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  }


  }

  <StyledForm onSubmit={handleSubmit(submit)}>
    <Input type='text' label ='seu nome' register={register('name')} error={errors.name} />
    <Input  type='email' label ='seu e-mail' register={register('email')} error={errors.email} />
    <Input  type='password'label ='Crie uma senha' register={register('password')} error={errors.password}/>
   
    <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
      Cadastrar
    </StyledButton>
  </StyledForm>
};

export default RegisterForm;


