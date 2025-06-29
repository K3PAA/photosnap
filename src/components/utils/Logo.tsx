import { Link } from '@tanstack/react-router'
import logoBlack from '/public/assets/shared/desktop/logoBlack.svg'
import logoWhite from '/public/assets/shared/desktop/logoWhite.svg'

type LogoProps = {
  color: 'white' | 'black'
}
export default function Logo({ color }: LogoProps) {
  return (
    <Link to='/' className='p-2'>
      <img
        src={color === 'black' ? logoBlack : logoWhite}
        alt='photosnap logo'
      />
    </Link>
  )
}
