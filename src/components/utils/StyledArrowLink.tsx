import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import Arrow from './Arrow'

type StyledArrowLinkProps = {
  children: React.ReactNode
  color: 'white' | 'black'
}

export default function StyledArrowLink({
  children,
  color,
}: StyledArrowLinkProps) {
  return (
    <Link
      to='.'
      className={clsx(
        'uppercase py-3  cursor-pointer font-bold tracking-widest inline-flex items-center gap-4 group',
        {
          'text-black': color === 'black',
          'text-white': color === 'white',
        }
      )}
    >
      <span
        className={clsx(
          'duration-300 transition-all underline underline-offset-6 decoration-transparent',
          {
            'group-hover:decoration-black group-focus:decoration-black':
              color === 'black',
            'group-hover:decoration-white group-focus:decoration-white':
              color === 'white',
          }
        )}
      >
        {children}
      </span>
      <Arrow
        color={color}
        className={
          'group-hover:translate-x-2 transition-transform duration-300'
        }
      />
    </Link>
  )
}
