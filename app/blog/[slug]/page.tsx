import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogPosts: { [key: string]: any } = {
  'unlock-creativity-fashion': {
    title: 'Comment libérer la créativité et créer quelque chose d\'utile ?',
    category: 'MODE',
    date: '12 FÉV 2025',
    author: 'Lora Mariane',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop',
    content: `
      <p className="margin-4 text-lg text-gray-700 my-6">
        La créativité dans la mode ne consiste pas seulement à suivre les tendances—il s&apos;agit de comprendre votre style personnel et de l&apos;exprimer authentiquement. Que vous soyez designer, styliste ou passionné de mode, libérer votre potentiel créatif nécessite une combinaison d&apos;inspiration, de technique et de confiance.
      </p>
      <p className="text-gray-700 my-6">
        Le voyage vers l&apos;expression créative commence par l&apos;observation. Regardez au-delà des podiums et des magazines de mode. Puisez l&apos;inspiration dans l&apos;architecture, la nature, l&apos;art et la vie quotidienne. Remarquez comment les couleurs interagissent, comment les textures se sentent et comment les silhouettes bougent. Ces observations deviennent les éléments constitutifs de votre perspective de style unique.
      </p>
      <p className="text-gray-700 my-6">
        L&apos;expérimentation est la clé. N&apos;ayez pas peur de mélanger des éléments inattendus, de combiner différentes époques ou de réinterpréter des pièces classiques. Les moments de mode les plus mémorables viennent souvent de la rupture intelligente des règles. Commencez par de petites expériences—essayez d&apos;associer une pièce vintage avec des accessoires modernes, ou superposez des textures inattendues ensemble.
      </p>
      <p className="text-gray-700 my-6">
        Construire une pratique créative signifie aussi comprendre vos outils et matériaux. Apprenez sur les tissus, leurs propriétés et comment ils tombent. Comprenez la théorie des couleurs et comment elle s&apos;applique au style personnel. Étudiez le travail des designers que vous admirez, mais filtrez toujours à travers votre propre lentille.
      </p>
      <p className="text-gray-700 my-6">
        Plus important encore, rappelez-vous que la créativité dans la mode doit être utile—elle doit vous servir, exprimer qui vous êtes et vous faire sentir confiant. Les meilleures expressions créatives sont celles qui semblent authentiques et portables, pas seulement conceptuelles.
      </p>
    `
  },
  'minimalist-wardrobe-essentials': {
    title: 'Essentiels de garde-robe minimaliste pour chaque saison',
    category: 'MODE',
    date: '15 FÉV 2025',
    author: 'Alexandra Rose',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop',
    content: `
      <p className="margin-4 text-lg text-gray-700 my-6">
        Une garde-robe minimaliste ne consiste pas à avoir moins de vêtements—il s&apos;agit d&apos;avoir les bons vêtements. Les pièces qui fonctionnent ensemble, qui passent entre les saisons et qui rendent l&apos;habillage sans effort. Voici comment construire une garde-robe capsule qui vous sert toute l&apos;année.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Pièces Fondamentales :</strong> Commencez par des basiques neutres en tissus de haute qualité. Une chemise blanche à boutons, des jeans bien ajustés, un blazer sur mesure et un trench classique forment la base de toute garde-robe minimaliste. Ces pièces doivent être assez polyvalentes pour être habillées ou décontractées.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Adaptations Saisonnières :</strong> Au lieu de changer complètement votre garde-robe chaque saison, concentrez-vous sur la superposition. Un col roulé léger fonctionne au printemps avec une veste, en été avec une jupe, et en automne superposé sous des pulls. Investissez dans des couches de base de qualité qui peuvent être stylisées différemment tout au long de l&apos;année.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Palette de Couleurs :</strong> Choisissez une palette de couleurs cohérente—généralement construite autour de neutres avec quelques couleurs d&apos;accent. Cela garantit que tout se mélange et s&apos;assortit, vous donnant plus de combinaisons de tenues avec moins de pièces.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Qualité Sur Quantité :</strong> Chaque pièce de votre garde-robe minimaliste devrait être quelque chose que vous aimez et que vous vous sentez bien de porter. Investissez dans des tissus et une construction de qualité—ces pièces dureront plus longtemps et auront meilleure apparence au fil du temps.
      </p>
    `
  },
  'color-psychology-fashion': {
    title: 'Psychologie des couleurs dans la mode : Ce que votre garde-robe dit de vous',
    category: 'STYLE',
    date: '13 FÉV 2025',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop',
    content: `
      <p className="margin-4 text-lg text-gray-700 my-6">
        Les couleurs communiquent avant même que nous parlions. Dans la mode, les couleurs que nous choisissons envoient des signaux sur notre personnalité, notre humeur et nos intentions. Comprendre la psychologie des couleurs peut vous aider à faire des choix de style plus intentionnels et à vous exprimer plus efficacement.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Rouge :</strong> La couleur de la confiance et de l&apos;énergie. Les vêtements rouges attirent l&apos;attention et suggèrent l&apos;audace, la passion et le leadership. C&apos;est parfait quand vous voulez faire une forte impression.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Bleu :</strong> Associé à la confiance, la stabilité et le professionnalisme. Le bleu est souvent favorisé dans les environnements professionnels car il communique la fiabilité et une autorité calme. Le bleu marine, en particulier, est considéré comme l&apos;une des couleurs les plus polyvalentes et sophistiquées de la mode.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Noir :</strong> L&apos;ultime en sophistication et élégance. Le noir est amincissant, polyvalent et intemporel. Il peut transmettre le pouvoir, le mystère ou la simplicité selon la façon dont il est stylisé.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Blanc :</strong> Propre, frais et optimiste. Le blanc suggère la pureté et la simplicité, ce qui le rend parfait pour créer des looks nets et modernes. Il est aussi incroyablement polyvalent lorsqu&apos;il est mélangé avec d&apos;autres couleurs.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Vert :</strong> Associé à la nature, la croissance et l&apos;harmonie. Le vert peut être apaisant et ancrant, ou vibrant et énergique selon la teinte. Il devient de plus en plus populaire dans les contextes de mode durable.
      </p>
      <p className="text-gray-700 my-6">
        Rappelez-vous, bien que la psychologie des couleurs fournisse des lignes directrices, la préférence personnelle et le contexte culturel jouent également des rôles importants. Les meilleurs choix de couleurs sont ceux qui vous font sentir confiant et authentique.
      </p>
    `
  },
  'vintage-finds-second-hand': {
    title: 'Trouvailles vintage : Comment acheter d\'occasion comme un pro',
    category: 'VÊTEMENTS',
    date: '11 FÉV 2025',
    author: 'Sophie Martinez',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
    content: `
      <p className="margin-4 text-lg text-gray-700 my-6">
        Acheter d&apos;occasion est à la fois un art et une pratique de mode durable. Trouver des pièces vintage de qualité nécessite de la patience, des connaissances et un œil aiguisé. Voici comment naviguer dans les friperies, les boutiques vintage et les plateformes de revente en ligne comme un professionnel.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Savoir Ce Qu&apos;il Faut Chercher :</strong> Les indicateurs de qualité incluent des coutures bien faites, des tissus de qualité (fibres naturelles comme le coton, la laine, la soie) et des étiquettes de designers. Vérifiez les étiquettes de composition des tissus—100% de fibres naturelles indiquent souvent des pièces vintage de meilleure qualité.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Inspecter Soigneusement :</strong> Vérifiez les taches, les trous, les boutons manquants, les fermetures éclair cassées et les signes d&apos;usure. Certains problèmes sont réparables (boutons manquants, taches mineures), tandis que d&apos;autres peuvent ne pas valoir l&apos;effort. Essayez toujours les articles quand c&apos;est possible, car le taillage vintage peut différer considérablement du taillage moderne.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Le Timing Compte :</strong> Visitez les friperies régulièrement—les nouveaux stocks arrivent fréquemment. Les visites tôt le matin donnent souvent les meilleures trouvailles avant que les articles ne soient épuisés. De nombreux magasins ont aussi des journées de vente ou des promotions spéciales.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Penser Au-Delà Des Étiquettes de Taille :</strong> Le taillage vintage est différent du taillage contemporain. Une taille vintage 12 pourrait correspondre à une taille moderne 8. Concentrez-vous sur la façon dont les articles s&apos;ajustent réellement à votre corps plutôt que sur le numéro sur l&apos;étiquette.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Conseils d&apos;Achat En Ligne :</strong> Lors de l&apos;achat en ligne, lisez attentivement les descriptions, demandez aux vendeurs les mesures et vérifiez les politiques de retour. Les photos peuvent être trompeuses, alors posez des questions si vous avez besoin de clarifications.
      </p>
      <p className="text-gray-700 my-6">
        Construire une garde-robe vintage prend du temps, mais les pièces uniques et durables que vous trouverez en valent la peine. Chaque pièce a une histoire, et porter du vintage est une façon d&apos;honorer l&apos;histoire de la mode tout en créant votre propre récit de style.
      </p>
    `
  },
  'mixing-patterns-textures': {
    title: 'L\'art de mélanger les motifs et les textures',
    category: 'STYLE',
    date: '10 FÉV 2025',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop',
    content: `
      <p className="margin-4 text-lg text-gray-700 my-6">
        Mélanger les motifs et les textures est l&apos;une des compétences les plus sophistiquées de la mode. Bien fait, cela crée un intérêt visuel et de la profondeur. Mal fait, cela peut sembler chaotique. Voici comment maîtriser l&apos;art du mélange de motifs et de textures.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Commencer Par Une Base :</strong> Commencez par un motif ou une texture dominante, puis ajoutez des éléments complémentaires. Un blazer rayé peut s&apos;assortir magnifiquement avec une jupe fleurie s&apos;ils partagent une palette de couleurs. La clé est de trouver le fil commun—généralement la couleur.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Varier L&apos;Échelle :</strong> Mélangez les grands motifs avec les petits. Un grand imprimé floral fonctionne avec un petit pois ou un vichy. Cela crée une hiérarchie visuelle et empêche les motifs de se faire concurrence.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Contraste de Texture :</strong> Associez les tissus lisses avec les texturés. La soie avec le tweed, le cuir avec le cachemire, le denim avec la dentelle. Ces contrastes ajoutent de la dimension et de l&apos;intérêt sans submerger l&apos;œil.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Harmonie des Couleurs :</strong> Gardez votre palette de couleurs cohérente. Le mélange de motifs fonctionne mieux lorsqu&apos;ils partagent au moins une ou deux couleurs. Cela crée une unité visuelle même lorsque les motifs sont différents.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Casser Le Rythme :</strong> Utilisez des pièces unies pour séparer les motifs. Une ceinture, une veste ou des chaussures de couleur unie peuvent fournir un espace de respiration visuel entre différents motifs.
      </p>
      <p className="text-gray-700 my-6">
        La pratique rend parfait. Commencez par des combinaisons subtiles et progressez progressivement vers des associations plus audacieuses. La confiance est l&apos;accessoire ultime lors du mélange de motifs et de textures.
      </p>
    `
  },
  'sustainable-fashion-future': {
    title: 'Mode durable : L\'avenir du style',
    category: 'TENDANCES',
    date: '8 FÉV 2025',
    author: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
    content: `
      <p className="margin-4 text-lg text-gray-700 my-6">
        La mode durable n&apos;est plus un intérêt de niche—elle devient la base de la façon dont nous pensons au style. Alors que la prise de conscience grandit concernant l&apos;impact environnemental et social de la mode, de plus en plus de personnes cherchent des moyens de construire des garde-robes éthiques et éco-conscientes.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Qualité Sur Quantité :</strong> Le vêtement le plus durable est celui que vous possédez déjà. Investir dans des pièces de haute qualité qui durent des années (ou des décennies) réduit les déchets et la consommation. Cherchez des articles bien construits en tissus durables.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Les Matériaux Comptent :</strong> Choisissez des fibres naturelles et biodégradables quand c&apos;est possible. Le coton biologique, le lin, le chanvre et la laine sont meilleurs pour l&apos;environnement que les matériaux synthétiques. Cependant, des pièces synthétiques de qualité que vous porterez pendant des années peuvent être meilleures que les fibres naturelles de fast fashion.
      </p>
      <p className="text-gray-700 my-6">
        <strong>D&apos;Occasion D&apos;Abord :</strong> Acheter du vintage et d&apos;occasion prolonge la vie des vêtements et réduit la demande de nouvelle production. C&apos;est aussi un moyen de trouver des pièces uniques et souvent de meilleure qualité que la fast fashion neuve.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Soutenir Les Marques Éthiques :</strong> Recherchez les marques avant d&apos;acheter. Cherchez des entreprises qui privilégient des pratiques de travail équitables, utilisent des matériaux durables et sont transparentes sur leurs chaînes d&apos;approvisionnement.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Soin Et Réparation :</strong> Apprendre à prendre soin et à réparer vos vêtements prolonge considérablement leur vie. Des compétences simples comme coudre des boutons, repriser des trous et un lavage approprié peuvent garder des pièces dans votre garde-robe pendant des années.
      </p>
      <p className="text-gray-700 my-6">
        La mode durable ne consiste pas à être parfait—il s&apos;agit de faire de meilleurs choix quand c&apos;est possible. Chaque petit pas vers une garde-robe plus consciente fait une différence.
      </p>
    `
  },
  'essential-handbags-every-woman': {
    title: 'Sacs à main essentiels que chaque femme devrait posséder',
    category: 'ACCESSOIRES',
    date: '18 FÉV 2025',
    author: 'Jessica Parker',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&h=600&fit=crop',
    content: `
      <p className="margin-4 text-lg text-gray-700 my-6">
        Un sac à main est bien plus qu&apos;un simple accessoire fonctionnel—c&apos;est une pièce statement qui complète votre tenue et reflète votre style personnel. Alors que les tendances vont et viennent, certains styles de sacs à main restent des essentiels intemporels que chaque femme devrait considérer pour sa collection.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Le Tote Classique :</strong> Un sac tote spacieux et structuré est indispensable pour le travail et les courses quotidiennes. Cherchez-en un dans une couleur neutre comme le noir, le beige ou le bleu marine avec du matériel de qualité. Il devrait être assez grand pour votre ordinateur portable, votre portefeuille et vos essentiels quotidiens tout en maintenant sa forme lorsqu&apos;il est chargé.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Le Clutch de Soirée :</strong> Chaque femme a besoin d&apos;un clutch sophistiqué pour les événements formels, les dîners et les occasions spéciales. Choisissez-en un dans un matériau intemporel comme le satin, le velours ou le cuir métallique. Une chaîne ajoute de la polyvalence, vous permettant de le porter ou de le porter en bandoulière.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Le Sac Bandoulière :</strong> Parfait pour la commodité mains libres, un sac bandoulière est idéal pour le shopping, les voyages et les sorties décontractées. Cherchez des sangles réglables et plusieurs compartiments pour l&apos;organisation. Un bandoulière de taille moyenne dans une couleur neutre s&apos;assortit avec tout.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Le Sac à Bandoulière Structuré :</strong> Ce style classique fonctionne pour le jour et le soir. Un sac à bandoulière bien fait avec une poignée supérieure et une sangle amovible offre de la flexibilité. Choisissez-en un dans une couleur intemporelle qui complète votre palette de garde-robe.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Conseils d&apos;Investissement :</strong> Lors de la construction de votre collection de sacs à main, privilégiez la qualité plutôt que la quantité. Cherchez du cuir véritable, des coutures bien construites et du matériel robuste. Quelques pièces bien choisies vous serviront mieux que de nombreux sacs tendance mais mal faits. Considérez la taille et la fonctionnalité qui correspondent à votre mode de vie.
      </p>
      <p className="text-gray-700 my-6">
        Rappelez-vous, la meilleure collection de sacs à main est celle qui reflète votre style personnel et répond à vos besoins pratiques. Commencez par ces essentiels et construisez à partir de là en fonction de votre mode de vie et de vos préférences.
      </p>
    `
  },
  'statement-jewelry-styling-guide': {
    title: 'Bijoux statement : Comment styliser des pièces audacieuses',
    category: 'ACCESSOIRES',
    date: '16 FÉV 2025',
    author: 'Isabella Martinez',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop',
    content: `
      <p className="margin-4 text-lg text-gray-700 my-6">
        Les bijoux statement ont le pouvoir de transformer toute tenue de ordinaire à extraordinaire. Ces pièces audacieuses peuvent servir de point focal de votre look, mais les styliser nécessite équilibre et confiance. Voici comment porter des bijoux statement avec panache.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Une Pièce Statement À La Fois :</strong> La règle d&apos;or des bijoux statement est de laisser une pièce être la vedette. Si vous portez des boucles d&apos;oreilles audacieuses, gardez votre collier minimal ou sautez-le entièrement. Un bracelet épais s&apos;assortit mieux avec des boucles d&apos;oreilles simples. Cela crée un équilibre visuel et empêche vos accessoires de se faire concurrence pour l&apos;attention.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Associer Avec Des Tenues Simples :</strong> Les bijoux statement fonctionnent mieux lorsque le reste de votre tenue est relativement simple. Un collier audacieux élève un t-shirt blanc uni ou une robe noire. Les boucles d&apos;oreilles dramatiques brillent contre un blazer ou un pull simple. Laissez vos bijoux être le point focal en gardant les vêtements minimaux.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Considérer Les Proportions :</strong> L&apos;équilibre est la clé. Si vous avez une grande carrure ou des épaules larges, des pièces statement plus grandes sembleront proportionnelles. Les silhouettes petites peuvent aussi gérer des bijoux audacieux, mais considérez des pièces statement légèrement plus petites ou plus raffinées. Faites confiance à vos instincts sur ce qui semble juste pour votre corps.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Mélanger Les Métaux Avec Réflexion :</strong> Bien que mélanger les métaux soit tendance, faites-le intentionnellement. De grandes pièces statement en métaux mélangés peuvent bien fonctionner ensemble, mais assurez-vous qu&apos;elles se complètent plutôt que de se heurter. Considérez les sous-tons—les ors chauds et les argents froids peuvent fonctionner ensemble s&apos;ils sont équilibrés correctement.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Coordination des Couleurs :</strong> Lors du port de bijoux statement colorés, considérez comment ils interagissent avec la palette de couleurs de votre tenue. Les couleurs complémentaires créent l&apos;harmonie, tandis que les couleurs contrastées font une déclaration audacieuse. Les vêtements neutres permettent aux bijoux colorés de briller, tandis que les vêtements à motifs nécessitent une considération plus prudente.
      </p>
      <p className="text-gray-700 my-6">
        <strong>La Confiance Est La Clé :</strong> L&apos;accessoire le plus important lors du port de bijoux statement est la confiance. Si vous vous sentez bien dedans, vous aurez l&apos;air bien dedans. Commencez par des pièces qui résonnent avec votre style personnel, puis expérimentez progressivement avec des choix plus audacieux à mesure que votre niveau de confort grandit.
      </p>
      <p className="text-gray-700 my-6">
        Les bijoux statement sont une opportunité d&apos;exprimer votre personnalité et d&apos;élever votre style. N&apos;ayez pas peur d&apos;expérimenter, mais rappelez-vous que les meilleurs accessoires sont ceux qui vous font vous sentir authentiquement vous-même.
      </p>
    `
  },
  'belts-shoes-complete-guide': {
    title: 'Ceintures et chaussures : Le guide complet de coordination',
    category: 'ACCESSOIRES',
    date: '14 FÉV 2025',
    author: 'Olivia Chen',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&h=600&fit=crop',
    content: `
      <p className="margin-4 text-lg text-gray-700 my-6">
        La relation entre les ceintures et les chaussures peut faire ou défaire une tenue. Bien que les règles strictes d&apos;assortiment se soient assouplies dans la mode moderne, comprendre comment coordonner ces accessoires crée des looks polis et cohérents. Voici votre guide complet pour associer les ceintures et les chaussures.
      </p>
      <p className="text-gray-700 my-6">
        <strong>L&apos;Assortiment Classique :</strong> Les règles de style traditionnelles suggèrent d&apos;assortir votre ceinture à vos chaussures. Cela crée un look cohérent et poli qui est particulièrement approprié pour les environnements formels ou professionnels. Une ceinture brune avec des chaussures brunes, ou noir avec noir, fournit une apparence propre et coordonnée.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Coordination Moderne :</strong> La mode contemporaine permet plus de flexibilité. Au lieu d&apos;assortiments exacts, visez l&apos;harmonie. Une ceinture brun foncé peut s&apos;assortir avec des chaussures cognac ou beige si elles sont dans la même famille de couleurs. La clé est de s&apos;assurer qu&apos;elles se complètent plutôt que de se heurter.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Les Matériaux Comptent :</strong> Considérez le matériau des deux pièces. Une ceinture en cuir s&apos;assortit mieux avec des chaussures en cuir. Les ceintures en toile ou en tissu décontractées fonctionnent bien avec des baskets ou des chaussures décontractées. Les ceintures en daim peuvent s&apos;assortir avec des chaussures en daim pour un look texturé cohérent.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Pièces Statement :</strong> Si vous portez des chaussures statement—comme des couleurs audacieuses ou des designs uniques—considérez une ceinture plus neutre pour éviter la concurrence visuelle. Inversement, une ceinture statement peut être équilibrée avec des chaussures plus simples et classiques. L&apos;objectif est l&apos;harmonie visuelle, pas la concurrence d&apos;assortiment.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Familles de Couleurs :</strong> Groupez vos accessoires par familles de couleurs. Les bruns chauds (cognac, beige, châtaigne) fonctionnent ensemble. Les bruns froids (acajou, expresso) se complètent. Le noir et le gris peuvent être mélangés, surtout dans les environnements professionnels. Les neutres comme le beige, le taupe et la crème créent une palette sophistiquée.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Briser Les Règles :</strong> Les règles de mode sont faites pour être brisées avec réflexion. Une ceinture colorée peut ajouter de l&apos;intérêt à une tenue neutre sans chaussures assorties. Les ceintures métalliques peuvent fonctionner avec diverses couleurs de chaussures lorsqu&apos;elles sont stylisées intentionnellement. La clé est de s&apos;assurer que le contraste semble délibéré et stylé, pas accidentel.
      </p>
      <p className="text-gray-700 my-6">
        <strong>Construire Votre Collection :</strong> Commencez par des basiques polyvalents : une ceinture en cuir noir, une ceinture en cuir brun, et peut-être une option en toile ou en tissu neutre. Assortissez-les avec les couleurs de chaussures correspondantes dans votre garde-robe. À mesure que vous construisez votre collection, vous pouvez ajouter des pièces plus uniques qui fonctionnent avec vos articles existants.
      </p>
      <p className="text-gray-700 my-6">
        Rappelez-vous, l&apos;objectif est de créer un look cohérent et poli. Que vous assortissiez exactement ou coordonniez avec réflexion, la confiance dans vos choix est ce qui fait vraiment fonctionner une tenue. Faites confiance à votre œil et n&apos;ayez pas peur d&apos;expérimenter dans votre zone de confort.
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
          Retour à l&apos;accueil
        </Link>

        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 my-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-gray-600 mb-8 text-sm uppercase tracking-wide">
          {post.date} | PAR {post.author.toUpperCase()}
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
            <p>&copy; 2025 Votre Guide de Style Mode. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
