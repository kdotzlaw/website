import React from 'react';
import '../styles/Blog.css';

const Blog = () => {
    return (
        <div id='body' className="pt-12 bg-gunmetal text-white  px-4 sm:px-6 lg:px-8">
            <div id='blog-header' className="py-16">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-bold text-center">Blog</h1>
                    <h2 className='py-4 text-center'>Latest Posts</h2>
                </div>
            </div>
            <div id='blog-content' className="container mx-auto py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article className='card flex flex-col bg-white shadow-lg rounded-lg p-6 h-full'>
                        <h2 className="text-xl font-semibold mb-4">Blog Post 1</h2>
                        <p className="mb-4 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
                    </article>
                    <article className='card flex flex-col bg-white shadow-lg rounded-lg p-6 h-full'>
                        <h2 className="text-xl font-semibold mb-4">Blog Post 2</h2>
                        <p className="mb-4 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
                    </article>
                    <article className='card flex flex-col bg-white shadow-lg rounded-lg p-6 h-full'>
                        <h2 className="text-xl font-semibold mb-4">Blog Post 3</h2>
                        <p className="mb-4 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blog;
