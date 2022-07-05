import styled from 'styled-components'

export const BadgeContainer = styled.div`
  display: flex;

  img + p {
    margin-left: 10px;
  }

  p {
    display: flex;
    align-items: center;
    white-space: pre-wrap;
    line-height: 22px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`
