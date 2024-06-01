import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import Image from "next/image";

import { pets } from "constants/pets";
import useInitializeSwiper from "hooks/useInitializeSwiper";

import PetTitle from "./PetTitle";

import s from "./PetsSwiper.module.scss";

function PetsSwiper() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const { initialize, onNext, onPrev } = useInitializeSwiper();

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  return (
    <div className={s.slider}>
      <Swiper
        className={s.swiper}
        onSwiper={(swiper) => initialize(swiper)}
        onSlideChange={handleSlideChange}
        effect="creative"
        loop
        initialSlide={3}
        loopedSlides={2}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: ["-60%", 0, -500],
          },
          next: {
            shadow: false,
            translate: ["60%", 0, -500],
          },
        }}
        modules={[EffectCreative]}
      >
        {pets.map((pet, index) => (
          <SwiperSlide className={s.slider__item} key={pet.id}>
            <div className={s.slider__itemImage}>
              <Image
                src={pet.image}
                alt={pet.element}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              className={`${s.shadow} ${
                index === activeSlideIndex ? s.active : ""
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.controlPanel}>
        <button type="button" className={s.slider__prev} onClick={onPrev}>
          <div className={s.prev} />
          <div className={s.shadow} />
        </button>
        <PetTitle element={pets[activeSlideIndex].element} />
        <button type="button" className={s.slider__next} onClick={onNext}>
          <div className={s.next} />
          <div className={s.shadow} />
        </button>
      </div>
    </div>
  );
}

export default PetsSwiper;
