import { useEffect, useState } from "react";

type WindowSize = "initial" | "desktop" | "tablet" | "mobile";

const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>("initial");

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 520 && windowSize !== "desktop") {
        setWindowSize("desktop");
      }
      if (window.innerWidth <= 520 && windowSize !== "mobile") {
        setWindowSize("mobile");
      }
    };
    window.addEventListener("resize", onResize);

    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [windowSize]);

  return windowSize;
};

export default useGetWindowSize;
