import clsx from 'clsx'
import StyledArrowLink from './StyledArrowLink'
import GradientDecoration from './GradientDecoration'

type SectionProps = {
  bgBlack?: boolean
  withGradient?: boolean
  imgSide?: 'left' | 'right'
  content: {
    title: string
    text: string
    linkText?: string
  }
  images: {
    mobile: string
    tablet: string
    desktop: string
  }
  linkTo?: string | null
  size?: 'large' | 'small'
}

export default function Section({
  content,
  images,
  bgBlack = false,
  withGradient = false,
  linkTo = null,
  imgSide = 'right',
  size = 'large',
}: SectionProps) {
  return (
    <section
      className={clsx('grid ', {
        ' bg-black': bgBlack,
        'sm:grid-cols-[5fr_3fr] lg:grid-cols-[3fr_4fr]': imgSide === 'right',
        'sm:grid-cols-[3fr_5fr] lg:grid-cols-[4fr_3fr]': imgSide === 'left',
      })}
    >
      <img
        src={images.mobile}
        className='object-cover bg-center w-full sm:hidden '
      />

      <section
        className={clsx(
          `grid place-content-center px-6 sm:pl-6 relative py-18`,
          {
            'order-1': imgSide === 'right',
            'order-2': imgSide === 'left',
          }
        )}
      >
        {withGradient && <GradientDecoration />}
        <h1
          className={clsx(
            'text-3xl sm:text-[2.25rem] md:text-[2.5rem] uppercase font-bold tracking-widest leading-tight  max-w-[14ch]',
            {
              'text-white': bgBlack,
              'text-black': !bgBlack,
            }
          )}
        >
          {content.title}
        </h1>
        <p
          className={clsx('mt-5 max-w-[36ch]', {
            'text-white/60': bgBlack,
            'text-black/60': !bgBlack,
          })}
        >
          {content.text}
        </p>

        {size === 'large' && (
          <StyledArrowLink
            color={bgBlack ? 'white' : 'black'}
            className='mt-10'
            to={linkTo ? linkTo : null}
          >
            {content.linkText}
          </StyledArrowLink>
        )}
      </section>

      <img
        src={images.desktop}
        className={clsx('object-cover bg-center w-full hidden lg:block', {
          'h-[650px]': size === 'large',
          'h-[490px]': size === 'small',
          'order-2': imgSide === 'right',
          'order-1': imgSide === 'left',
        })}
      />
      <img
        src={images.tablet}
        className={clsx(
          'object-cover bg-center w-full hidden sm:block lg:hidden',
          {
            'h-[650px]': size === 'large',
            'h-[490px]': size === 'small',
            'order-2': imgSide === 'right',
            'order-1': imgSide === 'left',
          }
        )}
      />
    </section>
  )
}
