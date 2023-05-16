import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MainDisplay, PadGrid } from "../components";
import { CalculatorContext } from "../contexts";
import { ActionState } from "../types";
import { runCalculation } from "../utils/runCalculation";

export const Calculator = () => {
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [mainDisplay, setMainDisplay] = useState<string>("0");
  const [resetDisplay, setResetDisplay] = useState<boolean>(false);
  const [prevNumber, setPrevNumber] = useState<number>(0);
  const [action, setAction] = useState<ActionState>({
    action: null,
    highlight: false,
  });

  // Main calculation
  const calculate = (key: string): void => {
    switch (key) {
      // Reset calculator
      case "a":
        setMainDisplay("0");
        setResetDisplay(true);
        setPrevNumber(0);
        setAction({ action: null, highlight: false });
        break;

      // Reset display
      case "c":
        setMainDisplay("0");
        setResetDisplay(true);
        setAction((prev) => {
          return { ...prev, highlight: true };
        });
        break;

      // Inverse number
      case "i":
        setMainDisplay((prev) => String(Number(prev) * -1));
        setAction((prev) => {
          return { ...prev, highlight: false };
        });
        break;

      // Divide by 100
      case "%":
        setMainDisplay((prev) => String(Number(prev) / 100));
        setAction((prev) => {
          return { ...prev, highlight: false };
        });
        break;

      // Add decimal
      case ".":
        if (!mainDisplay.includes(".")) setMainDisplay((prev) => `${prev}.`);
        break;

      // Run calculation
      case "=":
      case "enter":
        const result = !action.action
          ? Number(mainDisplay)
          : runCalculation(prevNumber, Number(mainDisplay), action.action);
        setMainDisplay(String(result));
        setResetDisplay(true);
        setPrevNumber(result);
        setAction({ action: null, highlight: false });
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        if (prevNumber && action.action && !action.highlight) {
          const newNumber = runCalculation(
            prevNumber,
            Number(mainDisplay),
            action.action
          );
          setPrevNumber(newNumber);
          setMainDisplay(String(newNumber));
        } else {
          setPrevNumber(Number(mainDisplay));
        }
        setResetDisplay(true);
        setAction({ action: key, highlight: true });
        break;

      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (mainDisplay === "0" && key === "0") return;
        if (resetDisplay) {
          setMainDisplay(key);
          setResetDisplay(false);
        } else {
          setMainDisplay((prev) => (prev === "0" ? key : `${prev}${key}`));
        }
        setAction((prev) => {
          return { ...prev, highlight: false };
        });
        break;

      default:
        return;
    }
  };

  // Listen to on-screen key down events
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Shift") return;
      if (!isKeyDown) {
        setIsKeyDown(true);
        calculate(String(e.key).toLowerCase());
      }
    };

    const handleKeyUp = () => {
      setIsKeyDown(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [isKeyDown]);

  return (
    <CalculatorContext.Provider value={{ action, calculate }}>
      <Center h="100vh" bg="#f4f3f3">
        <Box h="680px" w="320px" bg="#22252d" color="white" borderRadius="28px">
          <MainDisplay mainDisplay={mainDisplay} />
          <Box
            h="400px"
            w="320px"
            bg="#292d36"
            marginTop="280px"
            color="white"
            borderRadius="28px"
            position="absolute"
          >
            <Center paddingY={8}>
              <SimpleGrid columns={4} gridGap={5}>
                <PadGrid />
              </SimpleGrid>
            </Center>
          </Box>
        </Box>
      </Center>
    </CalculatorContext.Provider>
  );
};
