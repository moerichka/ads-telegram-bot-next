import React from "react";
import Image from "next/image";

import s from "./MainTitle.module.scss";

interface Props {
  className?: string;
}

function MainTitle({ className = "" }: Props) {
  return (
    <div className={`${s.mainTitle} ${className}`}>
      <div className={s.title}>Ordinals Egg</div>
      <div className={s.description}>by MetaTrace</div>
      <div className={s.image}>
        <Image
          src="/images/common/mainTitleBackground.svg"
          alt="main title background"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default MainTitle;
