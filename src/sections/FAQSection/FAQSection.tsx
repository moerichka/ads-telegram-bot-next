/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import Image from "next/image";

import { faq } from "constants/faq";

import DropDown from "./DropDown";

import s from "./FAQSection.module.scss";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const handleOpenQuestion = (index: number) => () => {
    if (index != undefined) {
      if (index === activeIndex) {
        setActiveIndex(undefined);
      } else {
        setActiveIndex(index);
      }
    }
  };

  return (
    <div className={s.faq} id="faq">
      <div className={s.faq__container}>
        <div className={s.faqWrapperIcon}>
          <Image
            src="/images/common/FAQ.png"
            fill
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={s.faqQuestions}>
          {faq.map((elem, index) => (
            <DropDown
              title={elem.title}
              content={elem.content}
              expand={handleOpenQuestion(index)}
              expanded={activeIndex === index}
              key={elem.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
