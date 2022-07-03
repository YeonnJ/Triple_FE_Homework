import Image from '../Image'
import TripleAwardImage from '../../assets/triple2x.png'

import { AwardImageContainer, AwardImageDescription } from './style'

const AwardImage = () => {
  return (
    <AwardImageContainer>
      <Image src={TripleAwardImage} width={400} />
      <AwardImageDescription>2021년 12월 기준</AwardImageDescription>
    </AwardImageContainer>
  )
}

export default AwardImage
