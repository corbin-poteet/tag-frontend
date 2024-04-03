"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/20/solid'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
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
        <form className="max-w-md mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:red-500 z-10" aria-hidden="true" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 ps-10 text-sm text-gray-900 rounded-lg shadow-inner
               bg-blue-secondary 
              outline-none 
              p-1 w-80 
              focus:flex-1 focus:pr-12
              transition-all duration-500 transform focus:w-96
              "
              placeholder="Search tags..."
              required
            />
          </div>
        </form>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <button
            type="button"
            className="relative inline-flex items-center gap-x-1.5 rounded-md bg-blue-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Create tag
          </button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <a
              href="#"
              className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
