import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const plus = Plus_Jakarta_Sans({subsets: ['latin']});

export const metadata = {
  title: 'Analytics Dashboard',
  description: 'Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={plus.className}>{children}</body>
    </html>
  );
}
