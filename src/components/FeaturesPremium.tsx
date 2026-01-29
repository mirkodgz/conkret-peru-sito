'use client'

import { MotionPreset } from '@/components/ui/MotionPreset'
import { BorderBeam } from '@/components/ui/BorderBeam'

const featureData = [
    {
        src: 'https://res.cloudinary.com/dskliu1ig/image/upload/v1769563933/conkret-peru-concreto-listo_dwaisx.webp',
        title: 'Entrega Puntual',
        description: 'Mixers despachados con GPS para asegurar la llegada exacta a tu obra en todo Lima.',
        href: '/proyectos/'
    },
    {
        src: 'https://res.cloudinary.com/dskliu1ig/image/upload/v1769561918/concreto-a-medida_s7oyof.webp',
        title: 'Calidad Certificada',
        description: 'Dosificación industrializada por peso que garantiza la resistencia f\'c contratada.',
        href: '/concreto-listo/'
    },
    {
        src: 'https://res.cloudinary.com/dskliu1ig/image/upload/v1769562772/conkret-peru-hero_vtmbcr.webp',
        title: 'Asesoría Técnica',
        description: 'Ingenieros especialistas disponibles para recomendarte la mejor mezcla para tu proyecto.',
        href: '/contacto/'
    }
]

export default function FeaturesPremium() {
    return (
        <section className='w-full flex justify-center py-20 sm:py-28 bg-[#fff2f2]'>
            <div className='w-full max-w-[1280px] px-6 lg:px-12 flex flex-col items-center'>
                {/* Header - Centered */}
                <div className='mb-20 flex flex-col items-center space-y-4 text-center max-w-4xl mx-auto'>
                    <MotionPreset
                        component='h2'
                        className='text-4xl font-black md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight'
                        fade
                        blur
                        slide={{ direction: 'up', offset: 30 }}
                        delay={0.2}
                        transition={{ duration: 0.5 }}
                    >
                        Maximiza el potencial de tu obra con <span className="text-primary italic">CONKRET</span>
                    </MotionPreset>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center">
                        Soluciones integrales diseñadas para garantizar la eficiencia, calidad y seguridad que tu proyecto necesita.
                    </p>
                </div>

                {/* Grid Container - Centered */}
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full'>
                    {featureData.map((item, index) => (
                        <MotionPreset
                            key={item.title}
                            fade
                            slide={{ direction: 'up', offset: 20 }}
                            blur
                            delay={0.1 + 0.1 * index}
                            transition={{ duration: 0.5 }}
                            className="h-full w-full"
                        >
                            <div className='h-full w-full group relative bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col'>
                                {/* Secondary BorderBeam for dual effect */}
                                <BorderBeam
                                    duration={8}
                                    size={300}
                                    borderWidth={1.5}
                                    colorFrom="#e40323"
                                    colorTo="#b3021b"
                                    className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                />

                                {/* Image Container */}
                                <div className='w-full h-64 overflow-hidden relative bg-slate-100'>
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className='px-8 pb-8 pt-0 flex flex-col items-center grow relative z-10 w-full text-center'>
                                    <h3 className='text-2xl font-bold text-slate-900 leading-snug mt-[15px] block'> {item.title}</h3>
                                    <p className='text-slate-600 leading-relaxed text-base mt-2'>{item.description}</p>
                                </div>
                            </div>
                        </MotionPreset>
                    ))}
                </div>
            </div>
        </section>
    )
}
