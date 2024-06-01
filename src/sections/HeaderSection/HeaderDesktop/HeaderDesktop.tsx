import React from "react";
import Image from "next/image";

import { links } from "constants/links";

import s from "./HeaderDesktop.module.scss";

function HeaderDesktop() {
  return (
    <div className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__menu}>
          <div className={s.header__eggWrapper}>
            <Image src="/images/common/eggFooter.png" fill alt="" />
          </div>
          <div className={s.header__navLinks}>
            <a href={links.game_mechanics} className={s.navLink}>
              GAME MECHANICS
            </a>
            <a href={links.team} className={s.navLink}>
              EGGS TEAM
            </a>
            <a href={links.metatrace_world} className={s.navLink}>
              METATRACE WORLD
            </a>
            <a href={links.faq} className={s.navLink}>
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
    </div>
  );
}

export default HeaderDesktop;
