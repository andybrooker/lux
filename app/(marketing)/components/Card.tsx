"use client";
import React, { CSSProperties, MutableRefObject } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import card from "../../../public/lux.png";

export default function Card() {
  const ref = React.useRef() as MutableRefObject<HTMLInputElement>;
  const [mousePos, setMousePos] = React.useState({
    rx: 10,
    ry: 10,
    mx: 50,
    my: 50,
  });
  const [active, setActive] = React.useState(false);

  const handleMove = (event: any) => {
    if (!ref.current) {
      return;
    }

    setActive(true);

    const rect = ref.current.getBoundingClientRect();

    const xCoord = event.clientX - rect.left;
    const yCoord = event.clientY - rect.top;

    const percentX = Math.round((100 / rect.width) * xCoord);
    const percentY = Math.round((100 / rect.height) * yCoord);

    // Calculate centre as negative coordinates around midpoint of card.
    const centerX = percentX - 50;
    const centerY = percentY - 50;
    // Calculate rotation bounds from centre
    const rotateX = Math.round(centerX / 3.5);
    const rotateY = Math.round(centerY / 2);

    setMousePos({
      rx: rotateX,
      ry: rotateY,
      mx: percentX,
      my: percentY,
    });
  };

  const handleLeave = () => {
    setActive(false);
    setMousePos({ rx: 10, ry: 10, mx: 50, my: 50 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0.95, filter: "blur(5px)" }}
      animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.3, duration: 0.9 }}
    >
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        ref={ref}
        className={"h-72 md:h-[360px] " + styles.card}
        animate={
          {
            "--r-x": mousePos.ry + "deg",
            "--r-y": -mousePos.rx + "deg",
          } as any
        }
        style={
          {
            "--m-x": mousePos.mx + "%",
            "--m-y": mousePos.my + "%",
          } as CSSProperties
        }
      >
        <div className={"shadow-2xl " + styles.displayCard}>
          <div>
            <Image className={styles.image} src={card} alt="Credit Card" />
          </div>
          <div className={styles.noise}></div>
          <div className={styles.glare}></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
