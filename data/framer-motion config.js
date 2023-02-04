export const textMovingDown = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export const textMovingDownDelayOne = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 1.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 1.5,
    },
  },
};

export const textMovingDownDelayTwo = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 3,
    },
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
  initial: { y: -50 },
  animate: {
    y: 0,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
  exit: { y: 0 },
};
