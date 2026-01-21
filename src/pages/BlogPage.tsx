import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import blogHero from '@/assets/blog-hero.jpg';

// Blog tile images from source - Page 1
import powerWashingGuideTile from '@/assets/blog/power-washing-guide-tile.png';
import powerWashingSeasonalTile from '@/assets/blog/power-washing-seasonal-tile.jpg';
import gutterCleaningAffordableTile from '@/assets/blog/gutter-cleaning-affordable-tile.jpg';
import gutterCleaningMistakesTile from '@/assets/blog/gutter-cleaning-mistakes-tile.jpg';
import windowCleaningNearMeTile from '@/assets/blog/window-cleaning-near-me-tile.webp';
import windowCleaningWheelingTile from '@/assets/blog/window-cleaning-wheeling-tile.jpg';
import pressureCleaningChicagoTile from '@/assets/blog/pressure-cleaning-chicago-tile.jpg';
import surfacesPressureCleaningTile from '@/assets/blog/surfaces-pressure-cleaning-tile.jpg';
import windowCleanersWheelingTile from '@/assets/blog/window-cleaners-wheeling-tile.jpg';

// Blog tile images from source - Page 2
import hireProfessionalWindowCleaningTile from '@/assets/blog/hire-professional-window-cleaning-tile.jpg';
import beginnersGuidePowerWashingTile from '@/assets/blog/beginners-guide-power-washing-tile.jpg';
import localGuidePowerWashingWheelingTile from '@/assets/blog/local-guide-power-washing-wheeling-tile.jpg';
import windowCleaningChicagoTile from '@/assets/blog/window-cleaning-chicago-tile.jpg';
import windowWashersVsDiyTile from '@/assets/blog/window-washers-vs-diy-tile.avif';
import gutterCleaningMythsTile from '@/assets/blog/gutter-cleaning-myths-tile.jpg';
import gutterCleaningScheduleTile from '@/assets/blog/gutter-cleaning-schedule-tile.jpg';
import windowWashingBenefitsTile from '@/assets/blog/window-washing-benefits-tile.jpeg';
import chicagoWindowCleanersGuideTile from '@/assets/blog/chicago-window-cleaners-guide-tile.jpg';

// Blog tile images from source - Page 3
import gutterGuardsTile from '@/assets/blog/gutter-guards-tile.jpg';
import sparklingCleanWindowsTile from '@/assets/blog/sparkling-clean-windows-tile.jpg';

