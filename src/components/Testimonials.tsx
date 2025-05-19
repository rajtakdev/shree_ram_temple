import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "सुनील वर्मा",
    location: "दिल्ली",
    quote: "श्री राम मंदिर की यात्रा एक अद्भुत आध्यात्मिक अनुभव था। मंदिर की वास्तुकला और वातावरण मन को शांति प्रदान करता है।",
    avatar: "https://images.pexels.com/photos/7148364/pexels-photo-7148364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "आरती शर्मा",
    location: "मुंबई",
    quote: "अयोध्या के श्री राम मंदिर में दर्शन करना मेरे लिए सौभाग्य की बात थी। यहाँ की व्यवस्था और स्वच्छता अत्यंत प्रशंसनीय है।",
    avatar: "https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "अमित राय",
    location: "बेंगलुरु",
    quote: "मंदिर परिसर में शांति और आध्यात्मिकता का वातावरण है। यहाँ की अलौकिक प्रतिमा और पूजा अनुष्ठान अविस्मरणीय हैं।",
    avatar: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">भक्तों के अनुभव</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            श्री राम मंदिर के दर्शन से भक्तों को मिली आध्यात्मिक अनुभूति और शांति।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border border-yellow-100 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-orange-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-200"
                />
                <div>
                  <h4 className="font-semibold text-orange-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;