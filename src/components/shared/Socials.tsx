import facebook from '/assets/shared/desktop/facebook.svg'
import youtube from '/assets/shared/desktop/youtube.svg'
import twitter from '/assets/shared/desktop/twitter.svg'
import pinterest from '/assets/shared/desktop/pinterest.svg'
import instagram from '/assets/shared/desktop/instagram.svg'
import clsx from 'clsx'

const socials = [
  {
    href: 'https://facebook',
    icon: facebook,
  },
  {
    href: 'https://facebook',
    icon: youtube,
  },
  {
    href: 'https://facebook',
    icon: twitter,
  },
  {
    href: 'https://facebook',
    icon: pinterest,
  },
  {
    href: 'https://facebook',
    icon: instagram,
  },
]

export default function Socials() {
  return (
    <ul className='flex mt-auto mx-auto sm:mx-0'>
      {socials.map((social, i) => {
        return (
          <li key={i}>
            <a
              href={social.href}
              target='_blank'
              className='brightness-1000  hover:brightness-100 focus-within:brightness-100  duration-300'
            >
              <img src={social.icon} className={clsx('p-2  scale-110')} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
