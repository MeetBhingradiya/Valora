"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import blogs from '../../../data/blogData';
import React from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<{ title: string; content: string; image: string } | null>(null);

  useEffect(() => {
    const foundBlog = blogs.find((b) => b.slug === slug);
    // If foundBlog is undefined, set it to null
    setBlog(foundBlog || null);
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>; // or handle not found case
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pt-28 bg-[#f5f5f5]">
        <h1 className="text-4xl font-bold mb-8 text-center">{blog.title}</h1>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <p className="text-gray-700 leading-relaxed">{blog.content}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
