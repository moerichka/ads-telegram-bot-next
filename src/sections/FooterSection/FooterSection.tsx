import React from "react";
import Image from "next/image";

import { links } from "constants/links";

import s from "./FooterSection.module.scss";

function FooterSection() {
  return (
    <div className={s.footerSection}>
      <div className={s.footerSection__container}>
        <div className={s.footerSection__menu}>
          <div className={s.footerSection__eggWrapper}>
            <Image src="/images/common/eggFooter.png" fill alt="" />
          </div>
          <div className={s.footerSection__navLinks}>
            <a href={links.cookiePolicy} className={s.navLink}>
              Cookie Policy
            </a>
            <a href={links.privacyPolicy} className={s.navLink}>
              Privacy Policy
            </a>
            <a href={links.termsOfUse} className={s.navLink}>
              Terms of use
            </a>
          </div>
          <div className={s.footerSection__socialNetworks}>
            <div className={s.footerSection__socialNetworkWrapper}>
              <Image src="/images/common/twitter.png" fill alt="" />
              <a href={links.twitter} className="link">
                twitter
              </a>
            </div>
            <div className={s.footerSection__socialNetworkWrapper}>
              <Image src="/images/common/discord.png" fill alt="" />
              <a href={links.discord} className="link">
                discord
              </a>
            </div>
          </div>
        </div>
        <p className={s.copyright}>
          © 2023 — Copyright by MIXR Lab. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default FooterSection;
