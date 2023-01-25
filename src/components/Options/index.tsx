import React, { useState } from "react";

import "./styles.css";

import { OptionsProps } from "./interface";

export const Options: React.FC<OptionsProps> = ({
  list,
  activeOption,
  changeActiveOption,
}) => {
  return (
    <div className="options">
      <ul className="options__list">
        {list.map((title, indx) => {
          return (
            <li
              key={indx}
              className={
                title === activeOption
                  ? "options__item active"
                  : "options__item"
              }
            >
              <button
                className="options__button"
                onClick={() => changeActiveOption(title)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
