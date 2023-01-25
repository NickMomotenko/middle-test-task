import React from "react";

import { ListProps } from "./interface";

export const List: React.FC<ListProps> = ({ children }) => {
  return <ul className="list">{children}</ul>;
};
