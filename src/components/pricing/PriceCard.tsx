import clsx from 'clsx'
import StyledLink from '../utils/StyledLink'

type PriceCardProps = {
  title: string
  text: string
  price: number
  color: 'white' | 'black'
  mode: 'monthly' | 'yearly'
}

export default function PriceCard({
  color,
  title,
  text,
  mode,
  price,
}: PriceCardProps) {
  return (
    <div
      className={clsx(
        'text-center sm:text-start lg:text-center grid gap-10 sm:grid-cols-2 lg:grid-cols-1 p-10',
        {
          'bg-[#F5F5F5] lg:px-10 lg:pt-14 lg:pb-10': color === 'white',
          'bg-black relative lg:px-10 lg:pt-20 lg:pb-18': color === 'black',
        }
      )}
    >
      {color === 'black' && (
        <div
          className='absolute w-full h-[6px] top-0 left-0 sm:w-[6px] sm:h-full lg:w-full lg:h-[6px]
            bg-linear-to-tr from-[#ffc593] via-[52%] via-[#bc7198]  to-[#5a77ff]'
        ></div>
      )}

      <div
        className={clsx(
          'grid justify-center sm:justify-start lg:justify-center gap-4',
          {
            'text-black ': color === 'white',
            'text-white': color === 'black',
          }
        )}
      >
        <h3 className='font-bold text-2xl capitalize'>{title}</h3>
        <p
          className={clsx('max-w-[30ch]', {
            'text-black/60': color === 'white',
            'text-white/60': color === 'black',
          })}
        >
          {text}
        </p>
      </div>

      <p
        className={clsx('text-center sm:text-end lg:text-center', {
          'text-black/60': color === 'white',
          'text-white/60': color === 'black',
        })}
      >
        <span
          className={clsx('block text-[2.5rem] font-bold', {
            'text-black': color === 'white',
            'text-white': color === 'black',
          })}
        >
          ${mode === 'yearly' ? price * 10 : price}.00
        </span>
        {mode === 'monthly' ? 'per month' : 'per year'}
      </p>

      <StyledLink color={color === 'black' ? 'white' : 'black'}>
        Pick Plan
      </StyledLink>
    </div>
  )
}
