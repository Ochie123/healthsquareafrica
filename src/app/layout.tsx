import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import React, { Suspense  } from 'react'
import { Instrument_Sans } from 'next/font/google'
import '@/styles/styles.scss'
import GlobalProvider from './GlobalProvider'
import ModalSearch from '@/components/Modal/ModalSearch'

const instrument = Instrument_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Healthsquare',
  description: 'Healthsquare Africa news hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <Suspense>
        <body className={instrument.className}>
          {children}
          <Analytics />
          <ModalSearch />
        </body>
        </Suspense>
      </html>
    </GlobalProvider>
  )
}
