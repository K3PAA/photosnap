import open from '/src/assets/shared/mobile/menu.svg'
import close from '/src/assets/shared/mobile/close.svg'
import type { NavState } from './Header'

type ToggleButtonProps = {
  navState: NavState
  onClick: () => void
  ref: React.RefObject<HTMLButtonElement | null>
}

export default function ToggleButton({
  navState,
  onClick,
  ref,
}: ToggleButtonProps) {
  return (
    <button
      className='cursor-pointer w-10 h-10 grid place-items-center md:hidden'
      aria-controls='primary-navigation'
      aria-expanded={`${navState === 'opened'}`}
      onClick={onClick}
      ref={ref}
    >
      <span className='sr-only'>menu</span>

      <img src={navState === 'opened' ? close : open} aria-hidden='true' />
    </button>
  )
}
