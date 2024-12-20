import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
    // REFACTOR: DIV NESTING
    <div className='pb-16 pt-12 lg:pb-24 lg:pt-20'>
      <div className='container'>
        <div className='relative z-0 flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:flex-row md:gap-16 md:text-left'>
          <div
            className='absolute inset-0 -z-10 opacity-5'
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className='flex flex-col'>
            <h2 className='font-serif text-2xl md:text-3xl'>
              Let's create something amazing together
            </h2>
            <p className='mt-2 text-sm md:text-base'>
              Ready to bring your next project to life? Let's connect and discuss how I can help you
              achieve your goals.
            </p>
          </div>
          <button className='flex h-12 w-max shrink-0 items-center gap-2 rounded-xl bg-gray-900 px-6 text-white'>
            <span className='font-semibold'>Contact Me</span>
            <ArrowUpRightIcon className='size-4' />
          </button>
        </div>
      </div>
    </div>
  )
}
