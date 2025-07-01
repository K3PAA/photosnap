import Beta from '../shared/Beta'
import Section from '../utils/Section'

import pricingDesktop from '/src/assets/pricing/desktop/hero.jpg'
import pricingMobile from '/src/assets/pricing/mobile/hero.jpg'
import pricingTablet from '/src/assets/pricing/tablet/hero.jpg'

export default function Pricing() {
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

      <Beta />
    </main>
  )
}
