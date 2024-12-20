import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'
import { testimonials } from '@/constants/mock'
import Image from 'next/image'

export const TestimonialsSection = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Happy Clients'
          title='What Clients Say about Me'
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className='mt-16 flex overflow-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-24'>
          <div className='flex flex-none gap-8'>
            {testimonials.map((t) => (
              <Card key={t.name} className='max-w-xs p-6 md:max-w-md md:p-8'>
                <div className='flex items-center gap-4'>
                  <div className='flex size-14 shrink-0 items-center rounded-full bg-gray-700'>
                    <Image src={t.avatar} alt={t.name} className='max-h-full' />
                  </div>
                  <div>
                    <div className='font-semibold'>{t.name}</div>
                    <div className='text-sm text-white/40'>{t.position}</div>
                  </div>
                </div>
                <p className='mt-4 text-sm md:mt-6 md:text-base'>{t.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
