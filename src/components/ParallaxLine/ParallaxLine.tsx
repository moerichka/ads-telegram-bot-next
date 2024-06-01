import { useMemo } from "react";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

import { partners, partners2, partners3, partners4 } from "constants/partners";
// , partners3, partners4

import s from "./ParallaxLine.module.scss";

interface Props {
  direction?: "forward" | "reverse";
  mobile?: boolean;
  variant?: number;
}

function ParallaxLine({
  direction = "forward",
  mobile = false,
  variant = 1,
}: Props) {
  const marqueeVariants: Variants = {
    animate: {
      transform:
        direction === "forward" ? "translateX(-100.9%)" : "translateX(0.9%)",
      transition: {
        transform: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  const row = useMemo(
    () => (
      <>
        {partners.map((elem) => (
          <div className={`${s.media} ${s[elem.name]}`} key={elem.id}>
            <Image
              src={elem.logo}
              alt={elem.name}
              fill
              style={{ objectFit: "contain" }}
              quality={100}
              loading="eager"
            />
          </div>
        ))}
      </>
    ),
    [],
  );

  const row2 = useMemo(
    () => (
      <>
        {partners2.map((elem) => (
          <div className={`${s.media} ${s[elem.name]}`} key={elem.id}>
            <Image
              src={elem.logo}
              alt={elem.name}
              fill
              style={{ objectFit: "contain" }}
              quality={100}
              loading="eager"
            />
          </div>
        ))}
      </>
    ),
    [],
  );

  const row3 = useMemo(
    () => (
      <>
        {partners3.map((elem) => (
          <div className={`${s.media} ${s[elem.name]}`} key={elem.id}>
            <Image
              src={elem.logo}
              alt={elem.name}
              fill
              style={{ objectFit: "contain" }}
              quality={100}
              loading="eager"
            />
          </div>
        ))}
      </>
    ),
    [],
  );

  const row4 = useMemo(
    () => (
      <>
        {partners4.map((elem) => (
          <div className={`${s.media} ${s[elem.name]}`} key={elem.id}>
            <Image
              src={elem.logo}
              alt={elem.name}
              fill
              style={{ objectFit: "contain" }}
              quality={100}
              loading="eager"
            />
          </div>
        ))}
      </>
    ),
    [],
  );

  return (
    <div className={s.marquee}>
      <motion.div
        className={`${s.track} ${s[direction]}`}
        variants={marqueeVariants}
        animate="animate"
        initial={{
          transform: "translateX(-50%)",
        }}
      >
        {variant === 1 && (
          <>
            {row}
            {row}
          </>
        )}
        {variant === 2 && (
          <>
            {row2}
            {row2}
          </>
        )}
        {variant === 3 && (
          <>
            {row3}
            {row3}
          </>
        )}
        {variant === 4 && (
          <>
            {row4}
            {row4}
          </>
        )}
        {/* {mobile ? (
          <>
            {row}
            {row2}
          </>
        ) : (
          <>
            {row3}
            {row4}
          </>
        )} */}
      </motion.div>
    </div>
  );
}

export default ParallaxLine;
