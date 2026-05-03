import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevBurnout Detector — Spot burnout before it's too late",
  description:
    "Analyzes Git commit patterns, code review participation, and Slack activity to identify developer burnout indicators before they become critical."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="9ab73f8d-902c-46e1-99a5-b0f7acb8ad15"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
