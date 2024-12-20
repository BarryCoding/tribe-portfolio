import { toolboxItems } from '@/constants/mock'
import { TechIcon } from './TechIcon'
import { twMerge } from 'tailwind-merge'

interface ToolboxItemProps {
  className?: string
  itemsWrapperClassName?: string
}

export const ToolboxItem = ({ className, itemsWrapperClassName }: ToolboxItemProps) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className,
      )}
    >
      <div className={twMerge('flex flex-none gap-6 py-0.5 pr-6', itemsWrapperClassName)}>
        {toolboxItems.map((t) => (
          <div
            key={t.title}
            className='inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10'
          >
            <TechIcon component={t.svgElement} />
            <span className='font-semibold'>{t.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
