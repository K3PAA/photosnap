import { Link } from '@tanstack/react-router'
import { navLinks } from '../../lib/constants'

export default function Links() {
  return (
    <>
      {navLinks.map((link) => {
        return (
          <li
            key={link.text}
            className='text-black hover:text-black/30 focus-within:text-black/30 duration-300 transition-all uppercase tracking-widest font-bold'
          >
            <Link to={link.to} className='py-4 md:py-2 px-3 block text-center'>
              {link.text}
            </Link>
          </li>
        )
      })}
    </>
  )
}
