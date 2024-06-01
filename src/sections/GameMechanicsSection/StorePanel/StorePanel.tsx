import React from "react";
import Image from "next/image";

import s from "./StorePanel.module.scss";

type StoreName = "googlePlay" | "appStore";

interface Props {
  storeName: StoreName;
}

const getImageUrl = (storeName: StoreName) => {
  if (storeName === "appStore") return "/images/mechanicsSection/appStore.svg";
  return "/images/mechanicsSection/googlePlay.svg";
};

function StorePanel({ storeName }: Props) {
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <Image
          src={getImageUrl(storeName)}
          alt={storeName}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={s.dots}>
        <Image
          src="/images/mechanicsSection/dots.png"
          alt="dots"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={s.shape} />
      <div className={s.shadow} />
    </div>
  );
}

export default StorePanel;
