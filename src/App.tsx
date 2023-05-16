import { ChakraProvider } from "@chakra-ui/react";
import { Calculator } from "./views/Calculator";

export const App = () => {
  return (
    <ChakraProvider>
      <Calculator />
    </ChakraProvider>
  );
};
