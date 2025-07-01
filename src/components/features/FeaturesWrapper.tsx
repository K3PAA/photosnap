import svgResponsive from '/src/assets/features/desktop/responsive.svg'
import svgNoLimit from '/src/assets/features/desktop/no-limit.svg'
import svgEmbed from '/src/assets/features/desktop/embed.svg'
import svgCustomDomain from '/src/assets/features/desktop/custom-domain.svg'
import svgBoost from '/src/assets/features/desktop/boost-exposure.svg'
import svgDrag from '/src/assets/features/desktop/drag-drop.svg'
import Feature from './Feature'
import clsx from 'clsx'

const features = [
  {
    svg: svgResponsive,
    title: '100% Responsive',
    text: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
  },
  {
    svg: svgNoLimit,
    title: 'No Photo Upload Limit',
    text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
  },
  {
    svg: svgEmbed,
    title: 'Available to Embed',
    text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
  },
  {
    svg: svgCustomDomain,
    title: 'Custom Domain',
    text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
  },
  {
    svg: svgBoost,
    title: 'Boost Your Exposure',
    text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
  },
  {
    svg: svgDrag,
    title: 'Drag & Drop Image',
    text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
  },
]

type FeaturesWrapperProps = {
  fullList?: boolean
}

export default function FeaturesWrapper({
  fullList = true,
}: FeaturesWrapperProps) {
  return (
    <section
      className={clsx('my-container grid my-16 sm:my-26 lg:my-40', {
        'sm:grid-cols-2  lg:grid-cols-3': fullList,
        'md:grid-cols-3': !fullList,
      })}
    >
      {features.map((feature, i) => {
        if (!fullList && i >= 3) return

        return (
          <Feature
            key={i}
            {...feature}
            center={i % 3 === 1}
            firstRow={i < 3}
            first={i === 0}
          />
        )
      })}
    </section>
  )
}
