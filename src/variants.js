import { delay } from "framer-motion";

export const navMenuVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.5,
      delay:0.2
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
  },
};
export const categoryVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (i)=>({
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeIn",
        delay: 0.5 * i,
      },
    }
  )
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeIn",
      delay: 0.09 * i,
    },
  }),
};
