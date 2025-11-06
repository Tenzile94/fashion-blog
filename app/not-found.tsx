import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-6xl font-serif font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

