import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
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
  },
  {
    title: 'Exterior Power Washing in Chicago: Seasonal Tips for Homeowners',
    excerpt: 'Chicago homeowners know that our city\'s weather can be unforgiving. From icy winters packed with road salt to humid summers, your home\'s exterior takes a beating.',
    image: powerWashingSeasonalTile,
    date: 'January 10, 2025',
    category: 'Power Washing',
    slug: 'exterior-power-washing-chicago-seasonal-tips',
  },
  {
    title: 'Affordable Gutter Cleaning in Chicago: Seasonal Tips From Local Experts',
    excerpt: 'If you own a home in Chicago, you already know how unpredictable the weather can be. One week it\'s heavy rain, the next it\'s snow and ice.',
    image: gutterCleaningAffordableTile,
    date: 'January 5, 2025',
    category: 'Gutter Cleaning',
    slug: 'affordable-gutter-cleaning-chicago',
  },
  {
    title: 'Residential Gutter Cleaning Mistakes to Avoid This Year',
    excerpt: 'Let\'s be honest—gutter cleaning probably isn\'t at the top of your weekend to-do list. But ignoring it (or doing it wrong) can lead to serious problems.',
    image: gutterCleaningMistakesTile,
    date: 'December 28, 2024',
    category: 'Gutter Cleaning',
    slug: 'gutter-cleaning-mistakes-to-avoid',
  },
  {
    title: 'Searching for Window Cleaning Near Me? Here\'s How to Avoid Common Mistakes',
    excerpt: 'You type "window cleaning near me" into your search bar and dozens of results pop up. They all promise sparkling windows, but how do you choose?',
    image: windowCleaningNearMeTile,
    date: 'December 20, 2024',
    category: 'Window Cleaning',
    slug: 'window-cleaning-near-me-how-to-avoid-mistakes',
  },
  {
    title: 'Top Residential Window Cleaning Services in Wheeling, IL',
    excerpt: 'Ever noticed how much brighter and fresher your home feels when the windows are clean? It\'s not just your imagination—clean windows make a real difference.',
    image: windowCleaningWheelingTile,
    date: 'December 15, 2024',
    category: 'Window Cleaning',
    slug: 'residential-window-cleaning-wheeling-il',
  },
  {
    title: 'From Sidewalks to Siding: What Pressure Cleaning Can Do for Your Chicago Property',
    excerpt: 'Chicago weather is no joke. Between lake-effect snow, gritty wind, and the grime that builds up after a long winter, your property needs some serious TLC.',
    image: pressureCleaningChicagoTile,
    date: 'December 10, 2024',
    category: 'Power Washing',
    slug: 'pressure-cleaning-services-chicago',
  },
  {
    title: 'The Top 5 Surfaces That Benefit Most From Pressure Cleaning',
    excerpt: 'Ever look at your driveway or deck and think, "Was it always this dirty?" You\'re not imagining things—over time, grime, mold, and stains accumulate.',
    image: surfacesPressureCleaningTile,
    date: 'December 5, 2024',
    category: 'Power Washing',
    slug: 'surfaces-that-benefit-from-pressure-cleaning',
  },
  {
    title: 'Why Wheeling Homeowners Rely on Our Window Cleaners Year-Round',
    excerpt: 'Ever notice how a freshly cleaned window can completely change the feel of your home? Suddenly, rooms feel brighter, the view looks sharper, and everything just feels cleaner.',
    image: windowCleanersWheelingTile,
    date: 'November 28, 2024',
    category: 'Window Cleaning',
    slug: 'window-cleaners-serving-wheeling',
  },
  // Page 2 posts
  {
    title: '7 Reasons to Hire a Professional Window Cleaning Service for Your Home',
    excerpt: 'When was the last time you truly looked at your windows—not through them, but at them? If you\'re like most homeowners, window cleaning isn\'t exactly at the top of your weekend to-do list.',
    image: hireProfessionalWindowCleaningTile,
    date: 'November 20, 2024',
    category: 'Window Cleaning',
    slug: 'hire-professional-window-cleaning-service',
  },
  {
    title: 'A Beginner\'s Guide to Power Washing: Surfaces, Frequency, and Safety Tips',
    excerpt: 'There\'s something incredibly satisfying about watching years of grime vanish in seconds. Whether it\'s a stained driveway, a mossy deck, or dusty siding, the results of a good power wash are immediate.',
    image: beginnersGuidePowerWashingTile,
    date: 'November 15, 2024',
    category: 'Power Washing',
    slug: 'beginners-guide-to-power-washing',
  },
  {
    title: 'Local Guide to Power Washing in Wheeling, IL: What Homeowners Should Know',
    excerpt: 'Is your home\'s exterior looking a little worse for wear after another tough Midwest winter? You\'re not alone. In Wheeling, IL, changing seasons, humidity, and debris can take a toll.',
    image: localGuidePowerWashingWheelingTile,
    date: 'November 10, 2024',
    category: 'Power Washing',
    slug: 'local-guide-to-power-washing-wheeling-il',
  },
  {
    title: 'Window Cleaning in Chicago: Why Professional Service Matters in the Windy City',
    excerpt: 'Let\'s be honest—Chicago is tough on windows. Between the constant wind, unpredictable weather, and city grime, it doesn\'t take long before your once-clear windows start looking streaky.',
    image: windowCleaningChicagoTile,
    date: 'November 5, 2024',
    category: 'Window Cleaning',
    slug: 'window-cleaning-chicago-professional-service',
  },
  {
    title: 'Window Washers vs. DIY: Why Professional Window Cleaning Is Worth It',
    excerpt: 'We all know the feeling—when your windows are streaked, dirty, or covered in fingerprints, it can feel like you\'re looking through a foggy lens.',
    image: windowWashersVsDiyTile,
    date: 'October 28, 2024',
    category: 'Window Cleaning',
    slug: 'window-washers-vs-diy-window-cleaning',
  },
  {
    title: 'Gutter Cleaning Myths Debunked: What Homeowners Need to Stop Believing',
    excerpt: 'Let\'s be honest—gutter cleaning isn\'t exactly at the top of most homeowners\' to-do lists. It\'s one of those chores that often gets pushed aside until there\'s a real problem.',
    image: gutterCleaningMythsTile,
    date: 'October 20, 2024',
    category: 'Gutter Cleaning',
    slug: 'gutter-cleaning-myths-debunked',
  },
  {
    title: 'Gutter Cleaning in Chicago: How Often Should You Schedule Maintenance?',
    excerpt: 'Gutters might not be the most exciting part of home maintenance, but they play a crucial role in protecting your home from water damage and structural issues.',
    image: gutterCleaningScheduleTile,
    date: 'October 15, 2024',
    category: 'Gutter Cleaning',
    slug: 'gutter-cleaning-chicago-schedule-maintenance',
  },
  {
    title: 'Top Benefits of Regular Window Washing for Homes and Businesses',
    excerpt: 'Have you ever noticed how much better a space feels when the windows are sparkling clean? Whether it\'s your cozy living room or the front windows of your business, clean glass makes all the difference.',
    image: windowWashingBenefitsTile,
    date: 'October 10, 2024',
    category: 'Window Cleaning',
    slug: 'window-washing-benefits-homes-businesses',
  },
  {
    title: '2025 Guide to Window Cleaning: How Chicago Window Cleaners Keep Your Glass Spotless',
    excerpt: 'Have you ever looked out your window and noticed streaks, smudges, or a layer of grime blocking your view? You\'re not alone. Keeping windows spotless in Chicago can feel like a never-ending battle.',
    image: chicagoWindowCleanersGuideTile,
    date: 'October 5, 2024',
    category: 'Window Cleaning',
    slug: 'chicago-window-cleaners-guide-spotless-glass',
  },
  // Page 3 posts
  {
    title: 'Gutter Guards: Are They Worth the Investment?',
    excerpt: 'Gutter guards are designed to keep leaves, twigs, and other debris out of your gutters, allowing rainwater to flow freely. But are they really worth the investment?',
    image: gutterGuardsTile,
    date: 'September 25, 2024',
    category: 'Gutter Cleaning',
    slug: 'gutter-guards-worth-investment',
  },
  {
    title: 'Top 5 Tips for Sparkling Clean Windows',
    excerpt: 'Cleaning your windows without hiring a professional can be time-consuming and messy without the right tools and techniques. However, if you prefer to do it yourself, having the proper window cleaning tips can help.',
    image: sparklingCleanWindowsTile,
    date: 'September 20, 2024',
    category: 'Window Cleaning',
    slug: 'top-5-tips-sparkling-clean-windows',
  },
];

const BlogPage = () => {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Residential Exterior Cleaning Tips
              </h1>
              <p className="text-lg text-white/90 mb-4">
                Expert advice and tips for maintaining your home's exterior. Learn from the professionals at Thomas Window Cleaning.
              </p>
              <p className="text-white/80 mb-8">
                Discover the best practices for window cleaning, gutter maintenance, and power washing to keep your property looking its best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="glass-card overflow-hidden group"
                >
                  <Link to={`/blog/${post.slug}`}>
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
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

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
