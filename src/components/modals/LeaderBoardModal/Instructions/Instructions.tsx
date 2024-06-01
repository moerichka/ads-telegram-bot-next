import React from "react";
import Image from "next/image";

import Instruction from "./Instruction/Instruction";

import s from "./Instructions.module.scss";

function Instructions() {
  return (
    <div className={s.container}>
      <div className={s.backgroundShape} />
      <div className={s.background}>
        <div className={s.backgroundFill} />
        <div className={s.backgroundImage}>
          <Image
            src="/images/leaderBoard/bubbles.svg"
            alt="bubbles"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className={s.content}>
        <Instruction number={1} title="take a  screenshot" />
        <Instruction number={2} title="tweet your result" />
        <Instruction number={3} title="tag @ordinalsEgg & @ordinals_ceo" />
        <Instruction number={4} title="add #hatchlist" />
      </div>
    </div>
  );
}

export default Instructions;
