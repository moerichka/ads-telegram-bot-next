import React from "react";
import Title from "components/Title";
import Team from "components/Team";

import s from "./EggsTeamSection.module.scss";

function EggsTeamSection() {
  return (
    <div className={s.eggsTeam} id="team">
      <Title
        color="white"
        title="EGGS Team"
        backgroundColor="#8030E2"
        icon="/images/common/egg.png"
      />
      <Team />
    </div>
  );
}

export default EggsTeamSection;
