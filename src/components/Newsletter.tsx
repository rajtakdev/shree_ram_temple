import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-orange-600 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-3 bg-yellow-500" />
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-orange-500 rounded-full opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500 rounded-full opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">हमारे साथ जुड़े रहें</h2>
            <p className="text-lg max-w-3xl mx-auto text-orange-50">
              मंदिर से जुड़े नवीनतम समाचार, कार्यक्रम और आध्यात्मिक सामग्री के लिए हमारे न्यूज़लेटर की सदस्यता लें।
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white border-opacity-20">
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="आपका नाम" 
                  className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-orange-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="आपका ईमेल पता" 
                  className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-orange-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-semibold px-6 py-3 rounded-md transition-colors shadow-md whitespace-nowrap"
              >
                सदस्यता लें
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-orange-100">
              आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। हम आपकी जानकारी किसी तृतीय पक्ष के साथ साझा नहीं करेंगे।
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;