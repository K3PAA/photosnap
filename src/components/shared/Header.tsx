import Logo from '../utils/Logo'
import StyledLink from '../utils/StyledLink'

import clsx from 'clsx'
import { useRef, useState } from 'react'
import Links from './Links'
import ToggleButton from './ToogleButton'

export type NavState = 'closed' | 'opened' | 'closing'

export default function Header() {
  const listRef = useRef<HTMLUListElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const [navState, setNavState] = useState<NavState>('closed')

  const toggleIsNavOpen = () => {
    if (!buttonRef.current || !listRef.current) return

    if (buttonRef.current.getAttribute('aria-expanded') === 'true') {
      buttonRef.current.setAttribute('aria-expanded', 'false')
      listRef.current.setAttribute('data-state', 'closing')
      listRef.current.addEventListener(
        'animationend',
        () => {
          setNavState('closed')
        },
        { once: true }
      )

      setNavState('closing')
    } else {
      buttonRef.current.setAttribute('aria-expanded', 'true')
      listRef.current.setAttribute('data-state', 'opened')
      setNavState('opened')
    }
  }

  return (
    <header className='bg-white'>
      <nav className='p-4 flex justify-between items-center relative max-w-[1110px] mx-auto'>
        <Logo color='black' />

        <ToggleButton
          navState={navState}
          onClick={toggleIsNavOpen}
          ref={buttonRef}
        />

        <ul
          className={clsx(
            `px-4 py-6 bg-white flex flex-col w-full bottom-0 left-1/2 absolute z-10 
             md:p-0 md:static md:translate-0 md:opacity-100 md:pointer-events-auto md:flex-row md:w-auto md:flex`
          )}
          id='primary-navigation'
          data-state={
            navState === 'opened'
              ? 'opened'
              : navState === 'closed'
                ? 'closed'
                : 'closing'
          }
          ref={listRef}
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
