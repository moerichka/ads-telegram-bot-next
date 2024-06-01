import React from "react";
import Image from "next/image";

import s from "./WindowPart.module.scss";

function WindowPart() {
  return (
    <div className={s.windowPart}>
      <div className={s.title}>early access</div>
      <div className={s.content}>
        <div className={s.chat}>
          <Image
            src="/images/emailModal/chat.svg"
            alt="chat"
            fill
            style={{ objectFit: "contain", zIndex: 1 }}
          />
          <div className={s.text}>
            Become one of the first testers of MetaTrace beta!
          </div>
        </div>
        <div className={s.image}>
          <Image
            src="/images/emailModal/city.jpg"
            alt="city"
            fill
            style={{ objectFit: "cover", objectPosition: "100% 50%" }}
          />
        </div>
      </div>
      <div className={s.shadow} />
    </div>
  );
}

export default WindowPart;
