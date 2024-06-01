import React from "react";
import Image from "next/image";

import s from "./PetTitle.module.scss";

interface PetTitleProps {
  element: string;
}

function PetTitle({ element }: PetTitleProps) {
  const src = `/images/pets/${element}Icon.png`;
  return (
    <div className={s.petTitle}>
      <div className={s.info}>
        <div className={s.petTitle__icon}>
          <Image src={src} fill alt="" style={{ objectFit: "contain" }} />
        </div>
        <div className={s.petTitle__name}>{element}</div>
      </div>
      <div className={s.shape} />
      <div className={s.shadow} />
    </div>
  );
}

export default PetTitle;
