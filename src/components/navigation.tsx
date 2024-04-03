"use client"

export default function Navigation() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Thrive Petcare</span>
            <img
              alt="Thrive Pet Care"
              loading="lazy"
              width="129"
              height="58"
              decoding="async"
              data-nimg="1"
              srcSet="https://www.thrivepetcare.com/_next/image?url=%2Fimages%2Fcommon%2Fthrive-logo.gif&amp;w=256&amp;q=75 1x, https://www.thrivepetcare.com/_next/image?url=%2Fimages%2Fcommon%2Fthrive-logo.gif&amp;w=384&amp;q=75 2x"
              src="https://www.thrivepetcare.com/_next/image?url=%2Fimages%2Fcommon%2Fthrive-logo.gif&amp;w=384&amp;q=75"
              style={{ color: 'transparent' }}
            />
          </a>
        </div>
      </nav>
    </header>
  )
}
