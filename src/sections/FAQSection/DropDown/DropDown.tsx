import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Variants, motion } from "framer-motion";

import s from "./DropDown.module.scss";

interface Props {
  expanded: boolean;
  title: string;
  content: string;
  expand: () => void;
}

function DropDown({ expanded, title, content, expand }: Props) {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, [expanded]);

  const variants: Variants = {
    open: { y: 0, opacity: 1, height, transition: { type: "linear" } },
    closed: {
      y: "-4rem",
      opacity: 0,
      height: 0,
      transition: { type: "linear" },
    },
  };

  return (
    <div className={s.dropDown}>
      <button type="button" className={s.summery} onClick={expand}>
        <div className={s.faqQuestion}>
          <div className={s.faqQuestions__title}>{title}</div>
          <div className={`${s.openIcon} ${expanded ? s.active : ""}`}>
            <Image
              src="/images/common/open.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className={s.shadow} />
        <div className={s.border} />
      </button>
      <motion.div
        className={s.opened}
        initial="closed"
        animate={expanded ? "open" : "closed"}
        variants={variants}
      >
        <div className={s.opened__info} ref={contentRef}>
          <div
            className={s.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className={s.shadow} />
        </div>
      </motion.div>
    </div>
  );
}

export default DropDown;
