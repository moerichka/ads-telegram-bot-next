import { useEffect, useState } from "react";

interface Params {
  biggerThen: number;
}

const useWindowSizeIsBigger = ({ biggerThen }: Params) => {
  const [isBigger, setIsBigger] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (biggerThen < window.innerWidth && !isBigger) {
        setIsBigger(true);
      }
      if (biggerThen >= window.innerWidth && isBigger) {
        setIsBigger(false);
      }
    };
    window.addEventListener("resize", onResize);

    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isBigger, biggerThen]);

  return isBigger;
};

export default useWindowSizeIsBigger;
