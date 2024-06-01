import React from "react";
import Image from "next/image";

import Button from "components/Button";
import WhatIsThis from "components/WhatIsThis";

import { links } from "constants/links";

import s from "./MetaTraceWorldSection.module.scss";

const data = {
  title: "welcome to metatrace world",
  description:
    "MetaTrace — is the world's first GameFi project with a Free to Play and Earn model on a real-world map.",
  color: "white",
};

function MetaTraceWorldSection() {
  return (
    <div className={s.metaWorld} id="metatrace_world">
      <div className={s.metaWorld__container}>
        <div className={s.metaWorld__content}>
          <WhatIsThis
            color={data.color}
            description={data.description}
            title={data.title}
            className={s.metaWorld__whatIsThis}
          />
          <Button colorVariant="purpleWhite" style={{ alignSelf: "start", left: "1rem" }}>
            CHECK WEBSITE
            <a href={links.mainSite} className="link">
              website
            </a>
          </Button>
          {/* <div className={s.metaWorld__button}>
            <Image src="/images/common/checkWebSite.png" alt="" fill />
            <div className={s.text}>CHECK WEBSITE</div>
          </div> */}
        </div>
        <div className={s.metaWorld__imageContainer}>
          <div className={s.metaWorld__image}>
            <Image src="/images/common/boy.png" alt="" fill />
            <div className={s.gmEggFAMWrapper}>
              <Image src="/images/common/gmEggFAM.png" alt="" fill />
              <div className={s.text_GM}>GM</div>
              <div className={s.text__eggWrapper}>
                <Image src="/images/common/egg.png" alt="" fill />
              </div>
              <div className={s.text_FAM}>FAM!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetaTraceWorldSection;
