import StarIcon from '@/assets/icons/star.svg'
import { words } from '@/constants/mock'

export const TapeSection = () => {
  return (
    // REFACTOR: NESTING DIV
    <div className='overflow-x-clip py-16 lg:py-24'>
      <div className='-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-4 py-3 lg:gap-6'>
            {words.map((word) => (
              <div key={word} className='inline-flex items-center gap-4 lg:gap-6'>
                <span className='text-sm font-extrabold uppercase text-gray-900 lg:text-lg'>
                  {word}
                </span>
                <StarIcon className='size-6 -rotate-12 text-gray-900' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
