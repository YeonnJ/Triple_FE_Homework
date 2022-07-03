import useCountUp from '../../hooks/useCountUp'

import { MetricsItemParagraph } from './style'

interface Props {
  target: number
  unit: string
  additional: string
}
const MetricsItem = ({ target, unit, additional }: Props) => {
  const count = useCountUp(target)

  return (
    <MetricsItemParagraph>
      <strong>{`${count}${unit}`}</strong>의 {additional}
    </MetricsItemParagraph>
  )
}

export default MetricsItem