const blogPosts = [
  // Page 1 posts
  {
    title: 'Residential Power Washing: The Ultimate Guide to Cleaner Homes',
    excerpt: 'Take a walk around your home and look closely at the siding, driveway, or deck—chances are you\'ll spot dirt, mildew, and grime that\'s been building up over time.',
    image: powerWashingGuideTile,
    date: 'January 15, 2025',
    category: 'Power Washing',
    slug: 'residential-power-washing-guide',
    readTime: '8 min read',
  },
  {
    title: 'Exterior Power Washing in Chicago: Seasonal Tips for Homeowners',
    excerpt: 'Chicago homeowners know that our city\'s weather can be unforgiving. From icy winters packed with road salt to humid summers, your home\'s exterior takes a beating.',
    image: powerWashingSeasonalTile,
    date: 'January 10, 2025',
    category: 'Power Washing',
    slug: 'exterior-power-washing-chicago-seasonal-tips',
    readTime: '6 min read',
  },
  {
    title: 'Affordable Gutter Cleaning in Chicago: Seasonal Tips From Local Experts',
    excerpt: 'If you own a home in Chicago, you already know how unpredictable the weather can be. One week it\'s heavy rain, the next it\'s snow and ice.',
    image: gutterCleaningAffordableTile,
    date: 'January 5, 2025',
    category: 'Gutter Cleaning',
    slug: 'affordable-gutter-cleaning-chicago',
    readTime: '10 min read',
  },
  {
    title: 'Residential Gutter Cleaning Mistakes to Avoid This Year',
    excerpt: 'Let\'s be honest—gutter cleaning probably isn\'t at the top of your weekend to-do list. But ignoring it (or doing it wrong) can lead to serious problems.',
    image: gutterCleaningMistakesTile,
    date: 'December 28, 2024',
    category: 'Gutter Cleaning',
    slug: 'gutter-cleaning-mistakes-to-avoid',
    readTime: '9 min read',
  },
  {
    title: 'Searching for Window Cleaning Near Me? Here\'s How to Avoid Common Mistakes',
    excerpt: 'You type "window cleaning near me" into your search bar and dozens of results pop up. They all promise sparkling windows, but how do you choose?',
    image: windowCleaningNearMeTile,
    date: 'December 20, 2024',
    category: 'Window Cleaning',
    slug: 'window-cleaning-near-me-how-to-avoid-mistakes',
    readTime: '7 min read',
  },
  {
    title: 'Top Residential Window Cleaning Services in Wheeling, IL',
    excerpt: 'Ever noticed how much brighter and fresher your home feels when the windows are clean? It\'s not just your imagination—clean windows make a real difference.',
    image: windowCleaningWheelingTile,
    date: 'December 15, 2024',
    category: 'Window Cleaning',
    slug: 'residential-window-cleaning-wheeling-il',
    readTime: '8 min read',
  },
  {
    title: 'From Sidewalks to Siding: What Pressure Cleaning Can Do for Your Chicago Property',
    excerpt: 'Chicago weather is no joke. Between lake-effect snow, gritty wind, and the grime that builds up after a long winter, your property needs some serious TLC.',
    image: pressureCleaningChicagoTile,
    date: 'December 10, 2024',
    category: 'Power Washing',
    slug: 'pressure-cleaning-services-chicago',
    readTime: '7 min read',
  },
  {
    title: 'The Top 5 Surfaces That Benefit Most From Pressure Cleaning',
    excerpt: 'Ever look at your driveway or deck and think, "Was it always this dirty?" You\'re not imagining things—over time, grime, mold, and stains accumulate.',
    image: surfacesPressureCleaningTile,
    date: 'December 5, 2024',
    category: 'Power Washing',
    slug: 'surfaces-that-benefit-from-pressure-cleaning',
    readTime: '6 min read',
  },
  {
    title: 'Why Wheeling Homeowners Rely on Our Window Cleaners Year-Round',
    excerpt: 'Ever notice how a freshly cleaned window can completely change the feel of your home? Suddenly, rooms feel brighter, the view looks sharper, and everything just feels cleaner.',
    image: windowCleanersWheelingTile,
    date: 'November 28, 2024',
    category: 'Window Cleaning',
    slug: 'window-cleaners-serving-wheeling',
    readTime: '8 min read',
  },
  // Page 2 posts
  {
    title: '7 Reasons to Hire a Professional Window Cleaning Service for Your Home',
    excerpt: 'When was the last time you truly looked at your windows—not through them, but at them? If you\'re like most homeowners, window cleaning isn\'t exactly at the top of your weekend to-do list.',
    image: hireProfessionalWindowCleaningTile,
    date: 'November 20, 2024',
    category: 'Window Cleaning',
    slug: 'hire-professional-window-cleaning-service',
    readTime: '10 min read',
  },
  {
    title: 'A Beginner\'s Guide to Power Washing: Surfaces, Frequency, and Safety Tips',
    excerpt: 'There\'s something incredibly satisfying about watching years of grime vanish in seconds. Whether it\'s a stained driveway, a mossy deck, or dusty siding, the results of a good power wash are immediate.',
    image: beginnersGuidePowerWashingTile,
    date: 'November 15, 2024',
    category: 'Power Washing',
    slug: 'beginners-guide-to-power-washing',
    readTime: '12 min read',
  },
  {
    title: 'Local Guide to Power Washing in Wheeling, IL: What Homeowners Should Know',
    excerpt: 'Is your home\'s exterior looking a little worse for wear after another tough Midwest winter? You\'re not alone. In Wheeling, IL, changing seasons, humidity, and debris can take a toll.',
    image: localGuidePowerWashingWheelingTile,
    date: 'November 10, 2024',
    category: 'Power Washing',
    slug: 'local-guide-to-power-washing-wheeling-il',
    readTime: '11 min read',
  },
  {
    title: 'Window Cleaning in Chicago: Why Professional Service Matters in the Windy City',
    excerpt: 'Let\'s be honest—Chicago is tough on windows. Between the constant wind, unpredictable weather, and city grime, it doesn\'t take long before your once-clear windows start looking streaky.',
    image: windowCleaningChicagoTile,
    date: 'November 5, 2024',
    category: 'Window Cleaning',
    slug: 'window-cleaning-chicago-professional-service',
    readTime: '9 min read',
  },
  {
    title: 'Window Washers vs. DIY: Why Professional Window Cleaning Is Worth It',
    excerpt: 'We all know the feeling—when your windows are streaked, dirty, or covered in fingerprints, it can feel like you\'re looking through a foggy lens.',
    image: windowWashersVsDiyTile,
    date: 'October 28, 2024',
    category: 'Window Cleaning',
    slug: 'window-washers-vs-diy-window-cleaning',
    readTime: '9 min read',
  },
  {
    title: 'Gutter Cleaning Myths Debunked: What Homeowners Need to Stop Believing',
    excerpt: 'Let\'s be honest—gutter cleaning isn\'t exactly at the top of most homeowners\' to-do lists. It\'s one of those chores that often gets pushed aside until there\'s a real problem.',
    image: gutterCleaningMythsTile,
    date: 'October 20, 2024',
    category: 'Gutter Cleaning',
    slug: 'gutter-cleaning-myths-debunked',
    readTime: '11 min read',
  },
  {
    title: 'Gutter Cleaning in Chicago: How Often Should You Schedule Maintenance?',
    excerpt: 'Gutters might not be the most exciting part of home maintenance, but they play a crucial role in protecting your home from water damage and structural issues.',
    image: gutterCleaningScheduleTile,
    date: 'October 15, 2024',
    category: 'Gutter Cleaning',
    slug: 'gutter-cleaning-chicago-schedule-maintenance',
    readTime: '8 min read',
  },
  {
    title: 'Top Benefits of Regular Window Washing for Homes and Businesses',
    excerpt: 'Have you ever noticed how much better a space feels when the windows are sparkling clean? Whether it\'s your cozy living room or the front windows of your business, clean glass makes all the difference.',
    image: windowWashingBenefitsTile,
    date: 'October 10, 2024',
    category: 'Window Cleaning',
    slug: 'window-washing-benefits-homes-businesses',
    readTime: '10 min read',
  },
  {
    title: '2025 Guide to Window Cleaning: How Chicago Window Cleaners Keep Your Glass Spotless',
    excerpt: 'Have you ever looked out your window and noticed streaks, smudges, or a layer of grime blocking your view? You\'re not alone. Keeping windows spotless in Chicago can feel like a never-ending battle.',
    image: chicagoWindowCleanersGuideTile,
    date: 'October 5, 2024',
    category: 'Window Cleaning',
    slug: 'chicago-window-cleaners-guide-spotless-glass',
    readTime: '11 min read',
  },
  // Page 3 posts
  {
    title: 'Gutter Guards: Are They Worth the Investment?',
    excerpt: 'Gutter guards are designed to keep leaves, twigs, and other debris out of your gutters, allowing rainwater to flow freely. But are they really worth the investment?',
    image: gutterGuardsTile,
    date: 'September 25, 2024',
    category: 'Gutter Cleaning',
    slug: 'gutter-guards-worth-investment',
    readTime: '5 min read',
  },
  {
    title: 'Top 5 Tips for Sparkling Clean Windows',
    excerpt: 'Cleaning your windows without hiring a professional can be time-consuming and messy without the right tools and techniques. However, if you prefer to do it yourself, having the proper window cleaning tips can help.',
    image: sparklingCleanWindowsTile,
    date: 'September 20, 2024',
    category: 'Window Cleaning',
    slug: 'top-5-tips-sparkling-clean-windows',
    readTime: '5 min read',
  },
];

