import React from 'react';

interface DonationOption {
  id: number;
  title: string;
  amount: string;
  description: string;
  icon: JSX.Element;
}

const donationOptions: DonationOption[] = [
  {
    id: 1,
    title: "सामान्य दान",
    amount: "₹1,100",
    description: "मंदिर के रख-रखाव और नित्य पूजा के लिए दान करें।",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "अन्नदान",
    amount: "₹5,100",
    description: "भक्तों और ज़रूरतमंदों के भोजन के लिए दान करें।",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.38a48.474 48.474 0 0 0-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "मूर्ति अलंकरण",
    amount: "₹11,000",
    description: "भगवान श्री राम की मूर्ति के श्रृंगार और अलंकरण के लिए दान करें।",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    )
  }
];

const DonationSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">मंदिर में सहयोग करें</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            आपका दान श्री राम मंदिर के विकास और संचालन में महत्वपूर्ण भूमिका निभाता है।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationOptions.map(option => (
            <div 
              key={option.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-yellow-200 transform transition-transform hover:-translate-y-1"
            >
              <div className="p-6 border-b border-yellow-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-orange-900">{option.title}</h3>
                  <div className="text-orange-600">
                    {option.icon}
                  </div>
                </div>
                <p className="text-3xl font-bold text-orange-800 mb-4">{option.amount}</p>
                <p className="text-gray-600">{option.description}</p>
              </div>
              <div className="p-6 bg-orange-50">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-lg transition-colors">
                  दान करें
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/donate" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
          >
            सभी दान विकल्प देखें
          </a>
          
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-md border border-yellow-100">
            <h4 className="font-semibold text-lg text-orange-800 mb-4">
              UPI और बैंक ट्रांसफर द्वारा भी दान करें
            </h4>
            <p className="text-gray-600">
              आप UPI आईडी <span className="font-semibold">donation@shreeramtemple</span> के माध्यम से भी दान कर सकते हैं।
              बैंक ट्रांसफर के लिए विवरण हमारे दान पृष्ठ पर उपलब्ध है।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;