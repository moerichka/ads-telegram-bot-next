import React from "react";
import { teamData } from "constants/team";
import TeamItem from "./TeamItem";

import s from "./Team.module.scss";

function Team() {
  return (
    <div className={s.team}>
      {teamData.map((member) => (
        <TeamItem member={member} key={member.id} />
      ))}
    </div>
  );
}

export default Team;
