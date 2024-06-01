import React, { useEffect, useState } from "react";
import Image from "next/image";

import s from "./Cookie.module.scss";

function Cookie() {
  const [isCookieAgreed, setIsCookieAgreed] = useState(false);

  useEffect(() => {
    setIsCookieAgreed(Boolean(localStorage?.getItem("cookieAgreed")));
  }, []);

  if (isCookieAgreed) {
    return null;
  }

  const onCookiePress = () => {
    setIsCookieAgreed(true);
    localStorage.setItem("cookieAgreed", "true");
  };

  const close = () => {
    setIsCookieAgreed(true);
  };

  return (
    <div className={s.component}>
      <div className={s.content}>
        <div className={s.titleWrapper}>
          <div className={s.cookieWrapper}>
            <Image
              src="/images/cookies/cookie.png"
              alt="cookie"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={s.title}>Cookie?</div>
        </div>
        <div className={s.bottomPart}>
          <div className={s.description}>
            We use cookies to make your experience on this website better.
          </div>
          <button type="button" className={s.accept} onClick={onCookiePress}>
            <div className={s.acceptContent}>Accept</div>
            <div className={s.acceptShadow} />
            <div className={s.acceptBorder} />
            <div className={s.acceptShape} />
          </button>
        </div>
      </div>
      <button type="button" className={s.close} onClick={close}>
        <Image
          src="/images/leaderBoard/close.svg"
          alt="close"
          fill
          style={{ objectFit: "contain" }}
        />
      </button>
      <div className={s.dots}>
        <Image
          src="/images/mechanicsSection/dots.png"
          alt="dots"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={s.backgroundShadow} />
      <div className={s.backgroundShape} />
    </div>
  );
}

export default Cookie;
