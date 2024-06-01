import React from "react";
import { motion } from "framer-motion";

import { slideToRight } from "utils/motion";

import s from "./Place.module.scss";

const getPlaceClassName = (place: number) => {
  if (place === 1) {
    return s.first;
  }
  if (place === 2) {
    return s.second;
  }
  if (place === 3) {
    return s.third;
  }
  return "";
};

interface Props {
  place: number;
  nickname: string;
  result: number | string;
}

function Place({ place, nickname, result }: Props) {
  if (place === 1 || place === 2 || place === 3) {
    return (
      <motion.div
        variants={slideToRight()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${s.place} ${getPlaceClassName(place)}`}
      >
        <div className={s.background} />
        <div className={s.backgroundShape} />
        <div className={s.leftPart}>
          <div className={s.number}>{place}</div>
          <div className={s.nickname}>{nickname}</div>
        </div>
        <div className={s.result}>{result}</div>
      </motion.div>
    );
  }
  return (
    <motion.div
      variants={slideToRight()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={s.place}
    >
      <div className={s.background} />
      <div className={s.backgroundShape} />
      <div className={s.leftPart}>
        <div className={s.number}>{place}</div>
        <div className={s.nickname}>{nickname}</div>
      </div>
      <div className={s.result}>{result}</div>
    </motion.div>
  );
}

export default Place;
