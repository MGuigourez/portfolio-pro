import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'

export const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 bg-white py-2 dark:bg-black md:mb-6 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 lg:max-w-4xl">
        <Link href="/">
          <a
            className={
              'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white'
            }
          >
            Maxime Guigourez
          </a>
        </Link>

        <Link href="/about">
          <a
            className={
              'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white'
            }
          >
            A propos
          </a>
        </Link>

        <a>CONTACT</a>

        <ThemeSwitch />
      </div>
    </div>
  )
}
