import type { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import "./globals.css"
import Header from "./_Components/Header/page"
import Footer from "./_Components/Footer/page"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "VA Sub Shack",
  description: "Delicious Subs Made Daily, Fresh Bread, Quality Meats and Cheeses, Made to Order Sandwiches",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}