import { createContext } from "react";
import { ActionState } from "../types";

export type Calculator = {
  action: ActionState;
  calculate: (string: string) => void;
};

export const CalculatorContext = createContext<Calculator>({
  action: {
    action: null,
    highlight: false,
  },
  calculate: () => {},
});
