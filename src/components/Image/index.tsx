import { DEFAULT_IMAGE } from '../../assets/defaultImage'

import { StyledImage } from './style'

interface Props {
  src: string
  alt?: string
  width?: number
  height?: number
}
const Image = ({ src, alt = '이미지', width, height }: Props) => {
  const onError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = DEFAULT_IMAGE
  }
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={onError}
    />
  )
}

export default Image
