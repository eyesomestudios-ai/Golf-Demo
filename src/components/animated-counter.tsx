"use client";

import * as React from "react";
import {
  motion,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";

export function AnimatedCounter({
  value,
  formatter,
}: {
  value: number;
  formatter?: (n: number) => string;
}) {
  const spring = useSpring(0, { stiffness: 90, damping: 18 });
  const display = useTransform(spring, (v) =>
    formatter ? formatter(v) : String(Math.round(v))
  );
  const [text, setText] = React.useState("0");

  React.useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useMotionValueEvent(display, "change", (latest) => setText(latest));

  return <motion.span>{text}</motion.span>;
}
