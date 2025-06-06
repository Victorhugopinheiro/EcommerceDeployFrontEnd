import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ProviderModal } from "../../constModal/context";
import { SessionAuthProvider } from "@/components/session-auth";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${roboto.className}`}>
        <ProviderModal>
          <SessionAuthProvider>
            <Navbar />
            <main className="flex flex-col">
              {children}
             
            </main>



          </SessionAuthProvider>
        </ProviderModal>

      </body>
    </html>
  );
}
