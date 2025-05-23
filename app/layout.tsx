import Header from "../components/Header"
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable )}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
