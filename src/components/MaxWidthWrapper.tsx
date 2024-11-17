import React from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div className={`${className} min-h-screen max-w-screen-2xl mx-auto `}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
