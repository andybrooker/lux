"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/Badge";

import CTA from "./CTA";
import InfoHover from "./InfoHover";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.3, duration: 0.9 }}
      className="flex grow-[2] flex-col gap-4 items-center"
    >
      <InfoHover>
        <Badge>Representative 64.0% APR (variable)</Badge>
      </InfoHover>
      <h1 className="tracking-tighter text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-[700] hero-gradient text-center w-full bg-gradient p-2 text-transparent text-opacity-0 bg-clip-text">
        One card to
        <br /> rule them all
      </h1>

      <h2 className="text-center md:text-xl mb-8">
        Luxury rewards, personal wealth advice, <br /> worldwide travel
        insurance and no FX fees.
      </h2>

      <CTA variant="hero">Apply Now</CTA>
    </motion.div>
  );
}
