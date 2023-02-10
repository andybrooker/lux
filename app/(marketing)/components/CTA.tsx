"use client";
import styles from "./styles.module.css";

type Variant = "large" | "small";

function variants(type: Variant) {
  const sharedProperties =
    "font-medium text-gray-1 rounded-full whitespace-nowrap shadow-md hover:shadow-lg hover:scale-[1.02] transition active:scale-[0.99] focus-visible:outline-gold-10 focus-visible:outline focus-visible:outline-2 ";
  switch (type) {
    case "large":
      return (
        sharedProperties +
        " px-8 py-4 w-48 text-base self-center justify-center "
      );

    default:
      return sharedProperties + " px-4 py-2 ";
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
