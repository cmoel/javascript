import * as React from "react";
import * as AppSymbols from "./mono_app_symbols";
import * as ColorAppSquircles from "./color_app_squircles";

export function ColorAppIcon({
  appName,
  size = 20,
}: {
  appName: string;
  size?: number;
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ display: "block" }}
    >
      {ColorAppSquircles[appName]()}
      {React.createElement(AppSymbols[appName], { color: "#fff" })}
    </svg>
  );
}
