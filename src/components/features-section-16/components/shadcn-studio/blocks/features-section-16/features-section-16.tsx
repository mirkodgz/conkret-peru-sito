import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'
import { BorderBeam } from '@/components/ui/border-beam'

type FeaturesProp = {
  src: string
  darkSrc: string
  title: string
  subTitle: string
  description: string
  href: string
}

const Features = ({ featureData }: { featureData: FeaturesProp[] }) => {
  return (
    <section className='overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <div className='text-primary text-sm font-medium uppercase'>Our Best Features</div>
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            Unleash the full financial potential with our best features
          </MotionPreset>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {featureData.map((item, index) => (
            <MotionPreset
              key={item.title}
              fade
              slide={{ direction: 'down', offset: 50 }}
              blur
              delay={0.5 + 0.5 * index}
              transition={{ duration: 0.9 }}
            >
              <Card className='h-ful group relative'>
                <BorderBeam
                  duration={7}
                  size={400}
                  borderWidth={1.5}
                  className='from-transparent via-[#FE8FB5] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                />
                <BorderBeam
                  duration={7}
                  delay={4}
                  size={400}
                  borderWidth={1.5}
                  className='from-transparent via-[#FFBE7B] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                />
                <CardContent className='flex flex-col gap-6'>
                  <div className='bg-muted flex h-46 w-full flex-col items-center justify-end overflow-hidden rounded-md'>
                    <img
                      src={item.src}
                      alt={item.title}
                      className='relative w-full max-w-68 origin-bottom rounded-md object-cover transition-transform duration-300 group-hover:scale-105 dark:hidden'
                    />
                    <img
                      src={item.darkSrc}
                      alt={item.title}
                      className='relative hidden w-full max-w-68 origin-bottom rounded-md object-cover transition-transform duration-300 group-hover:scale-105 dark:inline-block'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <p className='text-muted-foreground capitalize'>{item.subTitle}</p>
                    <CardTitle className='text-lg font-semibold'> {item.title}</CardTitle>
                    <CardDescription className='text-base'>{item.description}</CardDescription>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size='lg' className='group' asChild>
                    <a href='#'>
                      Learn more
                      <ArrowRightIcon className='transition-transform duration-300 group-hover:translate-x-1' />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
