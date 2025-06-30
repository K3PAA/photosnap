import Logo from '../utils/Logo'
import StyledLink from '../utils/StyledLink'

import { useState } from 'react'
import Links from './Links'
import ToggleButton from './ToogleButton'
import clsx from 'clsx'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleIsNavOpen = () => {
    setIsNavOpen((p) => !p)
  }

  return (
    <header className='bg-white'>
      <nav className='p-4 flex justify-between items-center relative max-w-[1110px] mx-auto'>
        <Logo color='black' />
        <ToggleButton isOpen={isNavOpen} onClick={toggleIsNavOpen} />

        <ul
          className={clsx(
            `px-4 py-6 bg-white flex flex-col w-full bottom-0 left-1/2 -translate-x-1/2 absolute z-10
             md:p-0 md:static md:translate-0 md:opacity-100 md:pointer-events-auto md:flex-row md:w-auto transition-all duration-300`,
            {
              'translate-y-full opacity-100': isNavOpen,
              'translate-y-1/2 opacity-0 pointer-events-none': !isNavOpen,
            }
          )}
          id='primary-navigation'
        >
          <Links />

          <div
            className='mt-5 w-full h-[1px] bg-black/25 md:hidden'
            aria-hidden='true'
          ></div>

          <li className='grid text-center mt-5 md:hidden'>
            <StyledLink color='black'>GET AN INVITE</StyledLink>
          </li>
        </ul>

        <div className='hidden md:block'>
          <StyledLink color='black'>GET AN INVITE</StyledLink>
        </div>
      </nav>
    </header>
  )
}
