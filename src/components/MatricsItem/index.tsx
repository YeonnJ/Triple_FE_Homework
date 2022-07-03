import useCountUp from '../../hooks/useCountUp'

interface Props {
  target: number
  unit: string
  additional: string
}
const MetricsItem = ({ target, unit, additional }: Props) => {
  const count = useCountUp(target)

  return (
    <>
      <strong>{`${count}${unit}`}</strong>의 {additional}
    </>
  )
}

export default MetricsItem
