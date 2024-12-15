import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { X } from 'lucide-react';
import { categories, projects }  from './Projects';
import '../styles/main.css';

const ImageModal = ({ image, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="relative max-w-4xl w-full mx-auto">
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="bg-black rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            {image.descriptor && (
              <div className="p-4 bg-black bg-opacity-75">
                <p className="text-white text-center">{image.descriptor}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default ImageModal;