'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const heroPosts = [
  {
    id: 1,
    category: "MODE",
    title: "Comment libérer la créativité et créer quelque chose d'utile ?",
    date: "12 FÉV 2025",
    author: "Lora Mariane",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop",
    slug: "unlock-creativity-fashion"
  },
  {
    id: 2,
    category: "STYLE",
    title: "L'art de mélanger les motifs et les textures",
    date: "10 FÉV 2025",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop",
    slug: "mixing-patterns-textures"
  },
  {
    id: 3,
    category: "TENDANCES",
    title: "Mode durable : L'avenir du style",
    date: "8 FÉV 2025",
    author: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop",
    slug: "sustainable-fashion-future"
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroPosts.length) % heroPosts.length);
  };

  const currentPost = heroPosts[currentIndex];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
      <Image
        src={currentPost.image}
        alt={currentPost.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 md:px-12 pb-8 md:pb-12">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-white text-gray-900 text-xs font-semibold uppercase tracking-wider mb-4">
              {currentPost.category}
            </span>
            <Link href={`/blog/${currentPost.slug}`}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight hover:text-gray-200 transition-colors">
                {currentPost.title}
              </h1>
            </Link>
            <p className="text-white text-sm md:text-base opacity-90">
              {currentPost.date} | PAR {currentPost.author.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Diapositive précédente"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Diapositive suivante"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
