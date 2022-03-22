import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import { FieldError } from "react-hook-form";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, error, ...rest }: InputProps, ref) => {
  return (
    <Container
      name={name}
      id={name}
      ref={ref}
      {...rest}
    />
  )
}

export const Input = forwardRef(InputBase);