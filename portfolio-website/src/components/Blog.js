import React, { useState } from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Blog Post 1</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit. Nullam euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">Read More</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Blog Post 2</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit. Nullam euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">Read More</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Blog Post 3</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit. Nullam euismod, nisl eget ultrices ultricies, nunc nisi aliquam risus, eu varius nisi nisl eu elit.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">Read More</button>
                </div>
            </div>
        </div>
    );
};
export default Blog;