import { ActionPad, BasicPad } from "../KeyPad";

export const PadGrid = () => {
  return (
    <>
      <BasicPad value="a" label="AC" color="#31eac9" />
      <BasicPad value="i" label="INV" color="#31eac9" />
      <BasicPad value="%" label="%" color="#31eac9" />
      <ActionPad value="/" label="/" color="#e86565" />
      <BasicPad value="7" label="7" />
      <BasicPad value="8" label="8" />
      <BasicPad value="9" label="9" />
      <ActionPad value="*" label="x" color="#e86565" />
      <BasicPad value="4" label="4" />
      <BasicPad value="5" label="5" />
      <BasicPad value="6" label="6" />
      <ActionPad value="-" label="-" color="#e86565" />
      <BasicPad value="1" label="1" />
      <BasicPad value="2" label="2" />
      <BasicPad value="3" label="3" />
      <ActionPad value="+" label="+" color="#e86565" />
      <BasicPad value="c" label="C" />
      <BasicPad value="0" label="0" />
      <BasicPad value="." label="." />
      <BasicPad value="=" label="=" color="#e86565" />
    </>
  );
};
