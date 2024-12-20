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
    <div className='py-20'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn More about who I am, What I do, and what inspires me.'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <Card className='h-80 p-6'>
            <CardHeader title='My Reads' description='Explore the books shaping my perspective.' />
            <div className='mx-auto mt-8 w-40'>
              <Image src={bookImage} alt='Book cover' />
            </div>
          </Card>

          <Card className='h-80'>
            <CardHeader
              title='My Toolbox'
              description='Explore the technologies and tools I use to craft exceptional digital experiences.'
              className='px-6 pt-6'
            />
            <ToolboxItem className='mt-6' />
            <ToolboxItem className='mt-6' itemsWrapperClassName='-translate-x-1/2' />
          </Card>

          <Card className='p-6'>
            <CardHeader
              title='Beyond the Code'
              description='Explore my interests and bobbies beyond the digital realm.'
            />
            <div>
              {hobbies.map((h) => (
                <div key={h.title}>
                  <span>{h.title}</span>
                  <span>{h.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className='p-6'>
            <Image src={mapImage} alt='my map' />
            <Image src={smileImage} alt='smile emoji' />
          </Card>
        </div>
      </div>
    </div>
  )
}
