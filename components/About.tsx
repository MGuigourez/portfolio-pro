import React from 'react'
import Image from 'next/image'
import profile from '../public/profil.jpg'

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Bonjour,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Je m'appelle Maxime Guigourez, je suis actuellement développeur
              chez
              <a href="https://checkandvisit.com/" target="_blank">
                {' '}
                Check & Visit{' '}
              </a>{' '}
              où j'effectue mon alternance depuis bientôt 2 ans en vue de
              l'obtention d'un Master "Expert en informatique et Système
              d'information" en fin d'année 2022.
            </p>
          </div>
        </div>
        <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src={profile}
            alt="Profile"
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
