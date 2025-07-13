import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pure Escape Limited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="General IT Supply" />
      </head>
      <body>{children}</body>
    </html>
  );
}
