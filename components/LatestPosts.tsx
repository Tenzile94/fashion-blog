import Link from 'next/link';
import Image from 'next/image';

const latestPosts = [
  {
    id: 1,
    title: "Essential handbags every woman should own",
    excerpt: "Discover the timeless handbag styles that form the foundation of a versatile and stylish collection.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
    date: "FEB 18, 2025",
    author: "Jessica Parker",
    category: "ACCESSORIES",
    slug: "essential-handbags-every-woman"
  },
  {
    id: 2,
    title: "Statement jewelry: How to style bold pieces",
    excerpt: "Learn the art of wearing statement jewelry with confidence and creating balanced, eye-catching looks.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    date: "FEB 16, 2025",
    author: "Isabella Martinez",
    category: "ACCESSORIES",
    slug: "statement-jewelry-styling-guide"
  },
  {
    id: 3,
    title: "Belts and shoes: The complete coordination guide",
    excerpt: "Master the art of coordinating belts and shoes to create polished, cohesive outfits every time.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop",
    date: "FEB 14, 2025",
    author: "Olivia Chen",
    category: "ACCESSORIES",
    slug: "belts-shoes-complete-guide"
  },
  {
    id: 4,
    title: "Minimalist wardrobe essentials for every season",
    excerpt: "Discover the key pieces that will transform your closet into a versatile, timeless collection that works year-round.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
    date: "FEB 15, 2025",
    author: "Alexandra Rose",
    category: "FASHION",
    slug: "minimalist-wardrobe-essentials"
  },
  {
    id: 5,
    title: "Color psychology in fashion: What your wardrobe says about you",
    excerpt: "Explore how different colors can influence your mood and the message you send through your style choices.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop",
    date: "FEB 13, 2025",
    author: "Michael Chen",
    category: "STYLE",
    slug: "color-psychology-fashion"
  },
  {
    id: 6,
    title: "Vintage finds: How to shop second-hand like a pro",
    excerpt: "Learn expert tips for finding high-quality vintage pieces and building a sustainable wardrobe that stands out.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
    date: "FEB 11, 2025",
    author: "Sophie Martinez",
    category: "CLOTHING",
    slug: "vintage-finds-second-hand"
  }
];

export default function LatestPosts() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 uppercase tracking-wide">
        Latest Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative w-full h-64 mb-4 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-gray-900 text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {post.date} | BY {post.author.toUpperCase()}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

