import { indicatorData, AwardBadgeData } from '../../constants/rendingData'
import AwardBadgeItem from '../AwardBadgeItem'
import IndicatorItem from '../IndicatorItem'

import {
  AwardDetailContainer,
  AwardBadgeListContainer,
  IndicatorListContainer,
} from './style'

const AwardDetail = () => {
  return (
    <AwardDetailContainer>
      <IndicatorListContainer>
        {indicatorData.map((item) => (
          <li key={item.id}>
            <IndicatorItem
              target={item.target}
              unit={item.unit}
              additional={item.additional}
            />
          </li>
        ))}
      </IndicatorListContainer>
      <AwardBadgeListContainer>
        {AwardBadgeData.map((item) => (
          <li key={item.id}>
            <AwardBadgeItem
              src={item.src}
              alt={item.alt}
              contents={item.contents}
              imageWidth={54}
            />
          </li>
        ))}
      </AwardBadgeListContainer>
    </AwardDetailContainer>
  )
}

export default AwardDetail
