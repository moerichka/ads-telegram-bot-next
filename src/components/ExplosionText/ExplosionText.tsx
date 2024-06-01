import React from "react";
import Image from "next/image";

import s from "./ExplosionText.module.scss";

interface Props {
  children: React.ReactNode;
  classNameWrapper?: string;
}

function ExplosionText({ children, classNameWrapper = "" }: Props) {
  return (
    <div className={`${s.explosionText} ${classNameWrapper}`}>
      <span className={s.text}>{children}</span>
      <div className={s.image}>
        <Image
          src="/images/common/explosion.svg"
          alt="explosion"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default ExplosionText;
