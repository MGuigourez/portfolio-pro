import Head from 'next/head'

import Intro from '../components/Intro/Intro'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maxime Guigourez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
      </main>
    </div>
  )
}
