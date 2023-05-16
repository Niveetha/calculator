export const runCalculation = (
  num1: number,
  num2: number,
  arithmaticKey: string | null
): number => {
  if (!arithmaticKey) return 0;
  if (arithmaticKey === "+") return num1 + num2;
  else if (arithmaticKey === "-") return num1 - num2;
  else if (arithmaticKey === "*") return num1 * num2;
  else if (arithmaticKey === "/") return num1 / num2;
  else return 0;
};
