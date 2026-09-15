import { Analytics } from '@vercel/analytics/next'
import { Alata } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const alata = Alata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alata',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MarketInsight — Analyse marketing & IA',
  description:
    'Comprendre vos clients. Anticiper leurs comportements. Optimiser vos campagnes.',
  generator: 'MarketInsight',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${alata.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
