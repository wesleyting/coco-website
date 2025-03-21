import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // adjust as needed
});

export const metadata = {
  title: "Coco",
  description: "Drink and food shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased select-none`}>
        {children}
      </body>
    </html>
  );
}
