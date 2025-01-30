import React from 'react';
import '../styles/main.css';
import AnimatedBackground from './Animated-Background';

const Blog = () => {
    return (
        <div className="min-h-screen py-48 home-container">
            <AnimatedBackground />
            <div className='container mx-auto w-3/4'>
                <div id='blog-header' className="py-16">
                    <div className="container mx-auto">
                        <h1 className="text-5xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text home-title">Blog</h1>
                        <h2 className='text-3xl md:text-2xl font-medium mb-6 text-sub'>Latest Posts</h2>
                    </div>
                </div>
                <div id='blog-content' className="blog-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <article className='blog-card flex flex-col p-6 h-full'>
                            <h2 className="text-xl font-semibold mb-4 text-white">Blog Post 1</h2>
                            <p className="mb-4 flex-grow text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit.</p>
                            <button className="button-primary">Read More</button>
                        </article>
                        <article className='blog-card flex flex-col p-6 h-full'>
                            <h2 className="text-xl font-semibold mb-4 text-white">Blog Post 2</h2>
                            <p className="mb-4 flex-grow text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit.</p>
                            <button className="button-primary">Read More</button>
                        </article>
                        <article className='blog-card flex flex-col p-6 h-full'>
                            <h2 className="text-xl font-semibold mb-4 text-white">Blog Post 3</h2>
                            <p className="mb-4 flex-grow text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit.</p>
                            <button className="button-primary">Read More</button>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
