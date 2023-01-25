import React from "react";

import { ButtonProps } from "./interface";

export const Button: React.FC<ButtonProps> = ({ title = "", onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
};
