import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { modalFadeIn } from "utils/motion";

import s from "./Preloader.module.scss";

interface PreloaderProps {
  loading: boolean;
}

function Preloader({ loading }: PreloaderProps) {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(async () => {
      await controls.start({
        rotate: [0, 10, -10, 0],
        transition: {
          duration: 0.4,
          repeat: 1,
          ease: "easeInOut",
          times: [0, 0.2, 0.7, 1],
        },
      });
    }, 400);
    if (!loading) clearInterval(interval);
    return () => clearInterval(interval!);
  }, [controls, loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          variants={modalFadeIn()}
          initial="visible"
          animate="visible"
          exit="hidden"
          className={s.preloader}
        >
          <motion.div variants={modalFadeIn()} animate={controls}>
            <div className={s.egg} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
