import { useState } from 'react'
import Beta from '../shared/Beta'
import Section from '../utils/Section'

import PriceCard from './PriceCard'
import pricingDesktop from '/src/assets/pricing/desktop/hero.jpg'
import pricingMobile from '/src/assets/pricing/mobile/hero.jpg'
import pricingTablet from '/src/assets/pricing/tablet/hero.jpg'
import clsx from 'clsx'
import PlanBenefits from './PlanBenefits'

export default function Pricing() {
  const [mode, setMode] = useState<'monthly' | 'yearly'>('monthly')

  const toggleMode = () => {
    setMode((p) => (p === 'monthly' ? 'yearly' : 'monthly'))
  }

  return (
    <main>
      <Section
        content={{
          title: 'PRICING',
          text: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
        }}
        images={{
          desktop: pricingDesktop,
          tablet: pricingTablet,
          mobile: pricingMobile,
        }}
        bgBlack={true}
        withGradient={true}
        size='small'
      />

      <section className='grid items-center gap-12 my-container mt-30 mb-40'>
        <div className='flex justify-center gap-8'>
          <button
            className={clsx('font-bold cursor-pointer', {
              'text-black': mode === 'monthly',
              'text-black/60': mode === 'yearly',
            })}
            onClick={() => setMode('monthly')}
          >
            Monthly
          </button>
          <button
            className={clsx(
              `w-16 h-8 bg-[#DFDFDF] rounded-2xl relative  after:absolute after:w-6 after:h-6 cursor-pointer
             after:rounded-full after:top-1 after:left-1 after:bg-black after:transition-transform duration-200`,
              {
                'after:translate-x-0': mode === 'monthly',
                'after:translate-x-8': mode === 'yearly',
              }
            )}
            onClick={toggleMode}
          ></button>
          <button
            className={clsx('font-bold cursor-pointer', {
              'text-black/60': mode === 'monthly',
              'text-black': mode === 'yearly',
            })}
            onClick={() => setMode('yearly')}
          >
            Yearly
          </button>
        </div>

        <section className='grid lg:grid-cols-3 lg:items-center gap-6 lg:gap-4 xl:gap-8'>
          <PriceCard
            color='white'
            mode={mode}
            price={19}
            title='Basic'
            text='Includes basic usage of our platform. Recommended for new and aspiring photographers.'
          />
          <PriceCard
            color='black'
            mode={mode}
            price={39}
            title='Pro'
            text='More advanced features available. Recommended for photography veterans and professionals.'
          />
          <PriceCard
            color='white'
            mode={mode}
            price={99}
            title='Business'
            text='Additional features available such as more detailed metrics. Recommended for business owners.'
          />
        </section>
      </section>

      <section className='my-40  px-6'>
        <h2 className='text-[2.5rem] text-center font-bold tracking-widest mb-14'>
          COMPARE
        </h2>

        <PlanBenefits />
      </section>

      <Beta />
    </main>
  )
}
