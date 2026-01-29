import BlogCarousel from './BlogCarousel'

const blogPosts = [
  {
    title: '¿Qué es el Concreto Premezclado?',
    description:
      'Guía completa sobre el concreto premezclado: ventajas, procesos de fabricación y por qué es la mejor elección para tu próxima construcción.',
    imageUrl: 'https://res.cloudinary.com/dskliu1ig/image/upload/v1769563933/conkret-peru-concreto-listo_dwaisx.webp',
    imageAlt: 'Concreto premezclado Conkret',
    author: 'Equipo Técnico Conkret',
    blogLink: '/blog/que-es-concreto-premezclado/',
    authorLink: '#'
  },
  {
    title: 'Mortero Fino vs Grueso: ¿Cuál elegir?',
    description:
      'Conoce las diferencias técnicas entre el mortero fino y grueso, y aprende cuál es el indicado para cada etapa de tu proyecto de acabados.',
    imageUrl: 'https://res.cloudinary.com/dskliu1ig/image/upload/v1769562141/1-4-mortero-grueso_odjo1y.webp',
    imageAlt: 'Mortero embolsado Conkret',
    author: 'Equipo Técnico Conkret',
    blogLink: '/blog/mortero-fino-vs-grueso/',
    authorLink: '#'
  },
  {
    title: 'Ventajas del Tarrajeo Premezclado',
    description:
      'Descubre cómo el tarrajeo premezclado optimiza los tiempos en obra, reduce el desperdicio y garantiza un acabado profesional superior.',
    imageUrl: 'https://res.cloudinary.com/dskliu1ig/image/upload/v1769562601/mezclas-_ehjph8.webp',
    imageAlt: 'Aplicación de tarrajeo premezclado',
    author: 'Equipo Técnico Conkret',
    blogLink: '/blog/tarrajeo-premezclado-ventajas/',
    authorLink: '#'
  }
]

const BlogCarouselSection = () => {
  return <BlogCarousel blogPosts={blogPosts} />
}

export default BlogCarouselSection
