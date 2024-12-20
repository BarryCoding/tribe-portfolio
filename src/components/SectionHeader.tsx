interface SectionHeaderProps {
  eyebrow: string
  title: string
  description: string
}

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <>
      <p className='text-center'>
        {/* use bg-gradient as text */}
        <span className='bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent'>
          {eyebrow}
        </span>
      </p>
      <h2 className='mt-6 text-center font-serif text-3xl md:text-5xl'>{title}</h2>
      <p className='mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl'>
        {description}
      </p>
    </>
  )
}
