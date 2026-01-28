'use client'

import { ArrowRight } from 'lucide-react'
import { MotionPreset } from '@/components/ui/MotionPreset'
import { BorderBeam } from '@/components/ui/BorderBeam'
import { cn } from '@/lib/utils'

const featureData = [
    {
        src: 'https://res.cloudinary.com/dskliu1ig/image/upload/v1769562772/conkret-peru-hero_vtmbcr.webp',
        title: 'Entrega Puntual',
        subTitle: 'Logística Inteligente',
        description: 'Mixers despachados con GPS para asegurar la llegada exacta a tu obra en todo Lima.',
        href: '/proyectos/'
    },
    {
        src: 'https://res.cloudinary.com/dskliu1ig/image/upload/v1769561918/concreto-a-medida_s7oyof.webp',
        title: 'Calidad Certificada',
        subTitle: 'Precisión Industrial',
        description: 'Dosificación industrializada por peso que garantiza la resistencia f\'c contratada.',
        href: '/concreto-listo/'
    },
    {
        src: 'https://res.cloudinary.com/dskliu1ig/image/upload/v1769562601/mezclas-_ehjph8.webp',
        title: 'Asesoría Técnica',
        subTitle: 'Soporte de Expertos',
        description: 'Ingenieros especialistas disponibles para recomendarte la mejor mezcla para tu proyecto.',
        href: '/contacto/'
    }
]

export default function FeaturesPremium() {
    return (
        <section className='overflow-hidden py-24 sm:py-32 bg-[#fafafa]'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Header - Strictly centered as per target image */}
                <div className='mb-20 space-y-4 text-center max-w-4xl mx-auto'>
                    <MotionPreset fade blur slide={{ direction: 'up', offset: 20 }} transition={{ duration: 0.5 }}>
                        <div className='text-primary text-sm font-black uppercase tracking-[0.25em]'>Nuestros Diferenciales</div>
                    </MotionPreset>
                    <MotionPreset
                        component='h2'
                        className='text-4xl font-black md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]'
                        fade
                        blur
                        slide={{ direction: 'up', offset: 30 }}
                        delay={0.2}
                        transition={{ duration: 0.5 }}
                    >
                        Maximiza el potencial de tu obra con <span className="text-primary">CONKRET</span>
                    </MotionPreset>
                </div>

                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                    {featureData.map((item, index) => (
                        <MotionPreset
                            key={item.title}
                            fade
                            slide={{ direction: 'up', offset: 40 }}
                            blur
                            delay={0.3 + 0.1 * index}
                            transition={{ duration: 0.7 }}
                            className="h-full"
                        >
                            <div className='h-full group relative bg-white border border-slate-200 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col'>
                                {/* Dual BorderBeam Effect for premium touch */}
                                <BorderBeam
                                    duration={8}
                                    size={300}
                                    borderWidth={2}
                                    colorFrom="#e40323"
                                    colorTo="#b3021b"
                                    className='opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                                />

                                <div className='p-8 flex flex-col gap-8 grow relative z-10'>
                                    {/* Image Container - Matches target's boxed style */}
                                    <div className='bg-[#f3f4f6] flex h-56 w-full flex-col items-center justify-center overflow-hidden rounded-xl relative'>
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                                        />
                                    </div>

                                    <div className='space-y-4'>
                                        <p className='text-slate-500 text-sm font-semibold uppercase tracking-wider'>{item.subTitle}</p>
                                        <h3 className='text-2xl font-black text-slate-900 leading-tight'> {item.title}</h3>
                                        <p className='text-slate-600 leading-relaxed text-base font-medium'>{item.description}</p>
                                    </div>
                                </div>

                                <div className="p-8 pt-0 relative z-10">
                                    <a
                                        href={item.href}
                                        className="inline-flex items-center justify-center gap-3 bg-secondary text-white px-8 py-3.5 rounded-xl font-black text-sm hover:bg-primary transition-all duration-300 w-fit shadow-lg shadow-slate-200"
                                    >
                                        Saber más
                                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </MotionPreset>
                    ))}
                </div>
            </div>
        </section>
    )
}
