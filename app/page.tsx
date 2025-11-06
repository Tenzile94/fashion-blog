import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import LatestPosts from '@/components/LatestPosts';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-600 uppercase tracking-wider">
            Beautifully crafted Fashion Blog Template
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <HeroSection />
            <LatestPosts />
            
            {/* About Section */}
            <section className="mt-16 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 md:p-12 border border-gray-200">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 text-center">
                  Welcome to StyleVogue
                </h2>
                <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    At StyleVogue, we believe fashion is more than just clothing—it's a form of self-expression, creativity, and confidence. Our mission is to inspire and educate fashion enthusiasts with practical tips, trend insights, and timeless style advice.
                  </p>
                  <p>
                    Whether you're looking to build a minimalist wardrobe, master the art of accessorizing, or discover sustainable fashion practices, we're here to guide you on your style journey. Our carefully curated content covers everything from wardrobe essentials to the latest fashion trends, helping you create looks that reflect your unique personality.
                  </p>
                  <p>
                    Join our community of fashion lovers who value quality over quantity, sustainability over fast fashion, and personal style over fleeting trends. Explore our blog posts, follow our daily fashion tips, and discover how to make fashion work for you, not the other way around.
                  </p>
                  <p className="font-medium text-gray-900">
                    Remember: Great style isn't about following every trend—it's about finding what makes you feel confident, comfortable, and authentically yourself.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <Sidebar />
          </div>
        </div>
      </main>
      
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

