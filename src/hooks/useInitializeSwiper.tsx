import { useState } from "react";
import SwiperCore from "swiper";

const useInitializeSwiper = () => {
  const [swiper, setSwiper] = useState<SwiperCore | undefined>(undefined);

  const onPrev = () => {
    swiper?.slidePrev();
  };
  const onNext = () => {
    swiper?.slideNext();
  };
  const slideTo = (index: number) => {
    swiper?.slideTo(index);
  };

  return { swiper, initialize: setSwiper, onPrev, onNext, slideTo };
};

export default useInitializeSwiper;
