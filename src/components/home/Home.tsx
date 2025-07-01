import Section from '../utils/Section'

import homeDesktopMain from '/src/assets/home/desktop/create-and-share.jpg'
import homeMobileMain from '/src/assets/home/mobile/create-and-share.jpg'
import homeTabletMain from '/src/assets/home/tablet/create-and-share.jpg'

import beautifulDesktopMain from '/src/assets/home/desktop/beautiful-stories.jpg'
import beautifulMobileMain from '/src/assets/home/mobile/beautiful-stories.jpg'
import beautifulTabletMain from '/src/assets/home/tablet/beautiful-stories.jpg'

import designedlDesktopMain from '/src/assets/home/desktop/designed-for-everyone.jpg'
import designedlMobileMain from '/src/assets/home/mobile/designed-for-everyone.jpg'
import designedlTabletMain from '/src/assets/home/tablet/designed-for-everyone.jpg'
import FeaturesWrapper from '../features/FeaturesWrapper'
import StoriesWrapper from '../stories/StoriesWrapper'

export default function Home() {
  return (
    <main>
      <Section
        content={{
          title: 'Create and share your photo stories. ',
          text: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
          linkText: 'GET AN INVITE',
        }}
        images={{
          mobile: homeMobileMain,
          tablet: homeTabletMain,
          desktop: homeDesktopMain,
        }}
        bgBlack={true}
        withGradient={true}
      />

      <Section
        content={{
          title: 'BEAUTIFUL STORIES EVERY TIME',
          text: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
          linkText: 'VIEW THE STORIES',
        }}
        images={{
          mobile: beautifulMobileMain,
          tablet: beautifulTabletMain,
          desktop: beautifulDesktopMain,
        }}
        imgSide='left'
        linkTo='/stories'
        main={false}
      />

      <Section
        content={{
          title: 'DESIGNED FOR EVERYONE',
          text: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
          linkText: 'VIEW THE STORIES',
        }}
        images={{
          mobile: designedlMobileMain,
          tablet: designedlTabletMain,
          desktop: designedlDesktopMain,
        }}
        linkTo='/stories'
        main={false}
      />

      <StoriesWrapper fullList={false} />

      <FeaturesWrapper fullList={false} />
    </main>
  )
}
