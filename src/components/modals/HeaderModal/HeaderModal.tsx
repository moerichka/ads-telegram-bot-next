import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { modalFadeIn } from "utils/motion";
import { links } from "constants/links";

import ModalContainer from "../ModalContainer";

import s from "./HeaderModal.module.scss";

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

interface Props {
  isOpen: boolean;
  close: () => void;
}

function HeaderModal({ isOpen, close }: Props) {
  return (
    <ModalContainer isOpen={isOpen} background={background} close={close}>
      <div className={s.modal}>
        <motion.div
          variants={modalFadeIn()}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={s.content}
        >
          <div className={s.header__container}>
            <div className={s.header__menu}>
              <div className={s.header__eggWrapper}>
                <Image src="/images/common/eggFooter.png" fill alt="" />
              </div>
              <div className={s.header__navLinks}>
                <a
                  href={links.game_mechanics}
                  className={s.navLink}
                  onClick={close}
                >
                  GAME MECHANICS
                </a>
                <a href={links.team} className={s.navLink} onClick={close}>
                  EGGS TEAM
                </a>
                <a
                  href={links.metatrace_world}
                  className={s.navLink}
                  onClick={close}
                >
                  METATRACE WORLD
                </a>
                <a href={links.faq} className={s.navLink} onClick={close}>
                  FAQ
                </a>
              </div>
              <div className={s.header__socialNetworks}>
                <div className={s.header__socialNetworkWrapper}>
                  <Image src="/images/common/twitter.png" fill alt="" />
                  <a href={links.twitter} className="link">
                    twitter
                  </a>
                </div>
                <div className={s.header__socialNetworkWrapper}>
                  <Image src="/images/common/discord.png" fill alt="" />
                  <a href={links.discord} className="link">
                    discord
                  </a>
                </div>
              </div>
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
          <div className={s.backgroundShadow} />
          <div className={s.backgroundBorder} />
          <div className={s.backgroundShape} />
        </motion.div>
      </div>
    </ModalContainer>
  );
}

export default HeaderModal;
