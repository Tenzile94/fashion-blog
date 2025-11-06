import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogPosts: { [key: string]: any } = {
  'unlock-creativity-fashion': {
    title: 'How to unlock creativity & make something useful?',
    category: 'FASHION',
    date: 'FEB 12, 2025',
    author: 'Lora Mariane',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop',
    content: `
      <p className="text-lg text-gray-700 mb-6">
        Creativity in fashion isn't just about following trends—it's about understanding your personal style and expressing it authentically. Whether you're a designer, stylist, or fashion enthusiast, unlocking your creative potential requires a combination of inspiration, technique, and confidence.
      </p>
      <p className="text-gray-700 mb-6">
        The journey to creative expression begins with observation. Look beyond the runway and fashion magazines. Draw inspiration from architecture, nature, art, and everyday life. Notice how colors interact, how textures feel, and how silhouettes move. These observations become the building blocks of your unique style perspective.
      </p>
      <p className="text-gray-700 mb-6">
        Experimentation is key. Don't be afraid to mix unexpected elements, combine different eras, or reinterpret classic pieces. The most memorable fashion moments often come from breaking the rules intelligently. Start with small experiments—try pairing a vintage piece with modern accessories, or layer unexpected textures together.
      </p>
      <p className="text-gray-700 mb-6">
        Building a creative practice also means understanding your tools and materials. Learn about fabrics, their properties, and how they drape. Understand color theory and how it applies to personal style. Study the work of designers you admire, but always filter it through your own lens.
      </p>
      <p className="text-gray-700 mb-6">
        Most importantly, remember that creativity in fashion should be useful—it should serve you, express who you are, and make you feel confident. The best creative expressions are those that feel authentic and wearable, not just conceptual.
      </p>
    `
  },
  'minimalist-wardrobe-essentials': {
    title: 'Minimalist wardrobe essentials for every season',
    category: 'FASHION',
    date: 'FEB 15, 2025',
    author: 'Alexandra Rose',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop',
    content: `
      <p className="text-lg text-gray-700 mb-6">
        A minimalist wardrobe isn't about having fewer clothes—it's about having the right clothes. The pieces that work together, transition between seasons, and make getting dressed effortless. Here's how to build a capsule wardrobe that serves you year-round.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Foundation Pieces:</strong> Start with neutral basics in high-quality fabrics. A white button-down shirt, well-fitting jeans, a tailored blazer, and a classic trench coat form the foundation of any minimalist wardrobe. These pieces should be versatile enough to dress up or down.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Seasonal Adaptations:</strong> Instead of completely changing your wardrobe each season, focus on layering. A lightweight turtleneck works in spring with a jacket, in summer with a skirt, and in fall layered under sweaters. Invest in quality base layers that can be styled differently throughout the year.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Color Palette:</strong> Choose a cohesive color palette—typically built around neutrals with a few accent colors. This ensures everything mixes and matches, giving you more outfit combinations from fewer pieces.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Quality Over Quantity:</strong> Each piece in your minimalist wardrobe should be something you love and feel great wearing. Invest in quality fabrics and construction—these pieces will last longer and look better over time.
      </p>
    `
  },
  'color-psychology-fashion': {
    title: 'Color psychology in fashion: What your wardrobe says about you',
    category: 'STYLE',
    date: 'FEB 13, 2025',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop',
    content: `
      <p className="text-lg text-gray-700 mb-6">
        Colors communicate before we even speak. In fashion, the colors we choose send signals about our personality, mood, and intentions. Understanding color psychology can help you make more intentional style choices and express yourself more effectively.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Red:</strong> The color of confidence and energy. Red clothing commands attention and suggests boldness, passion, and leadership. It's perfect when you want to make a strong impression.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Blue:</strong> Associated with trust, stability, and professionalism. Blue is often favored in business settings because it communicates reliability and calm authority. Navy, in particular, is considered one of the most versatile and sophisticated colors in fashion.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Black:</strong> The ultimate in sophistication and elegance. Black is slimming, versatile, and timeless. It can convey power, mystery, or simplicity depending on how it's styled.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>White:</strong> Clean, fresh, and optimistic. White suggests purity and simplicity, making it perfect for creating crisp, modern looks. It's also incredibly versatile when mixed with other colors.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Green:</strong> Associated with nature, growth, and harmony. Green can be calming and grounding, or vibrant and energetic depending on the shade. It's becoming increasingly popular in sustainable fashion contexts.
      </p>
      <p className="text-gray-700 mb-6">
        Remember, while color psychology provides guidelines, personal preference and cultural context also play important roles. The best color choices are those that make you feel confident and authentic.
      </p>
    `
  },
  'vintage-finds-second-hand': {
    title: 'Vintage finds: How to shop second-hand like a pro',
    category: 'CLOTHING',
    date: 'FEB 11, 2025',
    author: 'Sophie Martinez',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
    content: `
      <p className="text-lg text-gray-700 mb-6">
        Shopping second-hand is both an art and a sustainable fashion practice. Finding quality vintage pieces requires patience, knowledge, and a keen eye. Here's how to navigate thrift stores, vintage shops, and online resale platforms like a professional.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Know What to Look For:</strong> Quality indicators include well-made seams, quality fabrics (natural fibers like cotton, wool, silk), and designer labels. Check for fabric composition tags—100% natural fibers often indicate better quality vintage pieces.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Inspect Thoroughly:</strong> Check for stains, holes, missing buttons, broken zippers, and signs of wear. Some issues are fixable (missing buttons, minor stains), while others may not be worth the effort. Always try items on when possible, as vintage sizing can differ significantly from modern sizing.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Timing Matters:</strong> Visit thrift stores regularly—new inventory arrives frequently. Early morning visits often yield the best finds before items are picked over. Many stores also have sale days or special promotions.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Think Beyond Size Tags:</strong> Vintage sizing is different from contemporary sizing. A vintage size 12 might fit like a modern size 8. Focus on how items actually fit your body rather than the number on the tag.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Online Shopping Tips:</strong> When shopping online, read descriptions carefully, ask sellers for measurements, and check return policies. Photos can be misleading, so ask questions if you need clarification.
      </p>
      <p className="text-gray-700 mb-6">
        Building a vintage wardrobe takes time, but the unique, sustainable pieces you'll find make it worthwhile. Each piece has a story, and wearing vintage is a way to honor fashion history while creating your own style narrative.
      </p>
    `
  },
  'mixing-patterns-textures': {
    title: 'The art of mixing patterns and textures',
    category: 'STYLE',
    date: 'FEB 10, 2025',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop',
    content: `
      <p className="text-lg text-gray-700 mb-6">
        Mixing patterns and textures is one of fashion's most sophisticated skills. When done well, it creates visual interest and depth. When done poorly, it can look chaotic. Here's how to master the art of pattern and texture mixing.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Start with a Base:</strong> Begin with one dominant pattern or texture, then add complementary elements. A striped blazer can pair beautifully with a floral skirt if they share a color palette. The key is finding the common thread—usually color.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Vary the Scale:</strong> Mix large patterns with small ones. A large floral print works with a small polka dot or gingham. This creates visual hierarchy and prevents patterns from competing with each other.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Texture Contrast:</strong> Pair smooth fabrics with textured ones. Silk with tweed, leather with cashmere, denim with lace. These contrasts add dimension and interest without overwhelming the eye.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Color Harmony:</strong> Keep your color palette cohesive. Mixing patterns works best when they share at least one or two colors. This creates visual unity even when patterns are different.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Break It Up:</strong> Use solid pieces to separate patterns. A solid-colored belt, jacket, or shoes can provide visual breathing room between different patterns.
      </p>
      <p className="text-gray-700 mb-6">
        Practice makes perfect. Start with subtle combinations and gradually work your way to bolder pairings. Confidence is the ultimate accessory when mixing patterns and textures.
      </p>
    `
  },
  'sustainable-fashion-future': {
    title: 'Sustainable fashion: The future of style',
    category: 'TRENDS',
    date: 'FEB 8, 2025',
    author: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
    content: `
      <p className="text-lg text-gray-700 mb-6">
        Sustainable fashion is no longer a niche interest—it's becoming the foundation of how we think about style. As awareness grows about the environmental and social impact of fashion, more people are seeking ways to build ethical, eco-conscious wardrobes.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Quality Over Quantity:</strong> The most sustainable garment is the one you already own. Investing in high-quality pieces that last years (or decades) reduces waste and consumption. Look for well-constructed items in durable fabrics.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Material Matters:</strong> Choose natural, biodegradable fibers when possible. Organic cotton, linen, hemp, and wool are better for the environment than synthetic materials. However, quality synthetic pieces that you'll wear for years can be better than fast fashion natural fibers.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Second-Hand First:</strong> Buying vintage and second-hand extends the life of clothing and reduces demand for new production. It's also a way to find unique pieces and often better quality than new fast fashion.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Support Ethical Brands:</strong> Research brands before purchasing. Look for companies that prioritize fair labor practices, use sustainable materials, and are transparent about their supply chains.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Care and Repair:</strong> Learning to care for and repair your clothing extends its life significantly. Simple skills like sewing on buttons, darning holes, and proper laundering can keep pieces in your wardrobe for years.
      </p>
      <p className="text-gray-700 mb-6">
        Sustainable fashion isn't about perfection—it's about making better choices where possible. Every small step toward a more conscious wardrobe makes a difference.
      </p>
    `
  },
  'essential-handbags-every-woman': {
    title: 'Essential handbags every woman should own',
    category: 'ACCESSORIES',
    date: 'FEB 18, 2025',
    author: 'Jessica Parker',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&h=600&fit=crop',
    content: `
      <p className="text-lg text-gray-700 mb-6">
        A handbag is more than just a functional accessory—it's a statement piece that completes your outfit and reflects your personal style. While trends come and go, certain handbag styles remain timeless essentials that every woman should consider for her collection.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>The Classic Tote:</strong> A spacious, structured tote bag is indispensable for work and daily errands. Look for one in a neutral color like black, tan, or navy with quality hardware. It should be large enough for your laptop, wallet, and daily essentials while maintaining its shape when loaded.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>The Evening Clutch:</strong> Every woman needs a sophisticated clutch for formal events, dinners, and special occasions. Choose one in a timeless material like satin, velvet, or metallic leather. A chain strap adds versatility, allowing you to carry it or wear it crossbody.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>The Crossbody Bag:</strong> Perfect for hands-free convenience, a crossbody bag is ideal for shopping, travel, and casual outings. Look for adjustable straps and multiple compartments for organization. A medium-sized crossbody in a neutral color pairs with everything.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>The Structured Shoulder Bag:</strong> This classic style works for both day and evening. A well-made shoulder bag with a top handle and removable strap offers flexibility. Choose one in a timeless color that complements your wardrobe palette.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Investment Tips:</strong> When building your handbag collection, prioritize quality over quantity. Look for genuine leather, well-constructed seams, and sturdy hardware. A few well-chosen pieces will serve you better than many trendy but poorly made bags. Consider the size and functionality that matches your lifestyle.
      </p>
      <p className="text-gray-700 mb-6">
        Remember, the best handbag collection is one that reflects your personal style and meets your practical needs. Start with these essentials and build from there based on your lifestyle and preferences.
      </p>
    `
  },
  'statement-jewelry-styling-guide': {
    title: 'Statement jewelry: How to style bold pieces',
    category: 'ACCESSORIES',
    date: 'FEB 16, 2025',
    author: 'Isabella Martinez',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop',
    content: `
      <p className="text-lg text-gray-700 mb-6">
        Statement jewelry has the power to transform any outfit from ordinary to extraordinary. These bold pieces can serve as the focal point of your look, but styling them requires balance and confidence. Here's how to wear statement jewelry with flair.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>One Statement Piece at a Time:</strong> The golden rule of statement jewelry is to let one piece be the star. If you're wearing bold earrings, keep your necklace minimal or skip it entirely. A chunky bracelet pairs best with simple earrings. This creates visual balance and prevents your accessories from competing for attention.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Pair with Simple Outfits:</strong> Statement jewelry works best when the rest of your outfit is relatively simple. A bold necklace elevates a plain white tee or black dress. Dramatic earrings shine against a simple blazer or sweater. Let your jewelry be the focal point by keeping clothing minimal.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Consider Proportions:</strong> Balance is key. If you have a large frame or broad shoulders, larger statement pieces will look proportional. Petite frames can handle bold jewelry too, but consider slightly smaller or more refined statement pieces. Trust your instincts about what feels right for your body.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Mix Metals Thoughtfully:</strong> While mixing metals is trendy, do it intentionally. Large statement pieces in mixed metals can work well together, but ensure they complement rather than clash. Consider the undertones—warm golds and cool silvers can work together if balanced properly.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Color Coordination:</strong> When wearing colorful statement jewelry, consider how it interacts with your outfit's color palette. Complementary colors create harmony, while contrasting colors make a bold statement. Neutral clothing allows colorful jewelry to shine, while patterned clothing requires more careful consideration.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Confidence is Key:</strong> The most important accessory when wearing statement jewelry is confidence. If you feel good in it, you'll look good in it. Start with pieces that resonate with your personal style, then gradually experiment with bolder choices as your comfort level grows.
      </p>
      <p className="text-gray-700 mb-6">
        Statement jewelry is an opportunity to express your personality and elevate your style. Don't be afraid to experiment, but remember that the best accessories are those that make you feel authentically yourself.
      </p>
    `
  },
  'belts-shoes-complete-guide': {
    title: 'Belts and shoes: The complete coordination guide',
    category: 'ACCESSORIES',
    date: 'FEB 14, 2025',
    author: 'Olivia Chen',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&h=600&fit=crop',
    content: `
      <p className="text-lg text-gray-700 mb-6">
        The relationship between belts and shoes can make or break an outfit. While strict matching rules have relaxed in modern fashion, understanding how to coordinate these accessories creates polished, cohesive looks. Here's your complete guide to pairing belts and shoes.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>The Classic Match:</strong> Traditional style rules suggest matching your belt to your shoes. This creates a cohesive, polished look that's especially appropriate for formal or professional settings. A brown belt with brown shoes, or black with black, provides a clean, coordinated appearance.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Modern Coordination:</strong> Contemporary fashion allows for more flexibility. Instead of exact matches, aim for harmony. A dark brown belt can pair with cognac or tan shoes if they're in the same color family. The key is ensuring they complement rather than clash.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Material Matters:</strong> Consider the material of both pieces. A leather belt pairs best with leather shoes. Casual canvas or fabric belts work well with sneakers or casual footwear. Suede belts can pair with suede shoes for a cohesive textured look.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Statement Pieces:</strong> If you're wearing statement shoes—like bold colors or unique designs—consider a more neutral belt to avoid visual competition. Conversely, a statement belt can be balanced with simpler, classic shoes. The goal is visual harmony, not matching competition.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Color Families:</strong> Group your accessories by color families. Warm browns (cognac, tan, chestnut) work together. Cool browns (mahogany, espresso) complement each other. Black and gray can be mixed, especially in professional settings. Neutrals like beige, taupe, and cream create a sophisticated palette.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Breaking the Rules:</strong> Fashion rules are meant to be broken thoughtfully. A colorful belt can add interest to a neutral outfit without matching shoes. Metallic belts can work with various shoe colors when styled intentionally. The key is ensuring the contrast looks deliberate and stylish, not accidental.
      </p>
      <p className="text-gray-700 mb-6">
        <strong>Building Your Collection:</strong> Start with versatile basics: a black leather belt, a brown leather belt, and perhaps a neutral canvas or fabric option. Match these with corresponding shoe colors in your wardrobe. As you build your collection, you can add more unique pieces that work with your existing items.
      </p>
      <p className="text-gray-700 mb-6">
        Remember, the goal is to create a cohesive, polished look. Whether you match exactly or coordinate thoughtfully, confidence in your choices is what truly makes an outfit work. Trust your eye and don't be afraid to experiment within your comfort zone.
      </p>
    `
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-gray-600 mb-8 text-sm uppercase tracking-wide">
          {post.date} | BY {post.author.toUpperCase()}
        </p>

        <div className="relative w-full h-96 md:h-[500px] mb-12 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div 
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2025 StyleVogue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

