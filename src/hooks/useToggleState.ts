import { useState } from "react";

export const useToggleState = (initialValue = false): [boolean, () => void] => {
  const [state, setState] = useState(initialValue);

  const toggleState = () => {
    setState((state) => setState(!state));
  };

  return [state, toggleState];
};
