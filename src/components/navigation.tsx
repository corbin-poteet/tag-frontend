"use client"

import logo from '@/app/logo.gif'

export default function Navigation() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <span className="sr-only">Thrive Petcare</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Thrive Pet Care"
            loading="lazy"
            width="129"
            height="58"
            decoding="async"
            data-nimg="1"
            src={logo.src}
            style={{ color: 'transparent' }}
          />
        </div>
      </nav>
    </header>
  )
}
