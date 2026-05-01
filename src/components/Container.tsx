import { clsx } from "clsx";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizeClass = {
  narrow: "max-w-2xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
} as const;

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 sm:px-8",
        sizeClass[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