// Get unique categories
const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return blogPosts;
    return blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const getCategoryCount = (category: string) => {
    if (category === 'All') return blogPosts.length;
    return blogPosts.filter(post => post.category === category).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={blogHero} alt="Exterior Cleaning Tips Blog" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
                Residential Exterior Cleaning Tips
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-white/90 mb-4"
              >
                Expert advice and tips for maintaining your home's exterior. Learn from the professionals at Thomas Window Cleaning.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-white/80 mb-8"
              >
                Discover the best practices for window cleaning, gutter maintenance, and power washing to keep your property looking its best.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="py-6 border-b border-border/50">
          <div className="container mx-auto px-4">
            {/* Service Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {categories.slice(1).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Filter Tabs with Counts */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={`tab-${category}`}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {category} ({getCategoryCount(category)})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="grid md:grid-cols-2 gap-6 bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  {/* Featured Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-md">
                      Featured
                    </span>
                  </div>

                  {/* Featured Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
                      <span className="text-primary font-medium">{featuredPost.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            </div>
          </section>
        )}

        {/* Latest Articles Grid */}
        {remainingPosts.length > 0 && (
          <section className="py-8 md:py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
                <span className="text-sm text-muted-foreground">
                  {remainingPosts.length} article{remainingPosts.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Articles Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="block bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg h-full"
                    >
                      {/* Image with Category Badge */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Professional Cleaning Services?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Don't want to DIY? Let the experts handle it. Contact Thomas Window Cleaning for professional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg">
                <Phone className="w-5 h-5" />
                Call Now: (847) 404-3398
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-lg">
                <ArrowRight className="w-5 h-5" />
                Get Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BlogPage;
