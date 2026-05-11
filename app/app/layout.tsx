export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body style={{ margin: 0, background: "#f9fafb" }}>{children}</body>
    </html>
  );
}
