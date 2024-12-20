import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'
import { testimonials } from '@/constants/mock'
import Image from 'next/image'

export const TestimonialsSection = () => {
  return (
    <section className='py-16'>
      <div className='container'>
        <SectionHeader
          eyebrow='Happy Clients'
          title='What Clients Say about Me'
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div>
          {testimonials.map((t) => (
            // REFACTOR: ImageBg UI component
            <Card key={t.name} className='p-6'>
              <Image src={t.avatar} alt={t.name} />
              <div>{t.name}</div>
              <div>{t.position}</div>
              <p>{t.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
