import './globals.css'
import '@radix-ui/themes/styles.css'
import { Inter } from 'next/font/google'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { Providers } from '../../utils/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JohnJX',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Theme
            // appearance="dark"
            accentColor="sky"
            // grayColor="sand"
            // radius="large"
            // scaling="95%"
          >
            {children}
            {/* <ThemePanel /> */}
          </Theme>
        </Providers>
      </body>
    </html>
  )
}
