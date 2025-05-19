import React, { useState } from 'react';

const tourSpots = [
  {
    id: 1,
    name: "गर्भगृह",
    description: "मंदिर का मुख्य कक्ष जहां भगवान श्री राम की मूर्ति विराजमान है।",
    image: "https://images.pexels.com/photos/14704971/pexels-photo-14704971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "रंगमंडप",
    description: "मंदिर का प्रवेश मंडप जहां भक्तगण प्रार्थना करते हैं।",
    image: "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "शिखर",
    description: "मंदिर का सबसे ऊंचा हिस्सा जो पारंपरिक नागर शैली में निर्मित है।",
    image: "https://images.pexels.com/photos/4258899/pexels-photo-4258899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const VirtualTour: React.FC = () => {
  const [activeSpot, setActiveSpot] = useState(tourSpots[0]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">वर्चुअल दर्शन</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            कहीं से भी श्री राम मंदिर के प्रमुख स्थलों का आभासी दर्शन करें।
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[500px] relative">
            <img
              src={activeSpot.image}
              alt={activeSpot.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{activeSpot.name}</h3>
              <p>{activeSpot.description}</p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-orange-50 rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-bold text-orange-800 mb-6">दर्शनीय स्थल</h3>
              <ul className="space-y-4">
                {tourSpots.map(spot => (
                  <li 
                    key={spot.id} 
                    className={`
                      p-4 rounded-lg cursor-pointer transition-all
                      ${activeSpot.id === spot.id 
                        ? 'bg-orange-200 border-l-4 border-orange-600 shadow-md' 
                        : 'bg-white hover:bg-orange-100'}
                    `}
                    onClick={() => setActiveSpot(spot)}
                  >
                    <h4 className="font-semibold text-lg text-orange-900 mb-1">{spot.name}</h4>
                    <p className="text-gray-600 text-sm">{spot.description}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a 
                  href="/virtual-tour" 
                  className="inline-block w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md text-center"
                >
                  पूर्ण आभासी यात्रा शुरू करें
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;