import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";

import EggSection from "sections/EggSection";
import EggsSliderSection from "sections/EggsSliderSection";
import GameMechanicsSection from "sections/GameMechanicsSection";
import PartnersSection from "sections/PartnersSection";
import EggsTeamSection from "sections/EggsTeamSection";
import MetaTraceWorldSection from "sections/MetaTraceWorldSection";
import FAQSection from "sections/FAQSection";
import FooterSection from "sections/FooterSection";
import Preloader from "components/Preloader";
import Cookie from "components/Cookie";

import s from "styles/home.module.scss";

const EXPECTED_LOADED_IMAGES_COUNT = 2;

export default function Home() {
  const [loadedImagesCount, setLoadedImagesCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAllImagesLoaded = loadedImagesCount >= EXPECTED_LOADED_IMAGES_COUNT;
    if (isAllImagesLoaded) setLoading(false);
  }, [loadedImagesCount]);

  const incrementLoadedImagesCount = useCallback(
    () => setLoadedImagesCount((i) => i + 1),
    [],
  );

  return (
    <>
      <Head>
        <title>GameFI on a real world map</title>
      </Head>
      <div className={s.home}>
        <Preloader loading={loading} />
        <EggSection incrementLoadedImagesCount={incrementLoadedImagesCount} />
        <EggsSliderSection />
        <GameMechanicsSection />
        <PartnersSection />
        <EggsTeamSection />
        <MetaTraceWorldSection />
        <FAQSection />
        <FooterSection />
        <div className={s.cookieContainer}>
          <div className={s.cookie}>
            <Cookie />
          </div>
        </div>
      </div>
    </>
  );
}
