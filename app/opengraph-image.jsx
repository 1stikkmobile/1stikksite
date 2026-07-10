import { ImageResponse } from "next/og";
import { logoDataUri } from "./logo-data";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "28px",
          background: "#ffffff",
          color: "#111827",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <img
          src={logoDataUri}
          width="420"
          height="420"
          alt="1 Stikk Mobile logo"
          style={{
            width: "420px",
            height: "420px",
            objectFit: "contain"
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: "34px",
            fontWeight: 800,
            letterSpacing: "-0.02em"
          }}
        >
          1 Stikk Mobile Inc.
        </div>
      </div>
    ),
    size
  );
}
