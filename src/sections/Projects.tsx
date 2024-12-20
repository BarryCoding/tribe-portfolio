import Image from 'next/image'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { portfolioProjects } from '@/constants/mock'

export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences'
        />
        <div className='mt-10 flex flex-col gap-20 md:mt-20'>
          {portfolioProjects.map((p) => (
            <Card key={p.title} className='px-8 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16'>
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <span className='inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent'>
                    <span>{p.company}</span>
                    <span>&bull;</span>
                    <span>{p.year}</span>
                  </span>
                  <h3 className='mt-2 font-serif text-2xl md:mt-5 md:text-4xl'>{p.title}</h3>
                  <hr className='mt-4 border-t-2 border-white/5 md:mt-5' />
                  <ul className='mt-4 flex flex-col gap-4 md:mt-5'>
                    {p.results.map((r) => (
                      <li key={r.title} className='flex gap-2 text-sm text-white/50 md:text-base'>
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{r.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.link}
                    className='mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto'
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className='size-4' />
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    src={p.image}
                    alt={p.title}
                    className='-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
