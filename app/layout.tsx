import "./globals.css";
import NavShell from "@/components/NavShell";

export const metadata = {
  title: "Status",
  description: "an avengers social media app",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <NavShell>{children}</NavShell>
      </body>
    </html>
  );
}
