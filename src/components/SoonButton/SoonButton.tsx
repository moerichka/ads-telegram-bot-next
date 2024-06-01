import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { modalFadeIn } from "utils/motion";

import s from "./SoonButton.module.scss";

interface Props {
  children: React.ReactNode;
  wrapperClassName?: string;
}

function SoonButton({ children, wrapperClassName = "" }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const buttonClicked = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 1200);
  };

  return (
    <button
      type="button"
      className={`${s.wrapper} ${wrapperClassName}`}
      onClick={buttonClicked}
    >
      {children}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            variants={modalFadeIn()}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={s.soon}
          >
            Soon
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default SoonButton;
