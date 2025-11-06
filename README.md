# StyleVogue - Fashion Blog

A modern, responsive fashion blog built with Next.js 14 and Tailwind CSS.

## Features

- 🎨 Modern, clean design inspired by high-end fashion blogs
- 📱 Fully responsive layout
- 🎭 Hero carousel with multiple featured posts
- 📝 Rich blog post content with fashion insights
- 💡 Daily fashion tips and styling advice
- 📊 Trending fashion topics
- 📹 Video highlights
- 📧 Newsletter subscription
- ⚡ Fast performance with Next.js 14
- 🎯 SEO-friendly structure
- 📚 Information-based content focused on fashion education

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── blog/[slug]/      # Dynamic blog post pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Sidebar.tsx        # Sidebar with popular posts, videos, shop
│   ├── HeroSection.tsx    # Hero carousel section
│   └── LatestPosts.tsx    # Latest blog posts grid
└── public/                # Static assets
```

## Available Blog Posts

- How to unlock creativity & make something useful?
- Minimalist wardrobe essentials for every season
- Color psychology in fashion: What your wardrobe says about you
- Vintage finds: How to shop second-hand like a pro
- The art of mixing patterns and textures
- Sustainable fashion: The future of style

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Next Image** - Optimized image handling

## Build for Production

```bash
npm run build
npm start
```

## Customization

- Update blog posts in `app/blog/[slug]/page.tsx`
- Modify styling in component files or `app/globals.css`
- Add new pages in the `app` directory
- Customize colors in `tailwind.config.ts`

## License

This project is open source and available for personal use.

# fashion-blog
