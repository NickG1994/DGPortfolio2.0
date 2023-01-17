export const textVariantOne = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
  exit: { opacity: 0 },
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
      duration: 0.65,
      delayChildren: 0.75,
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
