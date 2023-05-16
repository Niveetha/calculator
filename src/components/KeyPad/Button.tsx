import { Button as ChakraButton } from "@chakra-ui/react";
import { useContext } from "react";
import { CalculatorContext } from "../../contexts";

interface PadProps {
  value: string;
  label: string;
  bgColor?: string;
  color?: string;
}

export const Button = ({
  value,
  label,
  bgColor = "#3D4350",
  color = "#fff",
}: PadProps) => {
  const { calculate } = useContext(CalculatorContext);

  return (
    <ChakraButton
      bgColor={bgColor}
      color={color}
      w="50px"
      h="50px"
      variant="solid"
      value={value}
      _hover={{ bgColor: "#788298" }}
      onClick={() => calculate(value)}
    >
      {label}
    </ChakraButton>
  );
};
