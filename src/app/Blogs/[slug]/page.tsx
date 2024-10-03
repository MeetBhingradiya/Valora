"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import blogs from '../../../data/blogData';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<{ title: string; content: string; image: string } | null>(null);

  useEffect(() => {
    const foundBlog = blogs.find((b) => b.slug === slug);
    setBlog(foundBlog || null);
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pt-28 bg-[#f5f5f5]">
        {/* Hero Section */}
        <div
          className="w-full h-80 bg-cover bg-center rounded-md shadow-md"
          style={{
            backgroundImage: `url(${blog.image})`,
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">{blog.title}</h1>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto bg-white p-8 mt-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-500">Author: Valora Infotech | Date: Oct 3, 2024</span>
            <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center">
              <FontAwesomeIcon icon={faShareAlt} className="mr-2" />
              Share
            </button>
          </div>
          <div className="mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-80 object-cover rounded-md"
            />
          </div>
          <div className="text-gray-800 leading-relaxed">
          <ReactMarkdown className="prose">{blog.content}</ReactMarkdown>
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-4xl mx-auto mt-6">
          <button
            className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => window.history.back()}
          >
            Back to All Blogs
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
