import React, { ReactNode } from "react";

type FullScreenCardProps = {
  children: ReactNode;
};

export default function FullScreenCard({ children }: FullScreenCardProps) {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 items-center">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
}

FullScreenCard.Body = function ({ children }: FullScreenCardProps) {
  return <div className="shadow bg-white p-6 rounded-lg">{children}</div>;
};

FullScreenCard.BelowCard = function ({ children }: FullScreenCardProps) {
  return (
    <div className="justify-center mt-2 gap-3 text-center">{children}</div>
  );
};
