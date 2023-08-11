import MainNavigation from '@/components/layout/MainNavigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavigation />
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}
