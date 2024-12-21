import Image from 'next/image'
import bookImage from '@/assets/images/book-cover.png'
import mapImage from '@/assets/images/map.png'
import smileImage from '@/assets/images/memoji-smile.png'
import { SectionHeader } from '@/components/SectionHeader'
import { Card, CardHeader } from '@/components/Card'
import { ToolboxItem } from '@/components/ToolboxItem'
import { hobbies } from '@/constants/mock'

export const AboutSection = () => {
  return (
    <div className='py-20 lg:py-28'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn More about who I am, What I do, and what inspires me.'
        />
        <div className='mt-20 flex flex-col gap-8 md:grid md:grid-cols-5 lg:grid-cols-3'>
          <Card className='h-80 p-6 md:col-span-2 lg:col-span-1'>
            <CardHeader title='My Reads' description='Explore the books shaping my perspective.' />
            <div className='mx-auto mt-8 w-40'>
              <Image src={bookImage} alt='Book cover' />
            </div>
          </Card>

          <Card className='h-80 md:col-span-3 lg:col-span-2'>
            <CardHeader
              title='My Toolbox'
              description='Explore the technologies and tools I use to craft exceptional digital experiences.'
              className='px-6 pt-6'
            />
            <ToolboxItem className='mt-6' />
            <ToolboxItem className='mt-6' itemsWrapperClassName='-translate-x-1/2' />
          </Card>

          <Card className='flex h-80 flex-col md:col-span-3 lg:col-span-2'>
            <CardHeader
              title='Beyond the Code'
              description='Explore my interests and bobbies beyond the digital realm.'
              className='p-6'
            />
            <div className='relative flex-1'>
              {hobbies.map((h) => (
                <div
                  key={h.title}
                  className='absolute inline-flex gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5'
                  style={{
                    top: h.top,
                    left: h.left,
                  }}
                >
                  <span className='font-medium text-gray-950'>{h.title}</span>
                  <span>{h.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className='relative h-80 md:col-span-2 lg:col-span-1'>
            <Image
              src={mapImage}
              alt='my map'
              className='h-full w-full object-cover object-left-top'
            />
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-[""]'>
              <Image src={smileImage} alt='smile emoji' className='size-20' />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
