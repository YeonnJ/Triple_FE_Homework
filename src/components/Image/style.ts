import styled from 'styled-components'

export const StyledImage = styled.img<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
`
