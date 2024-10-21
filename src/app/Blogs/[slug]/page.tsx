"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import blogs from "../../../data/blogData";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<{
    title: string;
    content: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    const foundBlog = blogs.find((b) => b.slug === slug);
    setBlog(foundBlog || null);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-gray-700">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-4 pt-12 mt-14 bg-[#f5f5f5] lg:p-8">
        {/* Hero Section */}
        {/* <div
                    className="w-full h-80 bg-cover bg-center rounded-md shadow-md"
                    style={{
                        backgroundImage: `url(${blog.image})`,
                    }}
                >
                    <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
                        <h1 className="text-5xl font-bold text-white">{blog.title}</h1>
                    </div>
                </div> */}

         {/* Blog Content */}
         <div className="max-w-7xl mx-auto bg-white p-4 lg:p-8 rounded-lg shadow-lg overflow-wrap break-words">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
            <span className="text-gray-500 text-sm lg:text-base">
              Author: {blog.author} | Date: {blog.date}
            </span>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <FacebookShareButton
                url={window.location.href}
                quote={`Check out this blog: ${blog.title}`}
                className="hover:opacity-80"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={window.location.href}
                title={`Check out this blog: ${blog.title}`}
                className="hover:opacity-80"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <LinkedinShareButton
                url={window.location.href}
                summary={`Check out this blog: ${blog.title}`}
                className="hover:opacity-80"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>

          <div className="mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          <div className="text-gray-800 leading-relaxed mx-auto max-w-3xl">
            {/* Render HTML content using dangerouslySetInnerHTML */}
            <div
              className="prose prose-sm sm:prose lg:prose-lg blog-container"
              dangerouslySetInnerHTML={{ __html: blog.content as string }}
            />
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto mt-6 flex justify-center">
          <button
            className="p-3 lg:p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full max-w-xs"
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
