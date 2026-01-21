import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import blogHero from '@/assets/blog-hero.jpg';
import powerWashingImg from '@/assets/power-washing.jpg';
import gutterCleaningImg from '@/assets/gutter-cleaning.jpg';
import windowCleaningImg from '@/assets/window-cleaning.jpg';

const blogPosts = [
  {
    title: 'Residential Power Washing: The Ultimate Guide to Cleaner Homes',
    excerpt: 'Take a walk around your home and look closely at the siding, driveway, or deck—chances are you\'ll spot dirt, mildew, and grime that\'s been building up over time.',
    image: powerWashingImg,
    date: 'January 15, 2025',
    category: 'Power Washing',
    slug: 'residential-power-washing-guide',
  },
  {
    title: 'Exterior Power Washing in Chicago: Seasonal Tips for Homeowners',
    excerpt: 'Chicago homeowners know that our city\'s weather can be unforgiving. From icy winters packed with road salt to humid summers, your home\'s exterior takes a beating.',
    image: powerWashingImg,
    date: 'January 10, 2025',
    category: 'Power Washing',
    slug: 'exterior-power-washing-chicago-seasonal-tips',
  },
  {
    title: 'Affordable Gutter Cleaning in Chicago: Seasonal Tips From Local Experts',
    excerpt: 'If you own a home in Chicago, you already know how unpredictable the weather can be. One week it\'s heavy rain, the next it\'s snow and ice.',
    image: gutterCleaningImg,
    date: 'January 5, 2025',
    category: 'Gutter Cleaning',
    slug: 'affordable-gutter-cleaning-chicago',
  },
  {
    title: 'Residential Gutter Cleaning Mistakes to Avoid This Year',
    excerpt: 'Let\'s be honest—gutter cleaning probably isn\'t at the top of your weekend to-do list. But ignoring it (or doing it wrong) can lead to serious problems.',
    image: gutterCleaningImg,
    date: 'December 28, 2024',
    category: 'Gutter Cleaning',
    slug: 'gutter-cleaning-mistakes-to-avoid',
  },
  {
    title: 'Searching for Window Cleaning Near Me? Here\'s How to Avoid Common Mistakes',
    excerpt: 'You type "window cleaning near me" into your search bar and dozens of results pop up. They all promise sparkling windows, but how do you choose?',
    image: windowCleaningImg,
    date: 'December 20, 2024',
    category: 'Window Cleaning',
    slug: 'window-cleaning-near-me-how-to-avoid-mistakes',
  },
  {
    title: 'Top Residential Window Cleaning Services in Wheeling, IL',
    excerpt: 'Ever noticed how much brighter and fresher your home feels when the windows are clean? It\'s not just your imagination—clean windows make a real difference.',
    image: windowCleaningImg,
    date: 'December 15, 2024',
    category: 'Window Cleaning',
    slug: 'residential-window-cleaning-wheeling-il',
  },
  {
    title: 'From Sidewalks to Siding: What Pressure Cleaning Can Do for Your Chicago Property',
    excerpt: 'Chicago weather is no joke. Between lake-effect snow, gritty wind, and the grime that builds up after a long winter, your property needs some serious TLC.',
    image: powerWashingImg,
    date: 'December 10, 2024',
    category: 'Power Washing',
    slug: 'pressure-cleaning-services-chicago',
  },
  {
    title: 'The Top 5 Surfaces That Benefit Most From Pressure Cleaning',
    excerpt: 'Ever look at your driveway or deck and think, "Was it always this dirty?" You\'re not imagining things—over time, grime, mold, and stains accumulate.',
    image: powerWashingImg,
    date: 'December 5, 2024',
    category: 'Power Washing',
    slug: 'surfaces-that-benefit-from-pressure-cleaning',
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={blogHero} alt="Exterior Cleaning Tips Blog" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Residential Exterior Cleaning Tips
              </h1>
              <p className="text-lg text-white/90 mb-4">
                Expert advice and tips for maintaining your home's exterior. Learn from the professionals at Thomas Window Cleaning.
              </p>
              <p className="text-white/80">
                Discover the best practices for window cleaning, gutter maintenance, and power washing to keep your property looking its best.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card overflow-hidden group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Professional Cleaning Services?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Don't want to DIY? Let the experts handle it. Contact Thomas Window Cleaning for professional results.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BlogPage;
