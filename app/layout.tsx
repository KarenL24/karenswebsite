import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Paper Canvas',
  description: 'Karen Lin - Software Engineer + UI/UX Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
