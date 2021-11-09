import { useDialogContext } from "./DialogStore";

export const Button = () => {
  const { setState } = useDialogContext();

  const handleClick = () => {
    setState(true);
  };

  return <button onClick={handleClick}>Open Dialog</button>;
};
