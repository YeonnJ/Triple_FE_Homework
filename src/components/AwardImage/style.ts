import styled from 'styled-components'

import { ContentContainer } from '../Common/Layout'

export const AwardImageContainer = styled(ContentContainer)`
  padding: 160px 100px 135px 50px;
  animation: fadeIn 0.7s ease-in-out;

  p {
    margin-top: -60px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`
