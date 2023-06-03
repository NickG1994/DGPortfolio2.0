export const animateSlideDown = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 2
  },
};
export const animateSlideSide = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 2,
    delay: 0.5,
  },
};
export const animateSlideLeft = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 2,
    delay: 0.5,
  },
};
export const animateSlideRight = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 2,
    delay: 0.5,
  },
};
export const animateOpacity = {
  initial: { opacity: 0, zIndex:-1 },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    zIndex: -1
  },
  transition: {
    duration:2,
  },
};
export const loadingVariant = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.65,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.75,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0,
    },
  },
};
export const textMovingRight = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.75,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};
export const modal = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};
export const svgAnimation = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1, stroke: "#ECB365" },
  exit: { pathLength: 0 },
  transition: {
    duration: 2,
    ease: "easeInOut",
    delay: 1.5,
  },
  strokeWidth: 1,
  fill: "none",
};
