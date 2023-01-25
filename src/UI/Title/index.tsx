import React from "react";

import { TitleProps } from "./interface";

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="title">{title}</h1>;
};
