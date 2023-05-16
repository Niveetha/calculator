import { Button } from "./Button";

interface BasicPadProps {
  value: string;
  label: string;
  color?: string;
}

export const BasicPad = ({ value, label, color = "#fff" }: BasicPadProps) => {
  return <Button value={value} label={label} color={color} />;
};
