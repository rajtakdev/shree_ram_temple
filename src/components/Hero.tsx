import React from 'react';
import templeImage from '../img/temple.png';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background Image */}
      
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${templeImage})`,
          filter: "brightness(0.9)"
        }}
      />
      
      {/* Decorative Border */}
      {/* <div className="absolute inset-0 border-[15px] border-yellow-400/20 m-4 pointer-events-none" /> */}
      <div className="absolute inset-0  m-4 pointer-events-none" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white pt-24">
        <div className="max-w-4xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            श्री राम मंदिर, अयोध्या
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
            भारत की आध्यात्मिक और सांस्कृतिक विरासत का प्रतीक
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
            भगवान श्री राम के जन्मस्थान पर स्थित यह भव्य मंदिर भारतीय संस्कृति, आस्था और विरासत का प्रतीक है। 
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/virtual-tour" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              वर्चुअल दर्शन करें
            </a>
            <a 
              href="/visitor-info" 
              className="bg-white hover:bg-gray-100 text-orange-600 font-medium py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              यात्रा जानकारी
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-yellow-500 opacity-80" />
    </div>
  );
};

export default Hero;