import { Box } from "@chakra-ui/react";
import { formatNumber } from "../../utils/formatNumber";
import { NUM_KEYS } from "../../constants/key";

interface MainDisplayProps {
  mainDisplay: string;
}

export const MainDisplay = ({ mainDisplay }: MainDisplayProps): JSX.Element => {
  const MAX_NUMBER_OF_CHARACTERS = 9; // Excluding decimal
  const MAX_NUMBER_BEFORE_DISPLAY_ADJUSTMENT = 6;

  const currentDisplayLength = [...mainDisplay].filter((c) =>
    NUM_KEYS.includes(c)
  ).length;

  const currentDisplay =
    currentDisplayLength > MAX_NUMBER_OF_CHARACTERS
      ? mainDisplay.substring(
          0,
          MAX_NUMBER_OF_CHARACTERS + (mainDisplay.length - currentDisplayLength)
        )
      : mainDisplay;

  return (
    <Box
      h="100px"
      w="320px"
      bg="#22252d"
      color="#fff"
      paddingX={4}
      marginTop={
        currentDisplayLength <= MAX_NUMBER_BEFORE_DISPLAY_ADJUSTMENT
          ? 180
          : currentDisplayLength <= MAX_NUMBER_OF_CHARACTERS
          ? 180 +
            (currentDisplayLength - MAX_NUMBER_BEFORE_DISPLAY_ADJUSTMENT) * 8
          : 180 +
            (MAX_NUMBER_OF_CHARACTERS - MAX_NUMBER_BEFORE_DISPLAY_ADJUSTMENT) *
              8
      }
      position="absolute"
      textAlign="right"
      fontSize={
        currentDisplayLength <= MAX_NUMBER_BEFORE_DISPLAY_ADJUSTMENT
          ? 70
          : currentDisplayLength <= MAX_NUMBER_OF_CHARACTERS
          ? 70 -
            (currentDisplayLength - MAX_NUMBER_BEFORE_DISPLAY_ADJUSTMENT) * 8
          : 70 -
            (MAX_NUMBER_OF_CHARACTERS - MAX_NUMBER_BEFORE_DISPLAY_ADJUSTMENT) *
              8
      }
    >
      {Number(mainDisplay) > 999999999
        ? Number(mainDisplay).toExponential(0)
        : formatNumber(currentDisplay)}
    </Box>
  );
};
