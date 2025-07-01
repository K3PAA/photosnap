import StyledArrowLink from '../utils/StyledArrowLink'

export default function Beta() {
  return (
    <section className='bg-beta py-16 relative'>
      <div
        className='after:absolute after:w-[160px] after:left-4 after:h-[6px] after:top-[0px] sm:after:h-full sm:after:w-[6px] sm:after:top-1/2 sm:after:left-0 sm:after:-translate-y-1/2 
      after:bg-linear-to-tr after:from-[#ffc593] after:via-[52%] after:via-[#bc7198]  after:to-[#5a77ff]'
      ></div>
      <div className='my-container flex  flex-col sm:flex-row justify-between sm:items-center'>
        <h4 className='text-white uppercase text-[2.5rem] max-w-[12ch] font-bold tracking-widest leading-[1.15]'>
          We’re in beta. Get your invite today!
        </h4>

        <StyledArrowLink color='white'>GET AN INVITE</StyledArrowLink>
      </div>
    </section>
  )
}
