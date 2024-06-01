import React, { useEffect, useRef, useState } from "react";
import WhatIsThis from "components/WhatIsThis";
import Image from "next/image";

import s from "./GameMechanicsSection.module.scss";
import StorePanel from "./StorePanel";

const data = {
  title: "cypets game mechanics",
  description: `
    ‒ Train and upgrade your Cypets<br>
    ‒ Trade your Cypets on various marketplaces<br>
    ‒ Engage in thrilling PVP/PVE battles<br>
    ‒ Compete in MetaTrace tournaments<br>
    ‒ Aim to become the greatest MetaTrace master`,
  color: "#FFFFFF",
};

function GameMechanicsSection() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      setVideoReady(true);
    }
  }, [videoRef, videoReady]);

  useEffect(() => {
    if (videoReady) {
      setTimeout(() => {
        if (videoRef?.current?.paused) videoRef?.current?.play();
      }, 1);
    }
  }, [videoReady]);

  return (
    <div className={s.gameMechanicsSection} id="game_mechanics">
      <div className={s.gameMechanicsSection__container}>
        <div className={s.gameMechanicsSection__info}>
          <WhatIsThis
            color={data.color}
            description={data.description}
            title={data.title}
          />
          <div className={s.gameMechanicsSection__platforms}>
            <StorePanel storeName="googlePlay" />
            <StorePanel storeName="appStore" />
          </div>
        </div>
        <div className={s.gameMechanicsSection__navigator}>
          <div className={s.videoWrapper}>
            <video
              ref={videoRef}
              className={s.video}
              autoPlay
              playsInline
              loop
              muted
            >
              <source src="/videos/gameplay/gameplay.mp4" />
            </video>
            <div className={s.shadow} />
          </div>
          <div className={s.imageWrapperСlue}>
            <Image
              src="/images/mechanicsSection/explosion.png"
              fill
              alt=""
              style={{ objectFit: "contain" }}
            />
            <div className={s.content}>
              <div className={s.title}>UPGRADE, TRADE, PLAY PVP/PVE</div>
              <div className={s.description}>
                Be the very best in the MetaTrace World!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameMechanicsSection;
