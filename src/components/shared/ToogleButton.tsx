import open from '/assets/shared/mobile/menu.svg'
import close from '/assets/shared/mobile/close.svg'

type ToggleButtonProps = {
  isOpen: boolean
  onClick: () => void
}

export default function ToggleButton({ isOpen, onClick }: ToggleButtonProps) {
  return (
    <button
      className='cursor-pointer w-10 h-10 grid place-items-center md:hidden'
      aria-controls='primary-navigation'
      onClick={onClick}
    >
      <span className='sr-only'>mobile nav toggle</span>

      <img src={isOpen ? close : open} className='' />
    </button>
  )
}
