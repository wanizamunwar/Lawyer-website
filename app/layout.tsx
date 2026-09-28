import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "advuzairkhalique | Panhwar & Law Associate",
  description: "Focused court representation for criminal, civil, and family matters.",
  keywords:
    "advuzairkhalique, advuzairkhalique and Association, court representation, criminal lawyer, civil lawyer, family law, legal representation",
  authors: [{ name: "Panhwar & Law Associate" }],
  metadataBase: new URL(process.env.VERCEL_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    title: "Advocate advuzairkhalique | Panhwar & Law Associate",
    description: "Focused court representation for criminal, civil, and family matters.",
    locale: "en",
    siteName: "Panhwar & Law Associate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate advuzairkhalique | Panhwar & Law Associate",
    description: "Focused court representation for criminal, civil, and family matters.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}


