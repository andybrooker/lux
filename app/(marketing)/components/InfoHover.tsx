"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import React from "react";

const TooltipDemo = ({ children }: { children: any }) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger className="select-none" asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            collisionPadding={{ top: 100 }}
            className="max-w-sm text-xs text-center bg-gray-7/35 text-gold-11 gradient-border p-2 rounded-lg shadow-md"
            sideOffset={5}
          >
            <span>
              The Representative APR, or Annual Percentage Rate, is an interest
              rate that is advertised by lenders (us!) to give you an idea of
              what you might pay in interest on our credit card. It&apos;s
              designed to be a helpful guide to help you understand the costs of
              borrowing. <br />
              <br /> It&apos;s important to keep in mind that the Representative
              APR is just an estimate and your actual interest rate may be
              different based on factors such as your credit history, income,
              and other personal circumstances.
            </span>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipDemo;
