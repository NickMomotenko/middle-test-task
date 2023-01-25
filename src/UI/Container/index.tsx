import React from "react";

import "./styles.css";

import { ContainerProps } from "./interface";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};
