import React, { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/7966543/pexels-photo-7966543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "मंदिर बाहरी दृश्य",
    category: "मंदिर"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/5851032/pexels-photo-5851032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "पूजा रस्म",
    category: "अनुष्ठान"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/7966517/pexels-photo-7966517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "मंदिर का शिखर",
    category: "मंदिर"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/13774747/pexels-photo-13774747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "दीप प्रज्वलन",
    category: "अनुष्ठान"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/8820076/pexels-photo-8820076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "मंदिर आंतरिक दृश्य",
    category: "मंदिर"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2740411/pexels-photo-2740411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "दीपावली उत्सव",
    category: "उत्सव"
  }
];

const categories = ["सभी", "मंदिर", "अनुष्ठान", "उत्सव"];

const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("सभी");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const filteredImages = selectedCategory === "सभी" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">फोटो गैलरी</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            श्री राम मंदिर के भव्य दर्शन, अनुष्ठान और उत्सवों की झलकियां।
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-orange-100 text-orange-800 hover:bg-orange-200'}
                `}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:-translate-y-1 hover:shadow-lg"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4 bg-white">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full mb-2">
                  {image.category}
                </span>
                <h3 className="text-lg font-medium text-gray-800">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/gallery" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            पूरी गैलरी देखें
          </a>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl mx-auto"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-orange-300 transition-colors"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-h-[80vh] mx-auto rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-lg font-medium text-gray-800">{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;