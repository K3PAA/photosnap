import checkSvg from '/src/assets/pricing/desktop/check.svg'

const rows = [
  {
    title: 'UNLIMITED STORY POSTING',
    checked: [true, true, true],
  },
  {
    title: 'UNLIMITED PHOTO UPLOAD',
    checked: [true, true, true],
  },
  {
    title: 'EMBEDDING CUSTOM CONTENT',
    checked: [false, true, true],
  },
  {
    title: 'CUSTOMIZE METADATA',
    checked: [false, true, true],
  },
  {
    title: 'ADVANCED METRICS',
    checked: [false, false, true],
  },
  {
    title: 'PHOTO DOWNLOADS',
    checked: [false, false, true],
  },
  {
    title: 'SEARCH ENGINE INDEXING',
    checked: [false, false, true],
  },
  {
    title: 'CUSTOM ANALYTICS',
    checked: [false, false, true],
  },
]

export default function PlanBenefits() {
  return (
    <section className='max-w-[800px] mx-auto px-3'>
      <div className='grid sm:grid-cols-[1fr_100px_100px_100px] md:grid-cols-[1fr_130px_130px_130px] pb-6 border-b border-black tracking-widest'>
        <h3 className='text-start font-bold'>THE FEATURES</h3>
        <p className='text-center  hidden sm:block'>BASIC</p>
        <p className='text-center  hidden sm:block'>PRO</p>
        <p className='text-center  hidden sm:block'>BUSINESS</p>
      </div>

      {rows.map((row) => {
        return (
          <div
            className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_100px_100px_100px] md:grid-cols-[1fr_130px_130px_130px]  py-6 border-b border-b-[#DFDFDF] gap-y-6'
            id={row.title}
          >
            <h4 className='col-span-3 sm:col-span-1 font-bold text-sm tracking-widest text-black'>
              {row.title}
            </h4>
            <p className='sm:mx-auto'>
              <span className='sm:hidden uppercase text-sm text-black/50 tracking-widest'>
                basics
              </span>
              {row.checked[0] && (
                <img src={checkSvg} alt='check svg' className='block mt-2' />
              )}
            </p>
            <p className='sm:mx-auto'>
              <span className='sm:hidden uppercase text-sm text-black/50 tracking-widest '>
                pro
              </span>
              {row.checked[1] && (
                <img src={checkSvg} alt='check svg' className='block mt-2' />
              )}
            </p>
            <p className='sm:mx-auto'>
              <span className='sm:hidden uppercase text-sm text-black/50 tracking-widest '>
                business
              </span>
              {row.checked[2] && (
                <img src={checkSvg} alt='check svg' className='block mt-2' />
              )}
            </p>
          </div>
        )
      })}
    </section>
  )
}
