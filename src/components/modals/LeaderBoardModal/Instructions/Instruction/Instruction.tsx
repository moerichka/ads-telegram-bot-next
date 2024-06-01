import React from "react";

import s from "./Instruction.module.scss";

interface Props {
  number: number;
  title: string;
  className?: string;
}

function Instruction({ number, title, className = "" }: Props) {
  return (
    <div className={`${s.instruction} ${className}`}>
      <div className={s.background} />
      <div className={s.backgroundShape} />
      <div className={s.number}>{number}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
}

export default Instruction;
