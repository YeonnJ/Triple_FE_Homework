import styled from 'styled-components'

import { ContentContainer } from '../common/Layout'

export const AwardDetailContainer = styled(ContentContainer)`
  align-items: flex-start;
  padding: 130px 50px 135px 100px;

  ul + ul {
    margin-top: 30px;
  }
`

export const IndicatorListContainer = styled.ul`
  opacity: 0;
  animation: fadeIn 0.7s 0.1s ease-in-out;
  animation-fill-mode: forwards;
`

export const AwardBadgeListContainer = styled.ul`
  display: flex;
  opacity: 0;
  animation: fadeIn 0.7s 0.2s ease-in-out;
  animation-fill-mode: forwards;

  li + li {
    margin-left: 39px;
  }
`
