import { Link } from '@tanstack/react-router'
import clsx from 'clsx'

type StyledLinkProps = {
  children: React.ReactNode
  color: 'white' | 'black'
  to?: string
}

export default function StyledLink({
  children,
  color,

  to = '/',
}: StyledLinkProps) {
  return (
    <Link
      to={to}
      className={clsx(
        'uppercase py-3 px-6 cursor-pointer font-bold tracking-widest inline-block transition-all duration-300',
        {
          'text-white bg-black hover:bg-gray-400 hover:text-black focus:bg-gray-400 focus:text-black':
            color === 'black',
          'text-black bg-white': color === 'white',
        }
      )}
    >
      {children}
    </Link>
  )
}
