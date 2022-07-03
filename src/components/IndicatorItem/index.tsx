import useCountUp from '../../hooks/useCountUp'

import { IndicatorItemParagraph } from './style'

interface Props {
  target: number
  unit: string
  additional: string
}
const IndicatorItem = ({ target, unit, additional }: Props) => {
  const count = useCountUp(target)

  return (
    <IndicatorItemParagraph>
      <strong>{`${count}${unit}`}</strong>의 {additional}
    </IndicatorItemParagraph>
  )
}

export default IndicatorItem
