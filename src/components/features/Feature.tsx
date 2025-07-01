import clsx from 'clsx'

type FeatureProps = {
  svg: string
  title: string
  text: string

  center: boolean
  firstRow: boolean
  first: boolean
}

export default function Feature({
  svg,
  title,
  text,
  center,
  firstRow,
  first,
}: FeatureProps) {
  return (
    <section
      className={clsx('grid grid-rows-subgrid row-span-3 text-center', {
        'mx-4 md:mx-8': center,
        'mt-24': !firstRow,
        'mt-24 md:mt-0': firstRow && !first,
        'mt-0': first,
      })}
    >
      <img src={svg} alt={`${title} svg icon`} className='block mx-auto' />
      <h3 className='font-bold mt-12'>{title}</h3>
      <p className='text-black/60 max-w-[44ch] mt-4 mx-auto'>{text}</p>
    </section>
  )
}
