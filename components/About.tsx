import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import profil from '../public/maxime.png'

import { useTheme } from 'next-themes'

const About = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Bonjour,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 text-justify">
              Je m'appelle Maxime Guigourez, je suis actuellement développeur
              web chez{' '}
              {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
                <a
                  href="https://checkandvisit.com/"
                  target="_blank"
                  className="text-blue-600  visited:text-purple-600 hover:bg-red-800"
                >
                  Check & Visit{' '}
                </a>
              ) : (
                <a
                  href="https://checkandvisit.com/"
                  target="_blank"
                  className="text-blue-600 visited:text-purple-600  hover:bg-green-300"
                >
                  Check & Visit{' '}
                </a>
              )}{' '}
              à Rennes où j'effectue mon alternance depuis bientôt 2 ans pour
              l'obtention d'un Master "Expert en informatique et Système
              d'information" en fin d'année 2022.
            </p>

            <p className="text-justify">
              Après avoir rejoins l'IUT de Nantes pour un DUT Informatique j'ai
              poursuivis sur une license professionnelle MIAR (Métiers de
              l'informatique : Parcours Applications Réparties). J'ai pu
              réaliser deux stages très intéressants pour moi à Youday CRM puis
              à la centrale des magasins U dans le pôle recherche et
              développement (voir Expériences) tout deux situés à Nantes.
            </p>
          </div>
        </div>
        <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src={profil}
            alt="photo Maxime Guigourez"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default About
