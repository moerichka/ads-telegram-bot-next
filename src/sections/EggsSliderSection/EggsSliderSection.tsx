import React from "react";
import PetsSwiper from "components/PetsSwiper";
import WhatIsThis from "components/WhatIsThis";
import Image from "next/image";

import s from "./EggsSliderSection.module.scss";

const data = {
  title: "What stands behind the egg?",
  description:
    "Each egg is an incubator for future Cypets. Cypets are entities from the world of WEB3, inspired by NFT collections, blockchains, cryptocurrencies, trends, popular personalities, or even memes.",
  color: "#7121D3",
};

function EggsSliderSection() {
  return (
    <div className={s.eggsSliderSection}>
      <PetsSwiper />
      <WhatIsThis
        color={data.color}
        description={data.description}
        title={data.title}
        className={s.eggsSliderSection__whatIsThis}
      />
    </div>
  );
}

export default EggsSliderSection;
