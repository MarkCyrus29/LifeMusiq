import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
