import { Flex } from "@chakra-ui/react";
type Props ={
  children: JSX.Element;
  _styles: JSON
}
const IconBox = ({ children, _styles }: Props) => (
   
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"12px"}
      styles ={_styles}
    >
      {children}
    </Flex>
  
)
export default IconBox;