"use client";
import styles from "./styles.module.css";

type Variant = "large" | "small";

function variants(type: Variant) {
  const sharedProperties =
    "font-medium bg-gold-8 text-gold-11 rounded-full whitespace-nowrap shadow-sm hover:shadow-md hover:scale-[1.02] transition active:scale-[0.99] focus-visible:outline-gold-10 focus-visible:outline focus-visible:outline-2 ";
  switch (type) {
    case "large":
      return sharedProperties + " px-6 py-3 self-center ";

    default:
      return sharedProperties + " px-3 py-1 ";
  }
}

export default function CTA({
  children,
  type,
}: {
  children: any;
  type: Variant;
}) {
  const handleSubmit = () => {
    alert("Working!");
  };

  return (
    <button onClick={handleSubmit} className={variants(type) + styles.activity}>
      {children}
    </button>
  );
}
