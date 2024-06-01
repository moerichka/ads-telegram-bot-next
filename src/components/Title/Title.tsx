import React from "react";
import Image from "next/image";

import s from "./Title.module.scss";

interface TitleProps {
  title: string;
  icon?: string;
  color: string;
  backgroundColor: string;
}

function Title({
  title,
  color,
  icon = undefined,
  backgroundColor,
}: TitleProps) {
  return (
    <div className={s.container}>
      <div className={s.title} style={{ color, backgroundColor }}>
        <div className={s.text}>
          {title.toUpperCase()}
          {icon && (
            <div className={s.iconWrapper}>
              <Image src={icon} alt="" fill />
            </div>
          )}
        </div>
      </div>
      <div className={s.shadow} />
    </div>
  );
}

export default Title;
