"use client";
import { Button } from "./ui/Button";
import { PropsWithChildren } from "react";

type CTAProps = {
  variant: "hero" | "header";
};

export default function CTA({
  variant,
  children,
}: PropsWithChildren<CTAProps>) {
  if (variant === "hero") {
    return <Button size="xl">{children}</Button>;
  }

  return (
    <Button variant="outline" size="default">
      {children}
    </Button>
  );
}
