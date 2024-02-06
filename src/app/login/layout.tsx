import React from "react";
import Authentication from "../_components/layouts/authentication";

export default function layout({ children }: { children: React.ReactNode }) {
  return <Authentication>{children}</Authentication>;
}
