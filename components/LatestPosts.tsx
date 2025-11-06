import Link from 'next/link';
import Image from 'next/image';

const latestPosts = [
  {
    id: 1,
    title: "Sacs à main essentiels que chaque femme devrait posséder",
    excerpt: "Découvrez les styles de sacs à main intemporels qui forment la base d'une collection polyvalente et élégante.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
    date: "18 FÉV 2025",
    author: "Jessica Parker",
    category: "ACCESSOIRES",
    slug: "essential-handbags-every-woman"
  },
  {
    id: 2,
    title: "Bijoux statement : Comment styliser des pièces audacieuses",
    excerpt: "Apprenez l'art de porter des bijoux statement avec confiance et de créer des looks équilibrés et accrocheurs.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    date: "16 FÉV 2025",
    author: "Isabella Martinez",
    category: "ACCESSOIRES",
    slug: "statement-jewelry-styling-guide"
  },
  {
    id: 3,
    title: "Ceintures et chaussures : Le guide complet de coordination",
    excerpt: "Maîtrisez l'art de coordonner les ceintures et les chaussures pour créer des tenues polies et cohérentes à chaque fois.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop",
    date: "14 FÉV 2025",
    author: "Olivia Chen",
    category: "ACCESSOIRES",
    slug: "belts-shoes-complete-guide"
  },
  {
    id: 4,
    title: "Essentiels de garde-robe minimaliste pour chaque saison",
    excerpt: "Découvrez les pièces clés qui transformeront votre garde-robe en une collection polyvalente et intemporelle qui fonctionne toute l'année.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
    date: "15 FÉV 2025",
    author: "Alexandra Rose",
    category: "MODE",
    slug: "minimalist-wardrobe-essentials"
  },
  {
    id: 5,
    title: "Psychologie des couleurs dans la mode : Ce que votre garde-robe dit de vous",
    excerpt: "Explorez comment différentes couleurs peuvent influencer votre humeur et le message que vous envoyez à travers vos choix de style.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop",
    date: "13 FÉV 2025",
    author: "Michael Chen",
    category: "STYLE",
    slug: "color-psychology-fashion"
  },
  {
    id: 6,
    title: "Trouvailles vintage : Comment acheter d'occasion comme un pro",
    excerpt: "Apprenez des conseils d'experts pour trouver des pièces vintage de qualité et construire une garde-robe durable qui se démarque.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
    date: "11 FÉV 2025",
    author: "Sophie Martinez",
    category: "VÊTEMENTS",
    slug: "vintage-finds-second-hand"
  }
];

export default function LatestPosts() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 uppercase tracking-wide">
        Derniers Articles
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
                {post.date} | PAR {post.author.toUpperCase()}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
