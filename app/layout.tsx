import './globals.css'
import type { Metadata } from 'next'
import { Inter ,Montserrat } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const mont = Montserrat({subsets:['latin']})
export const metadata: Metadata = {
  title: 'Team UP',
  description: 'Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={mont.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
