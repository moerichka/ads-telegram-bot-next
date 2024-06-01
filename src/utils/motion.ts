import { Variants } from "framer-motion";

export const modalFadeIn = (): Variants => {
  return {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
};

export const modalDrawer = (): Variants => {
  return {
    hidden: {
      translateY: "110%",
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "spring",
      },
    },
    visible: {
      translateY: "0%",
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "spring",
      },
    },
  };
};

interface MenuSlideParams {
  alignment?: "left" | "right";
}

export const menuSlide = ({
  alignment = "right",
}: MenuSlideParams): Variants => {
  if (alignment === "right") {
    return {
      hidden: {
        translateX: "100%",
        transition: {
          duration: 0.3,
        },
      },
      visible: {
        translateX: "0%",
        transition: {
          duration: 0.3,
        },
      },
    };
  }
  return {
    hidden: {
      translateX: "-100%",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      translateX: "0",
      transition: {
        duration: 0.3,
      },
    },
  };
};

export const selectorSlide = (): Variants => {
  return {
    hidden: {
      translateY: "-20%",
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      translateY: "0%",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
};

export const slideToRight = (): Variants => {
  return {
    hidden: {
      // x: "-100%",
      y: "200%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
      },
    },
  };
};
