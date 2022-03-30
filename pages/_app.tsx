import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Navigation } from '../components/Navigation'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
