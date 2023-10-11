import './globals.css'
import type { Metadata } from 'next'; 

// import this font since font.ts
// Mettre      
export const metadata: Metadata = {
  title: 'Nexsphere',
  description: 'Capital Invest future',
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
