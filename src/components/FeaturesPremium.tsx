'use client'

import { MotionPreset } from '@/components/ui/MotionPreset'
import { BorderBeam } from '@/components/ui/BorderBeam'

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
        <section className='w-full flex justify-center py-24 sm:py-32 bg-[#fafafa]'>
            <div className='w-full max-w-[1400px] px-6 lg:px-12 flex flex-col items-center'>
                {/* Header - Centered */}
                <div className='mb-32 space-y-8 text-center max-w-5xl mx-auto'>
                    <MotionPreset fade blur slide={{ direction: 'up', offset: 20 }} transition={{ duration: 0.5 }}>
                        <div className='text-primary text-sm font-black uppercase tracking-[0.3em]'>Nuestros Diferenciales</div>
                    </MotionPreset>
                    <MotionPreset
                        component='h2'
                        className='text-5xl font-black md:text-6xl lg:text-8xl text-slate-900 tracking-tight leading-[1.05]'
                        fade
                        blur
                        slide={{ direction: 'up', offset: 30 }}
                        delay={0.2}
                        transition={{ duration: 0.5 }}
                    >
                        Maximiza el potencial de tu obra con <span className="text-primary italic">CONKRET</span>
                    </MotionPreset>
                </div>

                {/* Grid Container - Centered */}
                <div className='grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center'>
                    {featureData.map((item, index) => (
                        <MotionPreset
                            key={item.title}
                            fade
                            slide={{ direction: 'up', offset: 40 }}
                            blur
                            delay={0.3 + 0.1 * index}
                            transition={{ duration: 0.7 }}
                            className="h-full w-full flex justify-center"
                        >
                            <div className='h-full w-full max-w-[420px] group relative bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col text-center items-center'>
                                {/* Secondary BorderBeam for dual effect */}
                                <BorderBeam
                                    duration={8}
                                    size={400}
                                    borderWidth={2}
                                    colorFrom="#e40323"
                                    colorTo="#b3021b"
                                    className='opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                                />

                                <div className='p-14 flex flex-col gap-14 grow relative z-10 w-full'>
                                    {/* Image Container */}
                                    <div className='bg-[#f3f4f6] flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] relative shadow-inner'>
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                        />
                                    </div>

                                    <div className='space-y-10 flex flex-col items-center'>
                                        <p className='text-slate-400 text-xs font-black uppercase tracking-[0.3em]'>{item.subTitle}</p>
                                        <h3 className='text-4xl font-black text-slate-900 leading-tight px-2'> {item.title}</h3>
                                        <p className='text-slate-500 leading-relaxed text-xl font-medium px-4'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </MotionPreset>
                    ))}
                </div>
            </div>
        </section>
    )
}
