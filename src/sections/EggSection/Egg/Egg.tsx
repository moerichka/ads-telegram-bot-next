/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import s from "./Egg.module.scss";

interface Props {
  classNameWrapper?: string;
  incrementLoadedImagesCount: () => void;
}

function Egg({ classNameWrapper = "", incrementLoadedImagesCount }: Props) {
  const [clickCount, setClickCount] = useState(0);
  const [click, setClick] = useState<{ x: number; y: number } | null>(null);
  const eggRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleClick = async (event: React.MouseEvent) => {
    if (eggRef.current) {
      const rect = eggRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setClick({ x, y });
      setClickCount((prev) => prev + 1);

      setTimeout(() => {
        setClick(null);
      }, 150);

      await controls.start({
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.3, repeat: 1 },
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (clickCount === 0) {
        controls.start({
          rotate: [0, 3, -3, 0, 3, -1, 0],
          transition: { duration: 0.5 },
        });
      }
    }, 5000);

    // Очистите таймер при размонтировании компонента
    return () => clearInterval(interval);
  }, [clickCount, controls]);

  return (
    <div className={`${s.egg} ${classNameWrapper}`}>
      <div className={s.imageWrapper} ref={eggRef}>
        <motion.div animate={controls} className={s.image}>
          <Image
            src="/images/eggSection/egg.png"
            alt="egg"
            fill
            style={{ objectFit: "contain" }}
            onLoad={incrementLoadedImagesCount}
          />
          {clickCount > 3 && (
            <Image
              src="/images/eggSection/fissure4.png"
              alt="fissure one"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          {clickCount > 4 && (
            <Image
              src="/images/eggSection/fissure5.png"
              alt="fissure two"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          {clickCount > 5 && (
            <Image
              src="/images/eggSection/fissure6.png"
              alt="fissure tree"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          {clickCount > 0 && (
            <Image
              src="/images/eggSection/fissure1.png"
              alt="fissure four"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          {clickCount > 1 && (
            <Image
              src="/images/eggSection/fissure2.png"
              alt="fissure five"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          {clickCount > 2 && (
            <Image
              src="/images/eggSection/fissure3.png"
              alt="fissure six"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
          {clickCount >= 1000 && clickCount < 10000 && (
            <div className={s.kCount}>
              <Image
                src="/images/eggSection/xyDpmPRW0qTk.svg"
                alt="1k"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          {clickCount >= 10000 && clickCount < 50000 && (
            <div className={s.kCount}>
              <Image
                src="/images/eggSection/bRfyfJJVVH0q.svg"
                alt="10k"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          {clickCount >= 50000 && clickCount < 100000 && (
            <div className={s.kCount}>
              <Image
                src="/images/eggSection/UqIkt0iHZm5v.svg"
                alt="50k"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          {clickCount >= 100000 && clickCount < 200000 && (
            <div className={s.kCount}>
              <Image
                src="/images/eggSection/zJgBqIGMgjgs.svg"
                alt="100k"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          {clickCount >= 200000 && clickCount < 500000 && (
            <div className={s.kCount}>
              <Image
                src="/images/eggSection/OOfubnUqtHx2.svg"
                alt="200k"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          {clickCount >= 500000 && clickCount < 1000000 && (
            <div className={s.kCount}>
              <Image
                src="/images/eggSection/tUrDXohJgz8Q.svg"
                alt="500k"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          {clickCount >= 1000000 && (
            <div className={s.kCount}>
              <Image
                src="/images/eggSection/ZSZS3xqP4M5f.svg"
                alt="1m"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          <button type="button" className={s.eggShape} onClick={handleClick} />
        </motion.div>
        {click && (
          <div
            className={s.crack}
            style={{
              position: "absolute",
              left: `${click.x}px`,
              top: `${click.y}px`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <Image
              src="/images/eggSection/crack.png"
              alt="crack"
              fill
              quality={100}
            />
          </div>
        )}
      </div>
      {clickCount > 0 && (
        <div className={s.counter}>
          <div className={s.value}>{clickCount}</div>
          <div className={s.counterBackground}>
            <Image
              src="/images/eggSection/counterBackground.svg"
              alt="counterBackground"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Egg;
