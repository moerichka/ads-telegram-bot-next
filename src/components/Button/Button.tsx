import React from "react";

import s from "./Button.module.scss";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  classNameButton?: string;
  classNamePanel?: string;
  classNameShadow?: string;
  classNameContent?: string;
  colorVariant?: "whiteOrange" | "purpleWhite";
  children: React.ReactNode;
}

function Button({
  children,
  classNameButton = "",
  classNamePanel = "",
  classNameShadow = "",
  classNameContent = "",
  colorVariant = "whiteOrange",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`${s.button} ${classNameButton}`}
      type="button"
    >
      <div className={`${s.content} ${classNameContent} ${s[colorVariant]}`}>
        {children}
      </div>
      <div className={`${s.panel} ${classNamePanel} ${s[colorVariant]}`} />
      <div className={`${s.shadow} ${classNameShadow} ${s[colorVariant]}`} />
    </button>
  );
}

export default Button;
