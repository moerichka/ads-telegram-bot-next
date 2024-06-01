import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { modalFadeIn } from "utils/motion";

import s from "./ModalContainer.module.scss";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  backgroundUrl?: string;
  backgroundColor?: string;
  background?: React.ReactNode;
  close: () => void;
}

function ModalContainer({
  children,
  isOpen,
  backgroundUrl = undefined,
  backgroundColor = undefined,
  background = undefined,
  close,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className={s.modalContainer}>
          <motion.button
            variants={modalFadeIn()}
            initial="hidden"
            animate="visible"
            exit="hidden"
            type="button"
            onClick={close}
            className={s.background}
            style={{ backgroundColor }}
          >
            {backgroundUrl && (
              <Image
                src={backgroundUrl}
                alt="background"
                fill
                style={{ objectFit: "cover", zIndex: "100" }}
              />
            )}
            {background && background}
          </motion.button>
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}

export default ModalContainer;
