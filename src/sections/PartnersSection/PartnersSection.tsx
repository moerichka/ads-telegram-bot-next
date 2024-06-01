import React, { useEffect, useState } from "react";
import Title from "components/Title";
import ParallaxLine from "components/ParallaxLine";
// import Image from "next/image";

import s from "./PartnersSection.module.scss";

function PartnersSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={s.partnersSection}>
      <Title color="white" title="partners" backgroundColor="#8030E2" />
      <div className={s.lines}>
        <ParallaxLine variant={1} />
        <ParallaxLine direction="reverse" variant={2} />
        {isMobile && (
          <>
            <ParallaxLine mobile variant={3} />
            <ParallaxLine direction="reverse" mobile variant={4} />
          </>
        )}
      </div>
      <div className={s.effect} />
    </div>
  );
}

export default PartnersSection;
