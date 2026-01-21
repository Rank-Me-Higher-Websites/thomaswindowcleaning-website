import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import powerWashingImg from '@/assets/power-washing.jpg';
import gutterCleaningImg from '@/assets/gutter-cleaning.jpg';
import windowCleaningImg from '@/assets/window-cleaning.jpg';

// Blog post data with full content
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
}> = {
  'residential-power-washing-guide': {
    title: 'Residential Power Washing: The Ultimate Guide to Cleaner Homes',
    excerpt: 'Take a walk around your home and look closely at the siding, driveway, or deck—chances are you\'ll spot dirt, mildew, and grime that\'s been building up over time.',
    image: powerWashingImg,
    date: 'January 15, 2025',
    category: 'Power Washing',
    readTime: '8 min read',
    content: [
      'Take a walk around your home and look closely at the siding, driveway, or deck—chances are you\'ll spot dirt, mildew, or stains that have quietly built up over time. While these messes can be easy to ignore, they slowly wear down your home\'s surfaces and make even the most beautiful property look tired. That\'s where residential power washing comes in. With the right approach, it can instantly refresh your home\'s appearance and even help protect it from long-term damage.',
      'This guide is designed to show you everything you need to know about keeping your home\'s exterior clean and well-maintained. We\'ll explore the benefits of exterior power washing, the surfaces it can restore, and how to decide between tackling the job yourself or hiring a professional team.',
      '## Why Power Washing Matters for Homeowners',
      'It doesn\'t take long for a home\'s exterior to collect dirt, mold, algae, pollen, and pollution. Left unchecked, these buildups not only dull your home\'s appearance but can also cause real damage over time. Grime and mildew eat away at paint, siding, and even brick, while slippery mold patches on walkways can create safety hazards for your family and guests.',
      'Routine power washing services can add years of life to your siding, decking, and concrete. By removing harmful contaminants, you prevent premature wear and tear that often leads to costly repairs. Homeowners who schedule exterior power washing as part of their regular maintenance also notice a fresher, brighter look that makes their property stand out in the neighborhood.',
      '## What Can Be Cleaned with Power Washing?',
      'One of the best things about residential power washing is its versatility. From siding and brick to patios and fences, many of the surfaces around your home can be safely and effectively cleaned with the right equipment and techniques.',
      '### Siding and Brickwork',
      'Over time, siding and brick absorb dirt, mildew, and even air pollution, making your home look older than it really is. A professional team can gently but thoroughly remove these stains, restoring the original color and brightness of your walls.',
      '### Decks, Patios, and Driveways',
      'Outdoor living areas take a beating from constant foot traffic, weather, and spills. Exterior power washing can bring back the natural look of wood, concrete, or stone surfaces, extending their lifespan and making them safer by eliminating slippery buildup.',
      '### Roofs, Gutters, and Fences',
      'Algae, moss, and grime on roofs and fences don\'t just look bad—they can cause long-term damage if ignored. Professional power washing ensures these delicate surfaces are cleaned safely, without the risk of using too much pressure.',
      '## DIY vs. Professional Power Washing',
      'When homeowners start noticing grime on their siding or stains on the driveway, the first thought is often: "Can I just rent a machine and handle it myself?" While DIY power washing can seem like a money-saving option, it comes with risks that can sometimes outweigh the benefits.',
      'The main challenge with do-it-yourself cleaning is using the right pressure. Too much force can strip paint, dent siding, or even damage wood and roofing materials. Without proper training, it\'s easy to cause more harm than good.',
      'On the other hand, professionals have the equipment, cleaning solutions, and expertise to handle different surfaces safely. They know how to adjust pressure levels, use eco-friendly detergents, and tackle tough stains without risking damage.',
      '## A Cleaner, Healthier Home Starts Here',
      'Keeping your home\'s exterior clean isn\'t just about looks—it\'s about protection, safety, and long-term value. Regular care and the right team make it easy to keep your home looking its best. If you\'re ready to refresh your property, now is the perfect time to explore trusted power washing services in your area.',
    ],
  },
  'affordable-gutter-cleaning-chicago': {
    title: 'Affordable Gutter Cleaning in Chicago: Seasonal Tips From Local Experts',
    excerpt: 'If you own a home in Chicago, you already know how unpredictable the weather can be. One week it\'s heavy rain, the next it\'s snow and ice.',
    image: gutterCleaningImg,
    date: 'January 5, 2025',
    category: 'Gutter Cleaning',
    readTime: '10 min read',
    content: [
      'If you own a home in Chicago, you already know how unpredictable the weather can be. One week it\'s heavy spring rain, the next it\'s swirling autumn leaves, and before long, winter ice is weighing everything down. All of this takes a toll on your gutters—and if they\'re clogged or neglected, you could be looking at expensive repairs like water damage, basement flooding, or even a cracked foundation.',
      'That\'s where regular upkeep comes in. Choosing affordable gutter cleaning isn\'t just about saving a few dollars today; it\'s about protecting your home from much bigger costs tomorrow. Think of it as a small investment in your home\'s safety and curb appeal.',
      '## Why Gutter Cleaning Services Matters in Chicago',
      'Chicago is a city of extremes. From lake-effect snow and icy winters to heavy spring rains and leafy fall days, your home\'s gutters are working overtime year-round. They\'re designed to channel water away from your roof and foundation, but when they get clogged with leaves, twigs, and debris, problems start piling up fast.',
      'Clogged gutters may not seem urgent at first, but the hidden costs can be huge. When water can\'t flow properly, it can seep into your siding, cause roof leaks, or even lead to basement flooding. Over time, this kind of water damage can crack your foundation—something no homeowner wants to deal with.',
      '## How Often Should You Schedule Residential Gutter Cleaning?',
      'The timing of gutter maintenance is just as important as the cleaning itself. In Chicago, where weather swings from snow to rain to falling leaves, neglecting gutters for even a season can cause trouble.',
      'Most experts recommend gutter cleaning at least twice a year—once in spring and again in fall. These two cleanings catch the biggest culprits: winter debris and autumn leaves. But depending on your home\'s surroundings, you may need it more often.',
      '## Seasonal Gutter Cleaning Tips From Local Experts',
      'Chicago\'s seasons each bring unique challenges for your gutters, but a little preparation goes a long way. Here\'s what local pros recommend:',
      '**Spring:** After winter storms, flush gutters with a hose, check for cracks or sagging, and make sure downspouts direct water away from your foundation.',
      '**Summer:** Thunderstorms are common, so trim back branches, install gutter guards if needed, and check gutters after heavy rain.',
      '**Fall:** This is peak season for clogs. Schedule residential gutter cleaning before the first frost and clear leaves regularly if your yard has big trees.',
      '**Winter:** Ice dams can cause major roof damage. Keep gutters clear of debris, consider heating cables if problems repeat, and avoid DIY ladder work—leave it to professionals for safety.',
      '## DIY vs. Professional Gutter Cleaning',
      'Should you clean gutters yourself or hire a pro? It depends on your home and comfort level. DIY saves money, but it\'s messy and risky. Even short ladder falls can cause serious injuries, and without the right tools, it\'s easy to miss hidden clogs.',
      'Professional help brings safety training, proper equipment, and an eye for early damage. They also flush downspouts—something DIYers often skip. Most importantly, hiring pros saves you time and ensures the job is done right.',
      '## Protect Your Home, Season After Season',
      'Chicago\'s weather can be tough on homes, but with the right approach, your gutters don\'t have to be a source of stress. A little routine care goes a long way. Choosing affordable gutter cleaning through trusted local experts means your gutters stay clear, your home stays protected, and you get peace of mind all year long.',
    ],
  },
  'window-cleaning-near-me-how-to-avoid-mistakes': {
    title: 'Searching for Window Cleaning Near Me? Here\'s How to Avoid Common Mistakes',
    excerpt: 'You type "window cleaning near me" into your search bar and dozens of results pop up. They all promise sparkling windows, but how do you choose?',
    image: windowCleaningImg,
    date: 'December 20, 2024',
    category: 'Window Cleaning',
    readTime: '7 min read',
    content: [
      'You type "window cleaning near me" into your search bar and dozens of results pop up. They all promise sparkling windows, fast service, and unbeatable prices. But here\'s the problem—not all window cleaning companies deliver what they advertise, and picking the wrong one can leave you with streaks, water spots, or even damaged glass.',
      'Whether you need residential window cleaning to brighten up your home or commercial window washing to keep your business looking sharp, the right choice can make a big difference. A professional window cleaning service doesn\'t just improve curb appeal—it protects your windows, extends their lifespan, and saves you from climbing dangerous ladders or wrestling with stubborn stains.',
      '## Why Choosing the Right Window Cleaning Service Matters',
      'Clean windows do more than just look nice—they change how your whole space feels. More natural light, better views, and a polished exterior can make a home more inviting or a business more professional. But the benefits go beyond appearance.',
      'For homeowners, residential window cleaning keeps glass, frames, and screens in good shape, which can save you money on costly replacements. Professional cleaners use the right tools and techniques to avoid scratching the glass or damaging seals—something that\'s easy to do with DIY attempts.',
      '## Mistake #1: Choosing Based on Price Alone',
      'It\'s tempting to pick the cheapest option when you search for window cleaning near me. After all, if the goal is just to get the glass clean, why pay more? The truth is, choosing a window cleaning service based on price alone can end up costing you more in the long run.',
      'Low-priced services often cut corners. They might use low-quality cleaning solutions that leave streaks, hire inexperienced workers without proper training, or skip important steps like cleaning screens and wiping down frames.',
      '## Mistake #2: Not Checking Credentials and Experience',
      'When searching for window cleaning near me, it\'s easy to assume that all companies offer the same level of skill and professionalism. But that assumption can lead to frustration—or worse, damage to your property.',
      'A professional window cleaning service should have proper licensing, insurance, and, in many cases, industry certifications. These aren\'t just pieces of paper—they\'re proof the company takes its work seriously and operates with safety and quality in mind.',
      '## Mistake #3: Overlooking Safety Practices',
      'Safety might not be the first thing you think about when searching for window cleaning near me, but it should be high on your list. Whether it\'s a small home or a multi-story office building, window cleaning can be risky work if not done properly.',
      'A reputable window cleaning service will have clear safety protocols in place, along with the right equipment for the job. For residential window cleaning, this means using stable ladders, protective gear, and methods that prevent damage to your landscaping, siding, or interiors.',
      '## Mistake #4: Ignoring Service Scope and Guarantees',
      'When searching for window cleaning near me, many people focus on price and overlook what\'s actually included in the service. A quality window cleaning service should be clear about its scope. Does it include both interior and exterior cleaning? Are screens, sills, and frames part of the package?',
      'Guarantees are another area many customers forget to ask about. A company that stands behind its work will often offer a satisfaction guarantee or agree to return if you\'re not happy with the results.',
      '## How to Choose the Right Window Cleaning Provider Every Time',
      'Finding the right window cleaning service isn\'t about luck—it\'s about knowing what to look for and what to avoid. The next time you search for window cleaning near me, take a few extra minutes to compare companies, ask questions, and verify their experience. Your windows are one of the first things people notice—make sure they reflect the care and pride you have in your space.',
    ],
  },
  'exterior-power-washing-chicago-seasonal-tips': {
    title: 'Exterior Power Washing in Chicago: Seasonal Tips for Homeowners',
    excerpt: 'Chicago homeowners know that our city\'s weather can be unforgiving. From icy winters packed with road salt to humid summers, your home\'s exterior takes a beating.',
    image: powerWashingImg,
    date: 'January 10, 2025',
    category: 'Power Washing',
    readTime: '6 min read',
    content: [
      'Chicago homeowners know that our city\'s weather can be unforgiving. From icy winters packed with road salt to humid summers that encourage mold growth, your home\'s exterior takes a beating year-round. That\'s why understanding the best times and techniques for exterior power washing is essential for maintaining your property.',
      '## Spring: The Perfect Time to Start Fresh',
      'After a harsh Chicago winter, spring is the ideal time to assess and address the damage. Salt residue from icy sidewalks, grime from melting snow, and debris accumulated over months can all be effectively removed with professional power washing.',
      'Focus on driveways, walkways, and the lower portions of your siding where salt spray tends to accumulate. This prevents long-term damage and sets your home up for a beautiful summer.',
      '## Summer: Maintaining Your Investment',
      'Summer in Chicago means humidity, which can lead to mold and mildew growth on shaded areas of your home. Regular power washing during summer months keeps these problems in check before they become serious.',
      'Pay special attention to north-facing walls, areas under trees, and any spots that don\'t get direct sunlight. These are prime locations for organic growth that can damage your siding over time.',
      '## Fall: Preparing for Winter',
      'Before the first snow falls, give your home one more thorough cleaning. Removing leaves, pollen, and summer grime prepares your surfaces to better withstand winter conditions.',
      'This is also an excellent time to clean gutters and downspouts, ensuring proper drainage when rain and melting snow need to flow away from your foundation.',
      '## Winter: When to Wait',
      'While power washing in freezing temperatures isn\'t recommended, that doesn\'t mean you should ignore your home\'s exterior entirely. Keep an eye on ice dams and salt accumulation, and plan for a thorough spring cleaning.',
      '## The Bottom Line',
      'Chicago\'s four distinct seasons each present unique challenges for homeowners. By timing your exterior power washing strategically throughout the year, you can protect your investment and keep your home looking its best no matter what Mother Nature throws your way.',
    ],
  },
  'gutter-cleaning-mistakes-to-avoid': {
    title: 'Residential Gutter Cleaning Mistakes to Avoid This Year',
    excerpt: 'Let\'s be honest—gutter cleaning probably isn\'t at the top of your weekend to-do list. But ignoring it (or doing it wrong) can lead to serious problems.',
    image: gutterCleaningImg,
    date: 'December 28, 2024',
    category: 'Gutter Cleaning',
    readTime: '5 min read',
    content: [
      'Let\'s be honest—gutter cleaning probably isn\'t at the top of your weekend to-do list. But ignoring it (or doing it wrong) can lead to serious problems for your home. From water damage to foundation issues, clogged gutters cause more trouble than most homeowners realize.',
      '## Mistake #1: Waiting Too Long Between Cleanings',
      'One of the biggest mistakes homeowners make is waiting until there\'s a visible problem before cleaning their gutters. By the time you notice overflowing water or sagging gutters, damage may already be occurring.',
      'The solution? Schedule cleanings at least twice a year—in spring and fall. If you have many trees near your home, you may need to clean more frequently.',
      '## Mistake #2: Using the Wrong Tools',
      'Grabbing whatever\'s handy and climbing up a ladder might seem efficient, but using improper tools can damage your gutters or leave debris behind. Avoid using sharp metal tools that can scratch or dent your gutters.',
      'Instead, use a gutter scoop, garden trowel with rounded edges, or specialized gutter cleaning tools. A garden hose with a spray nozzle helps flush out remaining debris.',
      '## Mistake #3: Ignoring Downspouts',
      'Cleaning the gutters themselves is only half the job. Downspouts can become clogged with debris, preventing water from flowing away from your home. Always flush downspouts during your cleaning routine.',
      'If water doesn\'t flow freely, use a plumber\'s snake or pressure washer to clear the blockage. Neglecting downspouts defeats the purpose of clean gutters.',
      '## Mistake #4: Neglecting Safety',
      'Every year, thousands of people are injured in ladder accidents. Gutter cleaning requires working at heights, often on uneven ground, while reaching and bending.',
      'Always use a sturdy ladder on level ground, have someone spot you, and never overreach. Better yet, consider hiring professionals who have the proper equipment and training.',
      '## Mistake #5: Not Checking for Damage',
      'While cleaning, take the opportunity to inspect your gutters for damage. Look for rust, cracks, loose brackets, and separation from the fascia board. Catching problems early prevents costly repairs later.',
      '## The Smart Approach',
      'The easiest way to avoid all these mistakes? Hire a professional gutter cleaning service. They have the tools, experience, and safety equipment to do the job right—and they\'ll spot potential problems before they become expensive emergencies.',
    ],
  },
  'residential-window-cleaning-wheeling-il': {
    title: 'Top Residential Window Cleaning Services in Wheeling, IL',
    excerpt: 'Ever noticed how much brighter and fresher your home feels when the windows are clean? It\'s not just your imagination—clean windows make a real difference.',
    image: windowCleaningImg,
    date: 'December 15, 2024',
    category: 'Window Cleaning',
    readTime: '6 min read',
    content: [
      'Ever noticed how much brighter and fresher your home feels when the windows are clean? It\'s not just your imagination—clean windows make a real difference in how your home looks and feels. For Wheeling, IL residents, finding the right residential window cleaning service can transform your living space.',
      '## Why Professional Window Cleaning Matters',
      'While DIY window cleaning might seem straightforward, professional services offer advantages that are hard to replicate at home. From streak-free results to reaching difficult spots safely, professionals bring expertise and equipment that make a noticeable difference.',
      '## What to Look for in a Wheeling Window Cleaning Service',
      'When choosing a window cleaning company in Wheeling, consider these factors:',
      '**Experience:** Look for companies with years of experience serving the local community. They\'ll understand the unique challenges of our climate and home styles.',
      '**Insurance:** Ensure the company carries proper liability insurance. This protects you if anything goes wrong during the cleaning process.',
      '**Reviews:** Check online reviews and ask for references. Happy customers are the best indicator of quality service.',
      '**Transparent Pricing:** Get clear quotes upfront. Reputable companies will explain exactly what\'s included in their service.',
      '## Services You Should Expect',
      'A quality residential window cleaning service should include:',
      '- Interior and exterior glass cleaning',
      '- Screen cleaning and inspection',
      '- Sill and frame wiping',
      '- Removal of cobwebs and debris',
      '- Streak-free finish guaranteed',
      '## The Thomas Window Cleaning Difference',
      'At Thomas Window Cleaning, we\'ve been serving Wheeling and the greater Chicagoland area for over 29 years. Our team understands what local homeowners need and delivers consistent, high-quality results every time.',
      '## Schedule Your Cleaning Today',
      'Don\'t wait for dirty windows to dull your home\'s appearance. Contact a professional window cleaning service and enjoy the difference clean windows can make. Your home—and your outlook—will thank you.',
    ],
  },
  'pressure-cleaning-services-chicago': {
    title: 'From Sidewalks to Siding: What Pressure Cleaning Can Do for Your Chicago Property',
    excerpt: 'Chicago weather is no joke. Between lake-effect snow, gritty wind, and the grime that builds up after a long winter, your property needs some serious TLC.',
    image: powerWashingImg,
    date: 'December 10, 2024',
    category: 'Power Washing',
    readTime: '7 min read',
    content: [
      'Chicago weather is no joke. Between lake-effect snow, gritty wind, and the grime that builds up after a long winter, your property needs some serious TLC. That\'s where professional pressure cleaning comes in—a powerful solution for restoring your home\'s exterior to its former glory.',
      '## Sidewalks and Driveways',
      'Your concrete surfaces take the brunt of Chicago\'s harsh conditions. Oil stains, tire marks, salt residue, and general grime accumulate quickly. Pressure cleaning can remove years of buildup in just hours, making your driveway look nearly new.',
      '## Siding and Exterior Walls',
      'Whether you have vinyl, aluminum, brick, or stucco, your home\'s siding collects dirt, mold, and mildew over time. Professional pressure cleaning safely removes these contaminants without damaging the surface underneath.',
      '## Decks and Patios',
      'Outdoor living spaces see heavy use during Chicago\'s beautiful summer months. Pressure cleaning removes ground-in dirt, algae, and stains from wood, composite, and concrete surfaces, preparing them for sealing or staining if needed.',
      '## Fences and Retaining Walls',
      'These often-overlooked areas can become eyesores when covered in green algae or gray weathering. A thorough pressure cleaning can restore their original appearance and extend their lifespan.',
      '## Garage Floors',
      'Oil drips, tire marks, and general garage grime don\'t stand a chance against professional pressure cleaning. A clean garage floor looks better and is easier to maintain.',
      '## The Professional Advantage',
      'While pressure washers are available for rent, professional services offer significant advantages. They know the right pressure levels for different surfaces, use appropriate cleaning solutions, and complete the job safely and efficiently.',
      '## Protect Your Investment',
      'Your Chicago property faces unique challenges from our extreme weather. Regular pressure cleaning isn\'t just about appearance—it\'s about protecting your investment by preventing the damage that dirt, mold, and grime can cause over time.',
    ],
  },
  'surfaces-that-benefit-from-pressure-cleaning': {
    title: 'The Top 5 Surfaces That Benefit Most From Pressure Cleaning',
    excerpt: 'Ever look at your driveway or deck and think, "Was it always this dirty?" You\'re not imagining things—over time, grime, mold, and stains accumulate.',
    image: powerWashingImg,
    date: 'December 5, 2024',
    category: 'Power Washing',
    readTime: '5 min read',
    content: [
      'Ever look at your driveway or deck and think, "Was it always this dirty?" You\'re not imagining things—over time, grime, mold, and stains accumulate on exterior surfaces. The good news? Pressure cleaning can restore them to like-new condition. Here are the top five surfaces that benefit most from this powerful cleaning method.',
      '## 1. Concrete Driveways and Sidewalks',
      'Concrete is incredibly porous, which means it absorbs oil, dirt, and stains easily. Years of foot traffic, vehicle use, and weather exposure leave their mark. Pressure cleaning penetrates deep into concrete pores, removing embedded grime that regular cleaning can\'t touch.',
      '## 2. Wood Decks',
      'Wooden decks are beautiful but require regular maintenance. Algae, mildew, and gray weathering can make even a relatively new deck look old and worn. Pressure cleaning—when done at the right pressure level—removes surface contamination and prepares the wood for staining or sealing.',
      '## 3. Vinyl Siding',
      'Vinyl siding is low-maintenance, but "low" doesn\'t mean "no." Over time, dirt, pollen, and mildew create a dingy appearance. Pressure cleaning restores the bright, clean look of your siding without the scrubbing that hand-washing requires.',
      '## 4. Brick and Stone',
      'Natural materials like brick and stone add character to your home but also collect dirt and organic growth in their textured surfaces. Pressure cleaning removes these contaminants while preserving the natural beauty of the material.',
      '## 5. Patios and Pool Decks',
      'These high-traffic areas see a lot of wear. Spills, sunscreen, body oils, and bare foot traffic leave their marks. Pressure cleaning not only improves appearance but also removes slippery algae that can create safety hazards.',
      '## The Bottom Line',
      'All of these surfaces share something in common: they\'re constantly exposed to the elements and daily use. Regular pressure cleaning keeps them looking their best while preventing the long-term damage that dirt and organic growth can cause. Consider scheduling professional pressure cleaning at least once a year to protect your investment and maintain your home\'s curb appeal.',
    ],
  },
};

// Get all blog posts for related posts section
const allBlogPosts = Object.entries(blogPostsData).map(([slug, post]) => ({
  slug,
  ...post,
}));

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-glow">
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = allBlogPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10 py-24">
            <div className="max-w-4xl">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium text-primary bg-primary/20 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-white/70 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="text-sm text-white/70 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{post.title}</h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                {post.content.map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-foreground">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                    const [label, ...rest] = paragraph.split(':**');
                    return (
                      <p key={index} className="text-muted-foreground mb-4">
                        <strong className="text-foreground">{label.replace('**', '')}:</strong>
                        {rest.join(':**')}
                      </p>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-muted-foreground ml-4">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </motion.article>

              {/* CTA */}
              <div className="mt-12 p-8 glass-card text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact Thomas Window Cleaning for professional {post.category.toLowerCase()} services in
                  Chicago and the greater Chicagoland area.
                </p>
                <Link to="/contact" className="btn-glow">
                  Get a Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card overflow-hidden group"
                  >
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold mt-3 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
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
        )}
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BlogPostPage;
