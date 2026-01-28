import Features from '@/components/shadcn-studio/blocks/features-section-16/features-section-16'

const featureData = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-29.png',
    darkSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-29-dark.png',
    title: 'Customisable Dashboard',
    subTitle: 'Our Best Features',
    description: 'Create dashboards with ShadCN Studio that provide real-time insights.',
    href: '#'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-30.png',
    darkSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-30-dark.png',
    title: 'Financial Goal Tracking',
    subTitle: 'Progression',
    description: 'Create dashboards with ShadCN Studio that provide real-time insights.',
    href: '#'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-31.png',
    darkSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-31-dark.png',
    title: 'Cash Flow Management',
    subTitle: 'Management',
    description: 'Create dashboards with ShadCN Studio that provide real-time insights.',
    href: '#'
  }
]

const FeaturesPage = () => {
  return <Features featureData={featureData} />
}

export default FeaturesPage
