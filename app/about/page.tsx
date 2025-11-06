import Header from '@/components/Header';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            About Your Fashion Style Guide
          </h1>
          <div className="w-20 h-1 bg-gray-900 mb-8"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop"
              alt="Fashion Blog"
              fill
              className="object-cover"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At Your Fashion Style Guide, we believe that fashion is a powerful form of self-expression and personal empowerment. 
              Our mission is to inspire and educate fashion enthusiasts with practical, accessible, and sustainable 
              style advice that helps everyone build a wardrobe that reflects their unique personality and lifestyle.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We&apos;re committed to promoting sustainable fashion practices, quality over quantity, and helping our 
              readers develop a timeless sense of style that transcends fleeting trends.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">What We Offer</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fashion Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive guides on building versatile wardrobes, understanding color theory, mixing patterns, 
                  and styling accessories to create cohesive, polished looks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Daily Style Tips</h3>
                <p className="text-gray-700 leading-relaxed">
                  Practical, actionable advice that you can apply to your everyday wardrobe, from layering techniques 
                  to accessorizing like a pro.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trend Insights</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stay informed about current fashion trends while learning how to incorporate them thoughtfully 
                  into your personal style.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Fashion</h3>
                <p className="text-gray-700 leading-relaxed">
                  Guidance on building an eco-conscious wardrobe through second-hand shopping, quality investments, 
                  and mindful consumption.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your Fashion Style Guide is built on the belief that great fashion isn&apos;t about following every trend or owning 
              the most expensive pieces. Instead, we focus on helping you develop a personal style that makes 
              you feel confident, comfortable, and authentically yourself.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We emphasize quality over quantity, sustainability over fast fashion, and timeless elegance over 
              temporary trends. Our goal is to help you build a wardrobe that works for your lifestyle, reflects 
              your values, and makes getting dressed each day a joy rather than a chore.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-700 leading-relaxed">
              We&apos;re constantly updating our blog with fresh content, new style guides, and the latest fashion 
              insights. Whether you&apos;re just starting your style journey or looking to refine your existing 
              wardrobe, Your Fashion Style Guide is here to support you every step of the way.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Explore our blog posts, follow our daily fashion tips, and discover how to make fashion work for 
              you. Thank you for being part of the Your Fashion Style Guide community!
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2025 Your Fashion Style Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

