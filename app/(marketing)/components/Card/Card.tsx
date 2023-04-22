"use client";
import React, { CSSProperties, MutableRefObject } from "react";
import styles from "./styles.module.css";

type CardProps = {
  children: React.ReactNode;
  heading: string;
  subheading: string;
};

export default function Card({ children, heading, subheading }: CardProps) {
  const ref = React.useRef() as MutableRefObject<HTMLInputElement>;
  const [mouseRotation, setMouseRotation] = React.useState({
    rx: 0,
    ry: 0,
  });
  const [mousePos, setMousePos] = React.useState({
    cx: 0,
    cy: 0,
    mx: 50,
    my: 50,
  });
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const updateMousePosition = (ev: any) => {
      const rect = ref.current.getBoundingClientRect();

      const xCoord = ev.clientX - rect.left;
      const yCoord = ev.clientY - rect.top;

      const percentX = Math.round((100 / rect.width) * xCoord);
      const percentY = Math.round((100 / rect.height) * yCoord);

      setMousePos({
        cx: xCoord,
        cy: yCoord,
        mx: percentX,
        my: percentY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mousePos]);

  const handleMouseMove = (event: any) => {
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
    const rotateX = Math.round(centerX / 14);
    const rotateY = Math.round(centerY / 8);

    setMouseRotation({
      rx: rotateX,
      ry: rotateY,
    });
  };

  const handleLeave = () => {
    setActive(false);
    setMouseRotation({
      rx: 0,
      ry: 0,
    });
  };

  return (
    <div
      onPointerMove={handleMouseMove}
      onPointerLeave={handleLeave}
      ref={ref}
      className={styles.card + " " + "w-full h-full"}
      style={
        {
          "--c-x": mousePos.cx + "px",
          "--c-y": mousePos.cy + "px",
          "--r-y": -mouseRotation.rx + "deg",
          "--r-x": mouseRotation.ry + "deg",
          "--m-x": mousePos.mx + "%",
          "--m-y": mousePos.my + "%",
          "--duration": active ? "0.1s" : "0.3s",
        } as CSSProperties
      }
    >
      <div className={styles.displayCard + " " + "flex flex-col"}>
        <div className="flex-1 z-50 p-3">{children}</div>
        <div className="z-50 px-3 pb-3">
          <div className="text-grayDark-12 font-[550]">{heading}</div>
          <div className="text-grayDark-11 text-sm">{subheading}</div>
        </div>
      </div>
      <div className={styles.glare} />
    </div>
  );
}
