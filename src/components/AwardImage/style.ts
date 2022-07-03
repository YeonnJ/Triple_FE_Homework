import styled from 'styled-components'

import { ContentContainer } from '../common/Layout'

export const AwardImageContainer = styled(ContentContainer)`
  padding: 135px 50px;
`

export const AwardImageDescription = styled.p`
  margin-top: -70px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.gray[300]};
`
