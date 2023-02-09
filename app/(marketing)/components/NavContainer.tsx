"use client";

"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function NavContainer({ children }: { children: any }) {
  const { scrollY } = useScroll();
  const springScrollY = useSpring(scrollY, { stiffness: 90, damping: 20 });

  const backgroundColor = useTransform(
    springScrollY,
    [0, 100],
    ["rgb(219 219 219 / 0)", "rgb(219 219 219 / 0.3)"]
  );
  const width = useTransform(springScrollY, [0, 100], ["1048px", "576px"]);
  const blur = useTransform(
    springScrollY,
    [0, 25, 50, 75, 100],
    ["blur(0px)", "blur(1px)", "blur(5px)", "blur(6px)", "blur(7px)"]
  );
  const borderColor = useTransform(
    springScrollY,
    [0, 100],
    ["rgb(219 219 219/0)", "rgb(219 219 219/ 0.5)"]
  );

  return (
    <motion.header className="sticky top-0 z-40 h-24 flex items-center justify-center">
      <motion.div
        layout
        style={{
          backgroundColor,
          maxWidth: width,
          backdropFilter: blur,
          borderColor,
        }}
        className="relative  container flex items-center justify-between text-sm mx-auto p-2 border border-solid  rounded-full"
      >
        {children}
      </motion.div>
    </motion.header>
  );
}
