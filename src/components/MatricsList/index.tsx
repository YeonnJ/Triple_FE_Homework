import MetricsItem from '../MatricsItem'

import { MetricsListContainer } from './style'

const MetricsList = () => {
  const metricsData = [
    {
      id: 1,
      target: 700,
      unit: '만 명',
      additional: '여행자',
    },
    {
      id: 2,
      target: 100,
      unit: '만 개',
      additional: '여행 리뷰',
    },
    {
      id: 3,
      target: 470,
      unit: '만 개',
      additional: '여행 일정',
    },
  ]

  return (
    <MetricsListContainer>
      <ul>
        {metricsData.map((item) => (
          <li key={item.id}>
            <MetricsItem
              target={item.target}
              unit={item.unit}
              additional={item.additional}
            />
          </li>
        ))}
      </ul>
    </MetricsListContainer>
  )
}

export default MetricsList
