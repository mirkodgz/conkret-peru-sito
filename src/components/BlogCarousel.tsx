'use client'

import { useEffect, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { MotionPreset } from '@/components/ui/MotionPreset'
import { MatterButton } from '@/components/ui/MatterButton'

export type BlogPost = {
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    author: string
    blogLink: string
    authorLink: string
}

type BlogCarouselProps = {
    blogPosts: BlogPost[]
}

const BlogCarousel = ({ blogPosts }: BlogCarouselProps) => {
    const [api, setApi] = useState<CarouselApi>()
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const displayPosts = [...blogPosts, ...blogPosts, ...blogPosts].slice(0, 6)

    useEffect(() => {
        if (!api) return

        const updateScrollState = () => {
            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }

        updateScrollState()
        api.on('select', updateScrollState)
        api.on('reInit', updateScrollState)

        return () => {
            api.off('select', updateScrollState)
            api.off('reInit', updateScrollState)
        }
    }, [api])

    return (
        <section className='w-full flex justify-center py-24 sm:py-32 bg-slate-50 overflow-hidden'>
            <Carousel
                setApi={setApi}
                opts={{
                    align: 'start',
                    loop: true
                }}
                className='w-full max-w-[1400px] px-6 lg:px-12 flex flex-col gap-16'
            >
                <div className='flex flex-wrap items-end justify-between gap-8'>
                    <div className='space-y-6 max-w-3xl'>
                        <MotionPreset
                            component='h2'
                            className='text-5xl font-black md:text-6xl text-slate-900 tracking-tight leading-tight font-["Spline_Sans"]'
                            fade
                            blur
                            slide={{ direction: 'down', offset: 40 }}
                            delay={0.2}
                            transition={{ duration: 0.5 }}
                        >
                            Últimas Novedades
                        </MotionPreset>

                        <MotionPreset
                            component='p'
                            className='text-slate-500 text-xl md:text-2xl leading-relaxed'
                            fade
                            blur
                            slide={{ direction: 'down', offset: 40 }}
                            delay={0.3}
                            transition={{ duration: 0.5 }}
                        >
                            Mantente informado con los últimos desarrollos y avances tecnológicos en construcción.
                        </MotionPreset>
                    </div>

                    <div className='flex items-center gap-4 pb-2'>
                        <MatterButton
                            size='icon-lg'
                            onClick={() => api?.scrollPrev()}
                            disabled={!canScrollPrev}
                            className='disabled:opacity-30'
                        >
                            <ArrowLeftIcon className="w-6 h-6" />
                        </MatterButton>
                        <MatterButton
                            size='icon-lg'
                            onClick={() => api?.scrollNext()}
                            disabled={!canScrollNext}
                            className='disabled:opacity-30'
                        >
                            <ArrowRightIcon className="w-6 h-6" />
                        </MatterButton>
                    </div>
                </div>

                <div className='w-full'>
                    <CarouselContent className='-ml-[15px]'>
                        {displayPosts.map((post, index) => (
                            <CarouselItem key={index} className='pl-[15px] md:basis-1/2 lg:basis-1/3'>
                                <div className="py-8 h-full">
                                    <div className='h-full border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group rounded-[40px] overflow-hidden flex flex-col'>
                                        <div className='overflow-hidden aspect-16/10 bg-slate-100 relative shrink-0'>
                                            <a href={post.blogLink} className="block w-full h-full">
                                                <img
                                                    src={post.imageUrl}
                                                    alt={post.imageAlt}
                                                    className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110'
                                                />
                                            </a>
                                        </div>

                                        <div className='flex flex-col flex-1 p-10 sm:p-14 space-y-8 pb-16'>
                                            <h3 className='text-2xl sm:text-3xl font-black leading-tight text-slate-900 group-hover:text-primary transition-colors duration-300 line-clamp-2' style={{ fontFamily: 'Spline Sans, sans-serif' }}>
                                                <a href={post.blogLink}>{post.title}</a>
                                            </h3>

                                            <p className='text-slate-600 text-lg leading-relaxed line-clamp-3 font-medium flex-1'>
                                                {post.description}
                                            </p>

                                            <div className="pt-10 border-t border-slate-100 mt-auto">
                                                <a href={post.blogLink} className="inline-flex items-center gap-4 text-primary font-black text-sm tracking-[0.2em] uppercase whitespace-nowrap">
                                                    Leer Artículo <span className="text-3xl">→</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </div>
            </Carousel>
        </section>
    )
}

export default BlogCarousel
