interface TechIconProps {
  component: React.ElementType
}

export const TechIcon = ({ component }: TechIconProps) => {
  const Component = component
  return (
    <>
      {/* LEARN */}
      <Component className='size-10 fill-[url(#tech-icon-gradient)]' />
      <svg className='absolute size-0'>
        <linearGradient id='tech-icon-gradient'>
          <stop offset='0%' stopColor='rgb(110 231 183)' />
          <stop offset='100%' stopColor='rgb(56 189 248)' />
        </linearGradient>
      </svg>
    </>
  )
}
