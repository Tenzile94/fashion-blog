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
            Modèle de Blog Mode Magnifiquement Conçu
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
                  Bienvenue sur Votre Guide de Style Mode
                </h2>
                <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Chez Votre Guide de Style Mode, nous croyons que la mode est bien plus qu&apos;un simple vêtement—c&apos;est une forme d&apos;expression personnelle, de créativité et de confiance. Notre mission est d&apos;inspirer et d&apos;éduquer les passionnés de mode avec des conseils pratiques, des insights sur les tendances et des conseils de style intemporels.
                  </p>
                  <p>
                    Que vous cherchiez à construire une garde-robe minimaliste, à maîtriser l&apos;art de l&apos;accessoirisation, ou à découvrir des pratiques de mode durable, nous sommes là pour vous guider dans votre parcours stylistique. Notre contenu soigneusement sélectionné couvre tout, des essentiels de garde-robe aux dernières tendances de la mode, vous aidant à créer des looks qui reflètent votre personnalité unique.
                  </p>
                  <p>
                    Rejoignez notre communauté d&apos;amoureux de la mode qui valorisent la qualité plutôt que la quantité, la durabilité plutôt que la fast fashion, et le style personnel plutôt que les tendances éphémères. Explorez nos articles de blog, suivez nos conseils mode quotidiens, et découvrez comment faire fonctionner la mode pour vous, et non l&apos;inverse.
                  </p>
                  <p className="font-medium text-gray-900">
                    Rappelez-vous : Un grand style ne consiste pas à suivre chaque tendance—il s&apos;agit de trouver ce qui vous fait vous sentir confiant, à l&apos;aise et authentiquement vous-même.
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
            <p>&copy; 2025 Votre Guide de Style Mode. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
