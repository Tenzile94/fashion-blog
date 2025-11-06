import Link from 'next/link';
import Image from 'next/image';

const popularPosts = [
  {
    id: 1,
    title: "Essential handbags every woman should own",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    slug: "essential-handbags-every-woman"
  },
  {
    id: 2,
    title: "Statement jewelry: How to style bold pieces",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    slug: "statement-jewelry-styling-guide"
  },
  {
    id: 3,
    title: "How to unlock creativity & make something useful?",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
    slug: "unlock-creativity-fashion"
  },
  {
    id: 4,
    title: "Minimalist wardrobe essentials for every season",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
    slug: "minimalist-wardrobe-essentials"
  },
  {
    id: 5,
    title: "Belts and shoes: The complete coordination guide",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    slug: "belts-shoes-complete-guide"
  },
  {
    id: 6,
    title: "The art of mixing patterns and textures",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
    slug: "mixing-patterns-textures"
  }
];

const topVideos = [
  {
    id: 1,
    title: "Essential handbags every woman should own",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    slug: "essential-handbags-every-woman"
  },
  {
    id: 2,
    title: "Statement jewelry styling guide",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    slug: "statement-jewelry-styling-guide"
  }
];

const dailyTips = [
  {
    id: 1,
    tip: "Layer a lightweight cardigan over your outfit for easy temperature control throughout the day.",
    category: "Styling"
  },
  {
    id: 2,
    tip: "Accessorize with a statement belt to define your waist and add structure to oversized pieces.",
    category: "Accessories"
  },
  {
    id: 3,
    tip: "Invest in a quality white button-down shirt - it's versatile enough for work and weekend looks.",
    category: "Wardrobe"
  },
  {
    id: 4,
    tip: "Roll up your sleeves to add a casual, effortless touch to any formal outfit.",
    category: "Styling"
  },
  {
    id: 5,
    tip: "Choose neutral colors as your base palette and add pops of color with accessories or one statement piece.",
    category: "Color"
  }
];

const trendingTopics = [
  {
    id: 1,
    topic: "Sustainable fashion: The future of style",
    slug: "sustainable-fashion-future"
  },
  {
    id: 2,
    topic: "Color psychology in fashion",
    slug: "color-psychology-fashion"
  },
  {
    id: 3,
    topic: "Vintage finds: How to shop second-hand like a pro",
    slug: "vintage-finds-second-hand"
  },
  {
    id: 4,
    topic: "Minimalist wardrobe essentials",
    slug: "minimalist-wardrobe-essentials"
  }
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Popular Posts */}
      <section>
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Popular Posts
        </h2>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 group">
              <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Featured Posts
        </h2>
        <div className="space-y-4">
          {topVideos.map((video) => (
            <Link key={video.id} href={`/blog/${video.slug}`} className="block group relative">
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-900 mt-2 group-hover:text-gray-600 transition-colors">
                {video.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Daily Fashion Tips */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-100">
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Daily Fashion Tips
        </h2>
        <div className="space-y-4">
          {dailyTips.map((tip) => (
            <div key={tip.id} className="pb-4 border-b border-amber-200 last:border-0 last:pb-0">
              <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2 rounded">
                {tip.category}
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">
                {tip.tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Wears or Clothes in Daily 2025 */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Trending Daily Wears 2025
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Oversized Blazers</h3>
            <p className="text-xs text-gray-600">Comfortable and chic, perfect for both office and casual outings.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Wide-Leg Trousers</h3>
            <p className="text-xs text-gray-600">Comfortable, flattering, and effortlessly stylish for everyday wear.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Cargo Pants</h3>
            <p className="text-xs text-gray-600">Making a major comeback with modern, tailored fits and neutral colors.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Cropped Cardigans</h3>
            <p className="text-xs text-gray-600">Perfect layering piece that adds texture and warmth to any outfit.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Midi Skirts</h3>
            <p className="text-xs text-gray-600">Versatile length that works for both professional and casual settings.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Subscribe Our Newsletter
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest fashion trends and style tips delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium text-sm uppercase tracking-wide"
          >
            Subscribe
          </button>
        </form>
      </section> */}
    </aside>
  );
}

