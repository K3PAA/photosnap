import arrowWhite from '/src/assets/shared/desktop/arrowWhite.svg'
import arrowBlack from '/src/assets/shared/desktop/arrowBlack.svg'

type ArrowProps = {
  color: 'white' | 'black'
  className?: string
}

export default function Arrow({ color, className }: ArrowProps) {
  return (
    <img
      src={color === 'white' ? arrowWhite : arrowBlack}
      aria-hidden='true'
      className={className}
    />
  )
}
