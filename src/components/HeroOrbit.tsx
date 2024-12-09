interface HeroOrbitProps {
  size: number
  rotation: number // starting point
  children: React.ReactNode
}

export const HeroOrbit = ({ size, rotation, children }: HeroOrbitProps) => {
  return (
    // automatic centering no mater its content
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      {/* spinning box */}
      <div
        style={{ height: `${size}px`, width: `${size}px`, transform: `rotate(${rotation}deg)` }}
        className='flex items-start justify-start'
      >
        {/* spinning star offset its rotation */}
        <div style={{ transform: `rotate(${rotation * -1}deg)` }} className='inline-flex'>
          {children}
        </div>
      </div>
    </div>
  )
}
