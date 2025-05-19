import React from 'react';

const historyTimeline = [
  {
    year: "अयोध्या का इतिहास",
    event: "अयोध्या त्रेतायुग में राजा दशरथ की राजधानी थी और भगवान श्री राम का जन्मस्थान है।"
  },
  {
    year: "1528",
    event: "बाबरी मस्जिद का निर्माण हुआ।"
  },
  {
    year: "1992",
    event: "बाबरी मस्जिद विवाद।"
  },
  {
    year: "2019",
    event: "सुप्रीम कोर्ट ने अयोध्या विवाद पर निर्णय दिया और राम मंदिर निर्माण का मार्ग प्रशस्त किया।"
  },
  {
    year: "2020",
    event: "5 अगस्त, 2020 को प्रधानमंत्री नरेंद्र मोदी ने राम मंदिर का शिलान्यास किया।"
  },
  {
    year: "2024",
    event: "22 जनवरी, 2024 को भव्य राम मंदिर का उद्घाटन और प्राण प्रतिष्ठा समारोह संपन्न हुआ।"
  }
];

const History: React.FC = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">ऐतिहासिक यात्रा</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            श्री राम मंदिर की ऐतिहासिक यात्रा और महत्वपूर्ण क्षणों का विवरण।
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-300"></div>
          
          {/* Timeline events */}
          <div className="space-y-6 md:space-y-12">
            {historyTimeline.map((item, index) => (
              <div key={index} className="relative flex md:flex-row flex-col items-center md:justify-between">
                {/* Left side (odd) or Right side (even) */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:self-end' : 'md:order-2 md:self-start'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${index % 2 === 0 ? 'border-orange-600' : 'border-yellow-500'}`}>
                    <h3 className="text-xl font-bold text-orange-800 mb-2">{item.year}</h3>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-orange-600 border-4 border-white shadow"></div>
                
                {/* Mobile view dot and line */}
                <div className="md:hidden w-4 h-4 bg-orange-600 rounded-full my-1"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/about" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            विस्तृत इतिहास पढ़ें
          </a>
        </div>
      </div>
    </section>
  );
};

export default History;