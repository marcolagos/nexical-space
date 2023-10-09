'use client'

import Link from './Link'
import useSound from 'use-sound'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { headerMenuLinks } from '@/data/navigationLinks'
import { GeneralIcon } from './icons'

const MobileNav = () => {
  const [ThemeSound] = useSound('/static/sounds/page-change.mp3')

  return (
    <div className="relative z-10 inline-block text-left">
      <Menu as="div" className="relative block text-left">
        <div className="block">
          <Menu.Button
            className="block cursor-pointer"
            onClick={() => {
              ThemeSound()
            }}
          >
            <GeneralIcon kind={'hamburger'} size={5} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800">
            <div className="px-1 py-1">
              {headerMenuLinks.map((link) => (
                <Menu.Item key={link.title}>
                  {({ active }) => (
                    <Link
                      href={link.href}
                      className={`${
                        active ? 'bg-gray-100 dark:bg-zinc-700' : ''
                      } text-gray-900 dark:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {link.title}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default MobileNav
