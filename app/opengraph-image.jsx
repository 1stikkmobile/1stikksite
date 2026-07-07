import { ImageResponse } from "next/og";

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
          position: "relative",
          background: "linear-gradient(135deg, #111827 0%, #162232 52%, #1d4d63 100%)",
          color: "#ffffff",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "radial-gradient(circle at 18% 14%, rgba(234, 207, 2, 0.24), transparent 30%), radial-gradient(circle at 86% 80%, rgba(35, 138, 174, 0.22), transparent 28%)"
          }}
        />
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "58px 64px",
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: "34px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "64%"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "72px",
                  height: "72px",
                  borderRadius: "18px",
                  background: "#eacf02",
                  color: "#111827",
                  fontSize: "34px",
                  fontWeight: 800,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                1
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                }}
              >
                <div style={{ fontSize: "20px", letterSpacing: "1px", textTransform: "uppercase", color: "#f7d94c" }}>
                  1 Stikk Mobile
                </div>
                <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.78)" }}>
                  Mobile healthcare services across the United States
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "66px",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  maxWidth: "760px"
                }}
              >
                Mobile blood draws, lab testing, and patient care brought to you.
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "28px",
                  lineHeight: 1.35,
                  color: "rgba(255,255,255,0.84)",
                  maxWidth: "760px"
                }}
              >
                Book mobile blood draws, wellness visits, drug screening, and at-home lab support with 1 Stikk Mobile.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap"
              }}
            >
              {["Mobile Blood Draws", "Wellness Visits", "Drug Screening", "Book Online or Call"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: "20px",
                    color: "#ffffff"
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "30%",
              minWidth: "300px",
              borderRadius: "28px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06))",
              border: "1px solid rgba(255,255,255,0.16)",
              padding: "28px",
              boxShadow: "0 18px 48px rgba(0,0,0,0.22)"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                }}
              >
                <div style={{ fontSize: "22px", color: "#f7d94c", textTransform: "uppercase" }}>Simple booking</div>
                <div style={{ fontSize: "34px", fontWeight: 800, lineHeight: 1.1 }}>
                  Care at home, work, or your facility
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "24px",
                  color: "rgba(255,255,255,0.92)"
                }}
              >
                <div style={{ display: "flex" }}>Call to book</div>
                <div style={{ display: "flex" }}>Book online</div>
                <div style={{ display: "flex" }}>Nationwide mobile support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
