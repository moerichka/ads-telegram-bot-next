import React from "react";

import { leaderBoardPlaces } from "constants/leaderBoardPlaces";

import Place from "./Place";

import s from "./Places.module.scss";

function Places() {
  return (
    <div className={s.places}>
      {leaderBoardPlaces.map((elem) => (
        <Place
          key={elem.id}
          nickname={elem.nickname}
          place={elem.place}
          result={elem.result}
        />
      ))}
    </div>
  );
}

export default Places;
