import React from "react";
import { Badge } from "../ui/Badge";
import Slider from "../Slider";
import Card from "./Card";
import styles from "./styles.module.css";

export default function CardGroup() {
  return (
    <div
      className={`flex flex-col md:flex-row gap-6 my-12 min-h-[384px] ${styles.cardGroup}`}
    >
      <div className="w-full">
        <Card
          heading="Get Rewarded for every £1 Spent"
          subheading="Choose between 2% cash back on every purchase, or 1 point for every
            £1 spent."
        >
          {Array.prototype.fill(10).map((value) => (
            <Notification key={value} />
          ))}
        </Card>
      </div>
      <div className="w-full">
        <Card
          heading="Partner Rewards"
          subheading="Check eligibility in less than 5 minutes and have your card the next day."
        >
          Test
        </Card>
      </div>
      <div className="w-full flex flex-col gap-6">
        <Card
          heading="Interchangeable Rewards"
          subheading="Transfer points to cash or vice-versa."
        >
          <Slider />
        </Card>
        <Card
          heading="Combine with Friends"
          subheading="Pool points towards shared experiences."
        >
          <div className="flex justify-between relative items-center h-full">
            <div className="h-[40px] aspect-square rounded-full dark-gradient-border"></div>

            <div className="z-10 text-gold-11  py-1 px-2 rounded-full dark-gradient-border font-medium text-[10px] backdrop-blur-[1px]">
              2500
            </div>
            <div className="z-10 text-gold-11 py-1 px-2 rounded-full dark-gradient-border-centre font-medium text-xs backdrop-blur-[1px]">
              Redeemed
            </div>
            <div className="z-10 text-gold-11 py-1 px-2 rounded-full dark-gradient-border-reverse font-medium text-[10px] backdrop-blur-[1px]">
              2500
            </div>
            <div className="h-[40px] aspect-square rounded-full dark-gradient-border"></div>
            <div className="absolute self-center h-[1.5px] w-full bg-gradient-to-r from-gold-7/0 via-gold-7 to-gold-7/0"></div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className="p-4 flex gap-4 bg-stone-800 border border-stone-300/10 rounded-lg text-sm">
      <div className="aspect-square h-10 bg-white rounded-full"></div>
      <div className="text-white">
        <div className="font-semibold">£13.57 at Sainsburys</div>
        <div className="text-stone-300">You just earnt 13 points.</div>
      </div>
    </div>
  );
}
