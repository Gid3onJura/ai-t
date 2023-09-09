// import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ModalProvider } from "@/components/modal-provider"
import { ToasterProvider } from "@/components/toaster-provider"
import AuthProvider from "@/context/AuthProvider"
import Providers from "@/components/Providers"
// import { CrispProvider } from "@/components/crisp-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI-T",
  description: "Tools for AI generation",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <AuthProvider>
    <html lang="en">
      {/* <CrispProvider /> */}
      <body className={inter.className}>
        <Providers>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </Providers>
      </body>
    </html>
    // </AuthProvider>
  )
}
