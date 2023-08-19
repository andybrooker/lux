"use client";

import { motion } from "framer-motion";

export default function Press({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 md:mt-24">
      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.6, duration: 1 }}
        className="w-full text-center text-gray-11 text-xs uppercase font-semibold"
      >
        As Featured By
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex flex-col sm:flex-row my-12 gap-8 md:gap-16 justify-around text-gray-11 items-center max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </div>
  );
}
