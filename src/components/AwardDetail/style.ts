import styled from 'styled-components'

import { ContentContainer } from '../common/Layout'

export const AwardDetailContainer = styled(ContentContainer)`
  align-items: flex-start;
  padding: 130px 50px 135px 100px;

  ul + ul {
    margin-top: 30px;
  }
`

export const IndicatorListContainer = styled.ul``

export const AwardBadgeListContainer = styled.ul`
  display: flex;

  li + li {
    margin-left: 39px;
  }
`
