'use client'

import { MapPin, ShieldCheck, Headset, ArrowRight } from 'lucide-react'
import { MotionPreset } from '@/components/ui/MotionPreset'
import { BorderBeam } from '@/components/ui/BorderBeam'
import { cn } from '@/lib/utils'

const featureData = [
    {
        icon: <MapPin className="w-8 h-8" />,
        title: 'Entrega Puntual',
        subTitle: 'Logística Inteligente',
        description: 'Mixers despachados con GPS para asegurar la llegada exacta a tu obra en todo Lima.',
        href: '/proyectos/'
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: 'Calidad Certificada',
        subTitle: 'Precisión Industrial',
        description: 'Dosificación industrializada por peso que garantiza la resistencia f\'c contratada.',
        href: '/concreto-listo/'
    },
    {
        icon: <Headset className="w-8 h-8" />,
        title: 'Asesoría Técnica',
        subTitle: 'Soporte de Expertos',
        description: 'Ingenieros especialistas disponibles para recomendarte la mejor mezcla para tu proyecto.',
        href: '/contacto/'
    }
]

export default function FeaturesPremium() {
    return (
        <section className='overflow-hidden py-24 sm:py-32 bg-slate-50/50'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='mb-16 space-y-4 text-center max-w-2xl mx-auto'>
                    <MotionPreset fade blur slide={{ direction: 'up', offset: 20 }} transition={{ duration: 0.5 }}>
                        <div className='text-red-600 text-sm font-bold uppercase tracking-widest'>Excelencia Operativa</div>
                    </MotionPreset>
                    <MotionPreset
                        component='h2'
                        className='text-3xl font-black md:text-4xl lg:text-5xl text-slate-900 tracking-tight'
                        fade
                        blur
                        slide={{ direction: 'up', offset: 30 }}
                        delay={0.2}
                        transition={{ duration: 0.5 }}
                    >
                        ¿Por qué elegir <span className="text-red-600">CONKRET</span>?
                    </MotionPreset>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
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
                            <div className='group relative h-full bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col'>
                                <BorderBeam
                                    duration={8}
                                    size={300}
                                    borderWidth={2}
                                    className='opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                                />

                                <div className='flex flex-col gap-8 grow relative z-10'>
                                    <div className='bg-red-50 text-red-600 w-20 h-20 rounded-[1.5rem] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6'>
                                        {item.icon}
                                    </div>

                                    <div className='space-y-4'>
                                        <p className='text-red-600 font-bold text-xs uppercase tracking-widest'>{item.subTitle}</p>
                                        <h3 className='text-2xl font-black text-slate-900'> {item.title}</h3>
                                        <p className='text-slate-600 leading-relaxed text-lg'>{item.description}</p>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-50 relative z-10">
                                    <a
                                        href={item.href}
                                        className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all duration-300"
                                    >
                                        Saber más
                                        <ArrowRight className="w-5 h-5" />
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
