import React, { useState } from "react";
import Image from "next/image";

import Button from "components/Button";
import ExplosionText from "components/ExplosionText";
import LeaderBoardModal from "components/modals/LeaderBoardModal";
import EmailModal from "components/modals/EmailModal";
import HeaderSection from "sections/HeaderSection";
import MainTitle from "./MainTitle";
import Egg from "./Egg";

import s from "./EggSection.module.scss";

interface Props {
  incrementLoadedImagesCount: () => void;
}

function EggSection({ incrementLoadedImagesCount }: Props) {
  const [leaderBoardIsOpen, setLeaderBoardIsOpen] = useState(false);
  const [emailIsOpen, setEmailIsOpen] = useState(false);

  const openEmail = () => {
    setEmailIsOpen(true);
  };
  const closeEmail = () => {
    setEmailIsOpen(false);
  };
  const openLeaderBoard = () => {
    setLeaderBoardIsOpen(true);
  };
  const closeLeaderBoard = () => {
    setLeaderBoardIsOpen(false);
  };

  return (
    <div className={s.section}>
      <div className={s.container}>
        <div className={s.pseudoEgg}>
          <div className={s.beams}>
            <Image
              src="/images/eggSection/beams.svg"
              alt="beams"
              fill
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>
        <div className={s.dots}>
          <Image
            src="/images/eggSection/dots.png"
            alt="dots"
            fill
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            onLoad={incrementLoadedImagesCount}
          />
        </div>
        <div className={s.sharps}>
          <Image
            src="/images/eggSection/sharps.svg"
            alt="sharps"
            fill
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
        </div>
        <div className={s.sharpsTablet}>
          <Image
            src="/images/eggSection/sharpsTablet.svg"
            alt="sharps"
            fill
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
        </div>
        <HeaderSection />
        <MainTitle className={s.mainTitle} />
        <Button classNameButton={s.button} onClick={openEmail}>
          Apply for Beta
        </Button>
        <div className={s.egg}>
          <Egg incrementLoadedImagesCount={incrementLoadedImagesCount} />
        </div>
        <button
          type="button"
          className={s.leaderBoard}
          onClick={openLeaderBoard}
        >
          <ExplosionText classNameWrapper={s.leaderBoardText}>
            leaderBoard
          </ExplosionText>
        </button>
      </div>
      <LeaderBoardModal isOpen={leaderBoardIsOpen} close={closeLeaderBoard} />
      <EmailModal isOpen={emailIsOpen} close={closeEmail} />
    </div>
  );
}

export default EggSection;
