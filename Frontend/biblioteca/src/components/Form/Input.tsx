import {
  FormControl,
    FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInpuutProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInpuutProps {
  name: string;
  label?: string;
  error?: FieldError
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="cyan.500"
        bgColor="white"
        color="gray.900"
        
        size="lg"
        ref={ref}
        {...rest}
      />
        {!!error && (
            <FormErrorMessage>
                {error.message}
            </FormErrorMessage>
        )}
      
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
