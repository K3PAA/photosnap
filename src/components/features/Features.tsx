import Beta from '../shared/Beta'
import Section from '../utils/Section'
import FeaturesWrapper from './FeaturesWrapper'

import featuresDektop from '/src/assets/features/desktop/hero.jpg'
import featuresMobile from '/src/assets/features/mobile/hero.jpg'
import featuresTablet from '/src/assets/features/tablet/hero.jpg'

export default function Features() {
  return (
    <main>
      <Section
        content={{
          title: 'FEATURES',
          text: 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
        }}
        images={{
          desktop: featuresDektop,
          tablet: featuresTablet,
          mobile: featuresMobile,
        }}
        bgBlack={true}
        withGradient={true}
        size='small'
      />

      <FeaturesWrapper />

      <Beta />
    </main>
  )
}
