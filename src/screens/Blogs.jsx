import React, { useState } from 'react';
import MetaData from '../components/MetaData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "The Art of Fragrance: Understanding Premium Perfumes",
    excerpt: "Discover the intricate world of luxury perfumery and learn how master perfumers craft their signature scents.",
    image: "/images/blogimg/1.jpg",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Sustainable Luxury: The Future of Premium Fragrances",
    excerpt: "Exploring how luxury brands are embracing sustainability without compromising on quality and elegance.",
    image: "/images/blogimg/2.jpg",
    date: "March 14, 2024"
  },
  {
    id: 3,
    title: "The Psychology of Scent: Why Fragrances Matter",
    excerpt: "Understanding the profound impact of premium fragrances on mood, memory, and personal identity.",
    image: "/images/blogimg/3.jpg",
    date: "March 13, 2024"
  },
  {
    id: 4,
    title: "Crafting Your Signature Scent Collection",
    excerpt: "Expert guidance on building a sophisticated perfume collection that reflects your personality.",
    image: "/images/blogimg/4.jpg",
    date: "March 12, 2024"
  },
  {
    id: 5,
    title: "The Heritage of Luxury Perfumery",
    excerpt: "A journey through time exploring the rich history and evolution of premium fragrance houses.",
    image: "/images/blogimg/5.jpg",
    date: "March 11, 2024"
  },
  {
    id: 6,
    title: "Seasonal Scents: Adapting Your Fragrance",
    excerpt: "Learn how to curate your perfume selection according to seasons and occasions.",
    image: "/images/blogimg/6.jpg",
    date: "March 10, 2024"
  },
  {
    id: 7,
    title: "The Science Behind Perfume Creation",
    excerpt: "Exploring the chemistry and artistry that goes into creating memorable fragrances.",
    image: "/images/blogimg/7.jpg",
    date: "March 9, 2024"
  },
  {
    id: 8,
    title: "Niche Perfumes: Hidden Gems",
    excerpt: "Discovering unique and exclusive fragrances from boutique perfume houses.",
    image: "/images/blogimg/8.jpg",
    date: "March 8, 2024"
  },
  {
    id: 9,
    title: "The Art of Layering Fragrances",
    excerpt: "Master the technique of combining different scents to create your unique signature.",
    image: "/images/blogimg/9.jpg",
    date: "March 7, 2024"
  },
  {
    id: 10,
    title: "Fragrance Notes Decoded",
    excerpt: "Understanding the complex pyramid of top, heart, and base notes in perfumery.",
    image: "/images/blogimg/10.jpg",
    date: "March 6, 2024"
  },
  {
    id: 11,
    title: "Essential Oils in Modern Perfumery",
    excerpt: "The role of natural ingredients in contemporary fragrance creation.",
    image: "/images/blogimg/11.jpg",
    date: "March 5, 2024"
  },
  {
    id: 12,
    title: "Perfume Photography: Capturing Essence",
    excerpt: "The art of photographing fragrances and their beautiful bottles.",
    image: "/images/blogimg/12.jpg",
    date: "March 4, 2024"
  },
  {
    id: 13,
    title: "Men's Fragrance Guide",
    excerpt: "Essential knowledge for gentlemen seeking their perfect scent.",
    image: "/images/blogimg/13.jpg",
    date: "March 3, 2024"
  },
  {
    id: 14,
    title: "The History of Iconic Perfume Houses",
    excerpt: "Exploring the legacy of legendary fragrance creators and their masterpieces.",
    image: "/images/blogimg/14.jpg",
    date: "March 2, 2024"
  },
  {
    id: 15,
    title: "Travel-Sized Fragrances",
    excerpt: "The best portable perfumes for the modern jet-setter.",
    image: "/images/blogimg/15.jpg",
    date: "March 1, 2024"
  },
  {
    id: 16,
    title: "Fragrance Storage and Care",
    excerpt: "Tips for maintaining and preserving your precious perfume collection.",
    image: "/images/blogimg/16.jpg",
    date: "February 29, 2024"
  },
  {
    id: 17,
    title: "Perfume Bottle Design",
    excerpt: "The intersection of fragrance and artistic packaging design.",
    image: "/images/blogimg/17.jpg",
    date: "February 28, 2024"
  },
  {
    id: 18,
    title: "Sustainable Packaging in Perfumery",
    excerpt: "How luxury brands are adopting eco-friendly packaging solutions.",
    image: "/images/blogimg/18.jpg",
    date: "February 27, 2024"
  }
];

function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 18;
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="min-h-screen bg-white">
      <MetaData title="Blogs" />
      <header className="py-20 px-4 text-center bg-slate-300">
        <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Our Blogs</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our curated collection of insights into the world of premium fragrances,
          craftsmanship, and luxury experiences.
        </p>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="group cursor-pointer transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`${blog.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={blog.title}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-gray-700">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-4 mt-16">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-lg font-medium">
            {currentPage} of {totalPages}
          </div>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Blogs;
