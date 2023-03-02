import React from 'react';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  register: UseFormRegister<any>;
  name: string;
  errors: any;
}

const Input = ({
  label,
  type,
  placeholder,
  defaultValue,
  register,
  name,
  errors,
}: InputProps) => {
  return (
    <fieldset>
      <StyledTextField
        label={label}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name)}
      />
      {errors && (
        <StyledParagraph fontColor='red'>{errors.message}</StyledParagraph>
      )}
    </fieldset>
  );
};

export default Input;
