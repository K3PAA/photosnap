import { moreStories, sotiresFirstRow } from '../../lib/constants'
import StoryCard from './StoryCard'

type StoriesProps = {
  fullList: boolean
}

export default function Stories({ fullList }: StoriesProps) {
  return (
    <ul className='grid lg:grid-cols-4 sm:grid-cols-2 grid-auto-cols  auto-rows-[375px] lg:auto-rows-[500px]'>
      {sotiresFirstRow.map((card) => {
        return <StoryCard key={card.id} {...card} showDate={fullList} />
      })}

      {fullList &&
        moreStories.map((card) => {
          return <StoryCard key={card.id} {...card} />
        })}
    </ul>
  )
}
