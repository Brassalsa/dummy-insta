import React, { ReactNode } from "react";

function ShowOnWide({
  text,
  className = "text-base",
  children,
}: {
  text?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <span className={"lg:inline hidden " + className}>{text || children}</span>
  );
}

export default ShowOnWide;
