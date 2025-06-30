import { Link } from '@tanstack/react-router'
import logoBlack from '/src/assets/shared/desktop/logoBlack.svg'
import logoWhite from '/src/assets/shared/desktop/logoWhite.svg'

type LogoProps = {
  color: 'white' | 'black'
}
export default function Logo({ color }: LogoProps) {
  return (
    <Link to='/' className='p-2 block'>
      <img
        src={color === 'black' ? logoBlack : logoWhite}
        alt='photosnap logo'
      />
    </Link>
  )
}
