import React from "react";
import { Outlet } from "react-router";
import FullScreenCard from "../../components/FullScreenCard";
export default function AuthLayout() {
  return (
    <FullScreenCard>
      <FullScreenCard.Body>
        <Outlet />
      </FullScreenCard.Body>
      <FullScreenCard.BelowCard>iam groot</FullScreenCard.BelowCard>
    </FullScreenCard>
  );
}
