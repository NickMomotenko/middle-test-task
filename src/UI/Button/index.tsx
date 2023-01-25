import React from "react";

import { ButtonProps } from "./interface";

import "./styles.css";

export const Button: React.FC<ButtonProps> = ({ title = "", onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
};
