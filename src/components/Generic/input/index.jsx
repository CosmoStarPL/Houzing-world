import React,{forwardRef} from "react";
import { Container, Logo, SearchInput } from "./style";

const Input = forwardRef(({
  width,
  height,
  children,
  mt,
  mb,
  ml,
  mr,
  placeholder,
  onChange,
  pl,
  type,
  
},ref) => {
  return (
    <Container mt={mt} mb={mb} mr={mr} ml={ml} width={width} height={height}>
      <Logo>{children}</Logo>
      <SearchInput
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        pl={pl}
		ref={ref}
      />
    </Container>
  );
  }
)
export default Input;

