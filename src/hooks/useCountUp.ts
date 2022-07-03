import { useEffect, useState } from 'react'

type UseCountUp = (target: number, start?: number, duration?: number) => number

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

const useCountUp: UseCountUp = (target, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start)
  const frameRate = 1000 / 60
  const totalFrame = Math.round(duration / frameRate)

  useEffect(() => {
    let currentNumber = start

    const countUpInterval = setInterval(() => {
      const progress = easeOutExpo(++currentNumber / totalFrame)
      setCount(Math.round(target * progress))

      if (progress === 1) {
        clearInterval(countUpInterval)
      }
    }, frameRate)
  }, [target, start, frameRate, totalFrame])

  return count
}

export default useCountUp
