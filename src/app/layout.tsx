import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joey's Hostel - Your Community of Travelers in India",
  description:
    "Experience the essence of travel with Joey's Hostel. Connect with travelers from around the globe, and forge lifelong friendships while immersing yourself in the rich culture of India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
