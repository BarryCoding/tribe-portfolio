import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import Image from 'next/image'
import grainImage from '@/assets/images/grain.jpg'

export const HeroSection = () => {
  return (
    <div className='relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60'>
      {/* grain bg */}
      <div
        className='absolute inset-0 -z-30 opacity-5'
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      <div className='hero-ring size-[620px]' />
      <div className='hero-ring size-[820px]' />
      <div className='hero-ring size-[1020px]' />
      <div className='hero-ring size-[1220px]' />
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className='size-[100px]' alt='memoji computer' />
          <div className='inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5'>
            <span className='size-2.5 rounded-full bg-green-500'></span>
            <span className='text-sm font-medium'>Available for new Projects</span>
          </div>
        </div>

        <div className='mx-auto max-w-lg'>
          <h1 className='mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl'>
            Building Exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional , high-performing web applications.
            Let's discuss your next project.
          </p>
        </div>

        <div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
          <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDownIcon className='size-4' />
          </button>
          <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900'>
            <span>👋🏼</span>
            <span className='font-semibold'>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}
