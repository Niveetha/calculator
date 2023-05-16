import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "../../contexts";
import { Button } from "./Button";

interface ActionPadProps {
  value: string;
  label: string;
  color?: string;
}

export const ActionPad = ({ value, label, color = "#fff" }: ActionPadProps) => {
  const {
    action: { action, highlight },
  } = useContext(CalculatorContext);
  const [bgColor, setBgColor] = useState<string>("#3D4350");

  useEffect(() => {
    if (action === value) {
      highlight ? setBgColor("#788298") : setBgColor("#3D4350");
    } else {
      setBgColor("#3D4350");
    }
  }, [highlight]);

  return <Button value={value} bgColor={bgColor} label={label} color={color} />;
};
