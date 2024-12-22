import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ContentWrapper({
  children,
  className,
}: ContentWrapperProps) {
  return (
    <div
      className={`relative max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}
