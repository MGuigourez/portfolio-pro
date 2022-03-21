import Head from 'next/head'
import About from '../components/About'

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Maxime Guigourez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto mt-16 max-w-4xl antialiased">
        <About />
      </main>
    </div>
  )
}
