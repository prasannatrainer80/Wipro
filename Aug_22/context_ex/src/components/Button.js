import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Button = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{backgroundColor:theme.background,color: theme.text}}>Hello</button>
  );
};

export default Button;
