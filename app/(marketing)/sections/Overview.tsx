"use client";

import { motion, Variants } from "framer-motion";
import { fullConfig } from "@/lib/tailwind";
import Image from "next/image";
import preview from "@/public/app.png";

const boxShadow = fullConfig.theme?.boxShadow as { [key: string]: string };

const container: Variants = {
  offScreen: { opacity: 0 },
  onScreen: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const headingContainer: Variants = {
  offScreen: { scale: 0.97 },
  onScreen: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.6,
      staggerDirection: 1,
    },
  },
};

const item: Variants = {
  offScreen: { opacity: 0, translateY: -5 },
  onScreen: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.9 },
  },
};

const pictureItem: Variants = {
  offScreen: { opacity: 0 },
  onScreen: {
    opacity: 1,
    transition: { duration: 1.2, delay: 1, ease: "easeIn" },
  },
};

const copy = [
  {
    mainCopy: "One simple fee",
    supportingCopy:
      "Pay £20/month or £200/year. Cancel anytime. Say goodbye to over-the-limit, foreign exchange and late payment fees.",
  },
  {
    mainCopy: "Seamless onboarding",
    supportingCopy:
      "See if you're eligible. Connect your bank account. Confirm your identity. Easy as pie.",
  },
  {
    mainCopy: "Interest, in your interest",
    supportingCopy:
      "We tell you in real time how much interest you'll end up paying, based on the amount you plan on paying back.",
  },
];

export default function OverviewSection() {
  return (
    <motion.div
      initial="offScreen"
      whileInView="onScreen"
      variants={headingContainer}
      viewport={{ once: true }}
      className="w-full text-gray-12 flex flex-col justify-center md:p-8 md:pt-16 px-8 lg:px-20 xl:px-32"
    >
      <motion.div
        variants={item}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-0 md:px-6"
      >
        <h2 className="tracking-tight text-3xl md:text-4xl text-center mb-2 pb-2 2xl:text-7xl font-semibold bg-gradient-to-r from-gold-9 via-gold-7 to-gold-8 w-full text-transparent text-opacity-0 bg-clip-text">
          <span>Rewards.</span> <span> Travel.</span>{" "}
          <span className="whitespace-nowrap">Member Spaces.</span>{" "}
          <span className="whitespace-nowrap">Wealth Management. </span>
          <br />
        </h2>
        <h3 className="text-center text-2xl font-medium bg-gradient-to-r from-gray-11 via-gray-8 to-gray-10 text-transparent text-opacity-0 bg-clip-text">
          It&apos;s time to reimagine the credit card experience.
        </h3>
      </motion.div>
      <motion.div
        variants={container}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-4 my-6"
      >
        {copy.map(({ mainCopy, supportingCopy }) => (
          <motion.div className="flex-1" variants={item} key={mainCopy}>
            <OverviewSectionInfo
              mainCopy={mainCopy}
              supportingCopy={supportingCopy}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={pictureItem} viewport={{ once: true }}>
        <Image
          src={preview}
          alt="A product demo, showing the Lux credit card, the home screen of the phone app and the web app home page. The top half of the phone screen shows the card and its details such as the card number. You can see your credit card balance as well as when the payment is due, with a scrollable list of all your transactions."
        />
      </motion.div>
    </motion.div>
  );
}

function OverviewSectionInfo({
  mainCopy,
  supportingCopy,
}: {
  mainCopy: string;
  supportingCopy: string;
}) {
  return (
    <DisplayCard>
      <DisplayCardMainCopy>{mainCopy}</DisplayCardMainCopy>
      <DisplayCardSupportingCopy>{supportingCopy}</DisplayCardSupportingCopy>
    </DisplayCard>
  );
}

function DisplayCard({ children }: { children: any }) {
  return <div className="flex-1 p-0 md:p-6">{children}</div>;
}

function DisplayCardMainCopy({ children }: { children: any }) {
  return (
    <div className="font-semibold text-sm md:text-base text-gray-12">
      {children}
    </div>
  );
}

function DisplayCardSupportingCopy({ children }: { children: any }) {
  return <div className="text-gray-11 text-sm md:text-md">{children}</div>;
}
