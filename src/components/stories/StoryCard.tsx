import { Link } from '@tanstack/react-router'

import clsx from 'clsx'
import Arrow from '../utils/Arrow'

type StoryCardProps = {
  id: string
  title: string
  date: string
  author: string
  showDate?: boolean
}

export default function StoryCard({
  id,
  title,
  date,
  author,
  showDate = true,
}: StoryCardProps) {
  return (
    <li>
      <Link
        to='.'
        className={clsx(
          `relative flex h-full flex-col justify-end text-white p-10 overlay hover:-translate-y-4 transition-all duration-300
           after:absolute after:left-0 after:right-0 after:h-[6px] after:bottom-0 
           after:opacity-0 after:transition-all  hover:after:opacity-100 after:duration-300
           after:bg-linear-to-tr after:from-[#ffc593] after:via-[52%] after:via-[#bc7198]  after:to-[#5a77ff] 
          `,
          `story-${id} bg-cover`
        )}
      >
        <div>
          {showDate && <p className='text-sm'>{date}</p>}
          <h3 className='font-bold capitalize text-lg'>{title}</h3>
          <p className='text-sm'>by {author}</p>
        </div>

        <div className='w-full h-[1px] bg-white mt-4'></div>

        <div className='flex justify-between items-center mt-5'>
          <p className='uppercase font-bold tracking-widest text-xs'>
            Read story
          </p>
          <Arrow color='white' />
        </div>
      </Link>
    </li>
  )
}
