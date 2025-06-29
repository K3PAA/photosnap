import { Link } from '@tanstack/react-router'
import { navLinks } from '../../lib/constants'
import Logo from '../utils/Logo'
import StyledArrowLink from '../utils/StyledArrowLink'
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className='bg-black py-16'>
      <div className='my-container grid sm:grid-cols-[auto_1fr]'>
        <section className='grid justify-center md:grid-cols-2 md:gap-x-20'>
          <div className='mx-auto sm:mx-0'>
            <Logo color='white' />
          </div>

          <ul className='mb-30 mt-8 sm:mb-0 md:row-span-2 flex flex-col text-center sm:text-left sm:flex-row justify-center sm:gap-6 pl-2 md:block sm:pb-12 sm:mt-4 md:pb-0 md:mt-0 order-2 sm:order-0'>
            <li className='text-white uppercase font-bold transition-all duratin-300 hover:text-white/30 focus-within:text-white/30'>
              <Link to='/' className='py-2 block'>
                Home
              </Link>
            </li>
            {navLinks.map((link) => {
              return (
                <li className='text-white uppercase font-bold transition-all duratin-300 hover:text-white/30 focus-within:text-white/30'>
                  <Link to={link.to} className='py-2 block'>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Socials />
        </section>
        <section className='flex flex-col items-center gap-4 sm:gap-2 sm:items-end sm:justify-between'>
          <StyledArrowLink color='white'>GET AN INVITE</StyledArrowLink>
          <p className='text-white/50'>Copyright 2019. All Rights Reserved</p>
        </section>
      </div>
    </footer>
  )
}
