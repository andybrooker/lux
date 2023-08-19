"use client";
import { AnimationProps, motion } from "framer-motion";

export default function Animate({
  children,
  animate,
}: {
  children: React.ReactNode;
  animate?: AnimationProps["animate"];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(5px)" }}
      transition={{ delay: 0.1 }}
      animate={animate}
    >
      {children}
    </motion.div>
  );
}
