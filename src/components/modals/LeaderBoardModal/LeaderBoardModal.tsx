import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { modalDrawer } from "utils/motion";

import ExplosionText from "components/ExplosionText";
import ModalContainer from "../ModalContainer";
import Instructions from "./Instructions";
import Places from "./Places";

import s from "./LeaderBoardModal.module.scss";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const background = (
  <div className={s.background}>
    <Image
      src="/images/eggSection/dots.png"
      alt="background"
      fill
      style={{ objectFit: "cover" }}
      className={s.backgroundImage}
    />
  </div>
);

function LeaderBoardModal({ isOpen, close }: Props) {
  return (
    <ModalContainer isOpen={isOpen} close={close} background={background}>
      <div className={s.modal}>
        <motion.div
          variants={modalDrawer()}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={s.content}
        >
          <div className={s.backgroundShadow} />
          <div className={s.backgroundBorder} />
          <div className={s.backgroundShape} />
          <ExplosionText classNameWrapper={s.explosionTitle}>
            LeaderBoard
          </ExplosionText>
          <Instructions />
          <Places />
          <button type="button" className={s.close} onClick={close}>
            <Image
              src="/images/leaderBoard/close.svg"
              alt="close"
              fill
              style={{ objectFit: "contain" }}
            />
          </button>
        </motion.div>
      </div>
    </ModalContainer>
  );
}

export default LeaderBoardModal;
