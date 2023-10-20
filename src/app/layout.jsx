import './globals.css'
import '@radix-ui/themes/styles.css'
import { Inter } from 'next/font/google'
import { Theme, ThemePanel } from '@radix-ui/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JohnJX',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="crimson"
          // grayColor="sand"
          // radius="large"
          // scaling="95%"
        >
          {children}
          <ThemePanel />
        </Theme>
      </body>
    </html>
  )
}
