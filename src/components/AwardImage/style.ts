import styled from 'styled-components'

import { ContentContainer } from '../common/Layout'

export const AwardImageContainer = styled(ContentContainer)`
  padding: 160px 100px 135px 100px;
`

export const AwardImageDescription = styled.p`
  margin-top: -60px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.gray[300]};
`
