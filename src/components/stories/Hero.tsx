import StyledArrowLink from '../utils/StyledArrowLink'
import heroMobile from '/src/assets/stories/mobile/moon-of-appalacia.jpg'

export default function Hero() {
  return (
    <section>
      <img
        src={heroMobile}
        alt='moon of appalacia'
        className='sm:hidden object-cover block w-full min-h-[375px] object-top'
      />
      <section className='bg-stories min-h-[650px] text-white flex flex-col justify-center px-8 sm:px-32 overlay-stories bg-black'>
        <p className='font-bold'>LAST MONTH’S FEATURED STORY</p>
        <h1 className='text-[2.5rem] font-bold mt-6 tracking-widest max-w-[12ch] leading-[1.15]'>
          HAZY FULL MOON OF APPALACHIA
        </h1>
        <p className='text-white/75 mt-4'>
          March 2nd 2020
          <span className='text-white font-bold ml-[1ch]'>
            by John Appleseed
          </span>
        </p>
        <p className='text-white/75 max-w-[38ch] my-6'>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <StyledArrowLink color='white'>Read the story</StyledArrowLink>
      </section>
    </section>
  )
}
