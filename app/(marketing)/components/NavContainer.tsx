"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function NavContainer({ children }: { children: any }) {
  const { mask, background, backdropFilter, height } = useScrollStyle();

  return (
    <motion.header
      className="sticky top-0 z-40 flex items-center justify-center pb-4 px-8"
      style={{
        WebkitBackdropFilter: backdropFilter,
        backdropFilter,
        height,
        WebkitMask: mask,
        background,
      }}
    >
      <motion.div
        layout
        style={{
          maxWidth: 1048,
        }}
        className="relative  container flex items-center justify-between text-sm mx-auto p-2 rounded-full"
      >
        {children}
      </motion.div>
    </motion.header>
  );
}

const useScrollStyle = () => {
  const { scrollY } = useScroll();
  const springScrollY = useSpring(scrollY, { stiffness: 90, damping: 20 });
  const scrollInputRange = [0, 100];

  const height = useTransform(springScrollY, scrollInputRange, [
    "96px",
    "72px",
  ]);
  const backdropFilter = useTransform(
    springScrollY,
    [0, 25, 50, 75, 100],
    ["blur(0px)", "blur(1px)", "blur(5px)", "blur(6px)", "blur(7px)"]
  );

  const background = useTransform(springScrollY, scrollInputRange, [
    "linear-gradient(rgb(219, 219, 219 / 0.0), rgb(219, 219, 219 / 0.0)",
    "linear-gradient(rgb(219, 219, 219 / 0.3), rgb(219, 219, 219 / 0.0)",
  ]);

  const mask = useTransform(springScrollY, scrollInputRange, [
    "linear-gradient(transparent)",
    "linear-gradient(black 66%, transparent)",
  ]);

  return { mask, background, backdropFilter, height };
};
