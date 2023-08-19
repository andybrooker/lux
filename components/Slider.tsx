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

  const [value, setValue] = useState("");

  useMotionValueEvent(x, "change", (latest) => {
    if (latest > 0) {
      setValue("You will get 145 points.");
    } else if (latest < 0) {
      setValue("You will get £2.90 cash back.");
    }
  });

  return (
    <motion.div className="drop-shadow-glow h-12 w-full rounded-full bg-grayDark-4 p-1 box-border my-4 relative z-50 shadow-[0_1px_0_3px_#00000040,0_0_0_3px_#B8A38380,inset_0_0_8px_0_#00000080]">
      <motion.div
        ref={constraintsRef}
        className="w-full h-full flex items-center justify-center relative"
      >
        <motion.span
          style={{ opacity }}
          className="absolute left-4 text-xs  text-gray-11 [text-shadow:0_0_1px_rgba(0,0,0,0.25)]"
        >
          £133
        </motion.span>
        <motion.span
          style={{ opacity: inverseOpacity }}
          className="absolute right-4 text-xs  text-gray-11 [text-shadow:0_0_1px_rgba(0,0,0,0.25)]"
        >
          500 Points
        </motion.span>

        <motion.div
          style={{ x: x }}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          className="aspect-square z-[9999] cursor-grab active:cursor-grabbing h-full bg-white bg-gradient-to-b from-white via-white to-black/[0.4] rounded-full absolute left-1/2 -ml-6 shadow-slider"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
