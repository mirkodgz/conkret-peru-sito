import BlogCarousel from '@/components/shadcn-studio/blocks/blog-component-16/blog-component-16'

const blogPosts = [
  {
    title: 'How Robo Transforms Your Home',
    description:
      'Learn how Robo is helping homeowners automate cleaning and repair tasks, saving time and effort while enhancing home efficiency.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-12.png',
    imageAlt: 'Robot cleaning home interior',
    author: 'John Smith',
    blogLink: '#',
    authorLink: '#'
  },
  {
    title: 'The Future of Smart Home Robotics',
    description:
      'Explore the exciting future of home robotics and how AI-powered devices like Robo are paving the way for smarter, more connected homes.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-13.png',
    imageAlt: 'Smart home robot with family',
    author: 'Emily Carter',
    blogLink: '#',
    authorLink: '#'
  },
  {
    title: 'AI-Powered Home Automation Revolution',
    description:
      'Discover how artificial intelligence is revolutionizing home automation, making everyday tasks easier and more efficient than ever before.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-11.png',
    imageAlt: 'AI home automation system',
    author: 'Michael Chen',
    blogLink: '#',
    authorLink: '#'
  },
  {
    title: 'Smart Cleaning: The Next Generation',
    description:
      'Experience the next generation of smart cleaning technology that learns your home layout and adapts to your cleaning preferences automatically.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-10.png',
    imageAlt: 'Robot vacuum in modern home',
    author: 'Sarah Johnson',
    blogLink: '#',
    authorLink: '#'
  }
]

const BlogPage = () => {
  return <BlogCarousel blogPosts={blogPosts} />
}

export default BlogPage
