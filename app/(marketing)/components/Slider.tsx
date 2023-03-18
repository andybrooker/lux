"use client";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export default function Slider() {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 150], [1, 0]);
  const inverseOpacity = useTransform(x, [-150, 0], [0, 1]);
  const rewardOpacity = useTransform(
    x,
    [-300, -150, 0, 150, 300],
    [1, 0, 0, 0, 1]
  );
  const background = useTransform(
    x,
    [-300, 0, 300],
    ["hsl(0, 0%, 13.6%)", "hsl(0, 0%, 95.1%)", "hsl(0, 0%, 13.6%)"]
  );

  const [value, setValue] = useState("");

  useMotionValueEvent(x, "change", (latest) => {
    if (latest > 0) {
      setValue("You will get 145 points.");
    } else if (latest < 0) {
      setValue("You will get £2.90 cash back.");
    }
  });

  return (
    <motion.div
      style={{ backgroundColor: background }}
      className="h-10 md:h-20 w-full rounded-full p-1 md:p-2 box-border my-4 shadow-track relative"
    >
      <motion.div
        ref={constraintsRef}
        className="w-full h-full flex items-center justify-center"
      >
        <motion.span
          style={{ opacity }}
          className="absolute left-4 md:left-8 text-xs md:text-base text-gray-11 [text-shadow:0_0_1px_rgba(0,0,0,0.25)]"
        >
          Cash back
        </motion.span>
        <motion.span
          style={{ opacity: inverseOpacity }}
          className="absolute right-4 md:right-8 text-xs md:text-base text-gray-11 [text-shadow:0_0_1px_rgba(0,0,0,0.25)]"
        >
          Rewards
        </motion.span>
        <motion.span
          style={{ opacity: rewardOpacity }}
          className="[text-shadow:0_0_1px_rgba(0,0,0,0.25)] font-medium text-xs md:text-base text-grayDark-12"
        >
          {value}
        </motion.span>
        <motion.div
          style={{ x: x }}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          className="aspect-square cursor-grab active:cursor-grabbing w-8 md:w-16 bg-white bg-gradient-to-b from-white via-white to-black/[0.08] rounded-full absolute left-1/2 -ml-4 md:-ml-8 shadow-slider"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
