import Title from './Title'
import Image from 'next/image'

import profil from '../../public/profil.jpg'

const textClass = 'text-center font-title text-3xl font-medium'

export default function Intro() {
  return (
    <div className="mx-auto flex w-full max-w-4xl antialiased">
      <div>
        <h1 className={textClass}>Bonjour, je m'appelle Maxime</h1>
        <Title classTitle={textClass} />
      </div>

      <div className="ml-14 w-1/4">
        <Image
          src={profil}
          alt="Photo Maxime Guigourez"
          className="rounded-xl hover:blur-none"
        />
      </div>
    </div>
  )
}
