import Image from '../Image'
import TripleAwardImage from '../../assets/triple2x.png'

import { AwardImageContainer } from './style'

const AwardImage = () => {
  return (
    <AwardImageContainer>
      <Image src={TripleAwardImage} width={400} />
      <p>2021년 12월 기준</p>
    </AwardImageContainer>
  )
}

export default AwardImage
