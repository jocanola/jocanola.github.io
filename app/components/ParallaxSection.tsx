'use client'

import Parallax from './Parallax'

interface ParallaxSectionProps {
  bgColor: string
  text: string
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ bgColor, text }) => {
  return (
    <Parallax offset={100}>
      <div className={`py-20 ${bgColor}`}>
        <h2 className="text-4xl font-bold text-center">{text}</h2>
      </div>
    </Parallax>
  )
}

export default ParallaxSection

