import Header from '@/components/Header';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            À Propos de Votre Guide de Style Mode
          </h1>
          <div className="w-20 h-1 bg-gray-900 mb-8"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop"
              alt="Blog Mode"
              fill
              className="object-cover"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Chez Votre Guide de Style Mode, nous croyons que la mode est une forme puissante d&apos;expression personnelle et d&apos;autonomisation. 
              Notre mission est d&apos;inspirer et d&apos;éduquer les passionnés de mode avec des conseils de style pratiques, accessibles et durables 
              qui aident chacun à construire une garde-robe qui reflète sa personnalité unique et son mode de vie.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nous nous engageons à promouvoir des pratiques de mode durable, la qualité plutôt que la quantité, et à aider nos 
              lecteurs à développer un sens du style intemporel qui transcende les tendances éphémères.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Ce Que Nous Offrons</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Éducation Mode</h3>
                <p className="text-gray-700 leading-relaxed">
                  Guides complets sur la construction de garde-robes polyvalentes, la compréhension de la théorie des couleurs, le mélange de motifs, 
                  et le stylisme d&apos;accessoires pour créer des looks cohérents et polis.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Conseils Style Quotidiens</h3>
                <p className="text-gray-700 leading-relaxed">
                  Conseils pratiques et actionnables que vous pouvez appliquer à votre garde-robe quotidienne, des techniques de superposition 
                  à l&apos;accessoirisation comme un pro.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Insights sur les Tendances</h3>
                <p className="text-gray-700 leading-relaxed">
                  Restez informé des tendances de la mode actuelles tout en apprenant à les intégrer de manière réfléchie 
                  dans votre style personnel.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mode Durable</h3>
                <p className="text-gray-700 leading-relaxed">
                  Conseils pour construire une garde-robe éco-consciente grâce aux achats d&apos;occasion, aux investissements de qualité, 
                  et à la consommation consciente.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Notre Philosophie</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Votre Guide de Style Mode est construit sur la conviction qu&apos;une grande mode ne consiste pas à suivre chaque tendance ou à posséder 
              les pièces les plus chères. Au lieu de cela, nous nous concentrons sur l&apos;aide au développement d&apos;un style personnel qui vous fait 
              vous sentir confiant, à l&apos;aise et authentiquement vous-même.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nous mettons l&apos;accent sur la qualité plutôt que la quantité, la durabilité plutôt que la fast fashion, et l&apos;élégance intemporelle plutôt que 
              les tendances temporaires. Notre objectif est de vous aider à construire une garde-robe qui fonctionne pour votre mode de vie, reflète 
              vos valeurs et fait de l&apos;habillage quotidien une joie plutôt qu&apos;une corvée.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Rejoignez Notre Communauté</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous mettons constamment à jour notre blog avec du contenu frais, de nouveaux guides de style et les derniers 
              insights de la mode. Que vous commenciez tout juste votre parcours stylistique ou que vous cherchiez à affiner votre garde-robe existante, 
              Votre Guide de Style Mode est là pour vous soutenir à chaque étape.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Explorez nos articles de blog, suivez nos conseils mode quotidiens et découvrez comment faire fonctionner la mode pour 
              vous. Merci de faire partie de la communauté Votre Guide de Style Mode !
            </p>
          </section>
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
