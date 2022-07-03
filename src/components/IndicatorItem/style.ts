import styled from 'styled-components'

export const IndicatorItemParagraph = styled.p`
  margin-bottom: 20px;
  letter-spacing: -1px;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.gray[500]};
`
