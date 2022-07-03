import Image from '../Image'

import { BadgeContainer } from './style'

interface Props {
  src: string
  alt: string
  contents: string
  imageWidth: number
}
const Badge = ({ src, alt, contents, imageWidth }: Props) => {
  return (
    <BadgeContainer>
      <Image src={src} alt={alt} width={imageWidth} />
      <p>{contents}</p>
    </BadgeContainer>
  )
}

export default Badge
