import React from "react";

import s from "./Checkbox.module.scss";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  className?: string;
  onChange: () => void;
}

function Checkbox({
  label,
  checked,
  className = "",
  onChange,
  ...props
}: CheckboxProps) {
  return (
    <label className={s.checkboxWrapper}>
      <div className={s.innerWrapper}>
        <input
          {...props}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`${s.checkbox} ${className} ${checked ? s.checked : ""}`}
        />
        <div className={s.shape} />
        <div className={s.shadow} />
      </div>
      <span className={s.label} dangerouslySetInnerHTML={{ __html: label }} />
    </label>
  );
}

export default Checkbox;
