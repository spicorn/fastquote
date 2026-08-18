import { useEffect, useState, type ComponentType } from 'react'
import { asset } from '../asset'

type LightPlayer = ComponentType<{
  src: string
  autoplay?: boolean
  loop?: boolean
  className?: string
  'aria-hidden'?: boolean
}>

export function FoldLottie() {
  const [Player, setPlayer] = useState<LightPlayer | null>(null)

  useEffect(() => {
    let alive = true
    import('lottie-react').then((mod) => {
      if (alive) setPlayer(() => mod.LottieLight)
    })
    return () => {
      alive = false
    }
  }, [])

  if (!Player) return <span className="fq-lottie" aria-hidden="true" />

  return (
    <Player
      src={asset('lottie/quote-fold.json')}
      autoplay
      loop
      className="fq-lottie"
      aria-hidden={true}
    />
  )
}
