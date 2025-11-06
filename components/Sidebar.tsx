import Link from 'next/link';
import Image from 'next/image';

const popularPosts = [
  {
    id: 1,
    title: "Sacs à main essentiels que chaque femme devrait posséder",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    slug: "essential-handbags-every-woman"
  },
  {
    id: 2,
    title: "Bijoux statement : Comment styliser des pièces audacieuses",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    slug: "statement-jewelry-styling-guide"
  },
  {
    id: 3,
    title: "Comment libérer la créativité et créer quelque chose d'utile ?",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
    slug: "unlock-creativity-fashion"
  },
  {
    id: 4,
    title: "Essentiels de garde-robe minimaliste pour chaque saison",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
    slug: "minimalist-wardrobe-essentials"
  },
  {
    id: 5,
    title: "Ceintures et chaussures : Le guide complet de coordination",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    slug: "belts-shoes-complete-guide"
  },
  {
    id: 6,
    title: "L'art de mélanger les motifs et les textures",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
    slug: "mixing-patterns-textures"
  }
];

const topVideos = [
  {
    id: 1,
    title: "Sacs à main essentiels que chaque femme devrait posséder",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    slug: "essential-handbags-every-woman"
  },
  {
    id: 2,
    title: "Guide de stylisation des bijoux statement",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    slug: "statement-jewelry-styling-guide"
  }
];

const dailyTips = [
  {
    id: 1,
    tip: "Superposez un cardigan léger sur votre tenue pour un contrôle facile de la température tout au long de la journée.",
    category: "Stylisme"
  },
  {
    id: 2,
    tip: "Accessoirisez avec une ceinture statement pour définir votre taille et ajouter de la structure aux pièces oversize.",
    category: "Accessoires"
  },
  {
    id: 3,
    tip: "Investissez dans une chemise blanche de qualité - elle est assez polyvalente pour le travail et les looks du week-end.",
    category: "Garde-robe"
  },
  {
    id: 4,
    tip: "Relevez vos manches pour ajouter une touche décontractée et décontractée à toute tenue formelle.",
    category: "Stylisme"
  },
  {
    id: 5,
    tip: "Choisissez des couleurs neutres comme palette de base et ajoutez des touches de couleur avec des accessoires ou une pièce statement.",
    category: "Couleur"
  }
];

const trendingTopics = [
  {
    id: 1,
    topic: "Mode durable : L'avenir du style",
    slug: "sustainable-fashion-future"
  },
  {
    id: 2,
    topic: "Psychologie des couleurs dans la mode",
    slug: "color-psychology-fashion"
  },
  {
    id: 3,
    topic: "Trouvailles vintage : Comment acheter d'occasion comme un pro",
    slug: "vintage-finds-second-hand"
  },
  {
    id: 4,
    topic: "Essentiels de garde-robe minimaliste",
    slug: "minimalist-wardrobe-essentials"
  }
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Popular Posts */}
      <section>
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Articles Populaires
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
          Articles Vedettes
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
          Conseils Mode Quotidiens
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
          Tendances Quotidiennes 2025
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Blazers Oversize</h3>
            <p className="text-xs text-gray-600">Confortables et chics, parfaits pour le bureau et les sorties décontractées.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Pantalons à Jambes Larges</h3>
            <p className="text-xs text-gray-600">Confortables, flatteurs et élégants sans effort pour un usage quotidien.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Pantalons Cargo</h3>
            <p className="text-xs text-gray-600">Faisant un retour majeur avec des coupes modernes et sur mesure et des couleurs neutres.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Cardigans Coupés</h3>
            <p className="text-xs text-gray-600">Pièce de superposition parfaite qui ajoute de la texture et de la chaleur à toute tenue.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Jupes Midi</h3>
            <p className="text-xs text-gray-600">Longueur polyvalente qui fonctionne pour les environnements professionnels et décontractés.</p>
          </div>
        </div>
      </section>
    </aside>
  );
}
