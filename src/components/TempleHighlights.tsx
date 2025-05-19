import React from 'react';

interface HighlightProps {
  title: string;
  description: string;
  iconElement: React.ReactNode;
}

const HighlightItem: React.FC<HighlightProps> = ({ title, description, iconElement }) => {
  return (
    <div className="bg-orange-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-yellow-100">
      <div className="flex flex-col items-center text-center">
        <div className="text-orange-600 mb-4 rounded-full bg-orange-100 p-3">
          {iconElement}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-orange-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const TempleHighlights: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">मंदिर की विशेषताएँ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            श्री राम मंदिर अयोध्या में भारतीय वास्तुकला, आध्यात्मिकता और संस्कृति का अद्भुत संगम है।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <HighlightItem
            title="भव्य वास्तुकला"
            description="नागर शैली में निर्मित, इस मंदिर की भव्य वास्तुकला भारतीय परंपरा का उत्कृष्ट उदाहरण है।"
            iconElement={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>}
          />
          
          <HighlightItem
            title="आध्यात्मिक अनुभव"
            description="मंदिर में आध्यात्मिक शांति और दिव्य अनुभूति का वातावरण सभी आगंतुकों को मिलता है।"
            iconElement={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>}
          />
          
          <HighlightItem
            title="भव्य मूर्तियाँ"
            description="कलात्मक मूर्तियाँ और नक्काशीदार दीवारें मंदिर की सुंदरता को बढ़ाती हैं।"
            iconElement={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>}
          />
          
          <HighlightItem
            title="ऐतिहासिक महत्व"
            description="यह स्थल भगवान श्री राम के जन्मस्थान के रूप में ऐतिहासिक और धार्मिक महत्व रखता है।"
            iconElement={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default TempleHighlights;