import React from 'react';
import { Clock, Map, Ban, Calendar } from 'lucide-react';

const VisitorInfo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">यात्री जानकारी</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            श्री राम मंदिर की यात्रा के लिए आवश्यक जानकारी और दिशानिर्देश।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Temple Timings */}
          <div className="bg-orange-50 rounded-lg p-6 shadow-md border border-yellow-100">
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Clock className="h-8 w-8 text-orange-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">दर्शन समय</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">प्रातः आरती:</span> सुबह 5:00 बजे
                  </li>
                  <li>
                    <span className="font-medium">दर्शन प्रारंभ:</span> सुबह 6:00 बजे
                  </li>
                  <li>
                    <span className="font-medium">मध्याह्न भोग:</span> दोपहर 12:00 बजे
                  </li>
                  <li>
                    <span className="font-medium">संध्या आरती:</span> शाम 7:00 बजे
                  </li>
                  <li>
                    <span className="font-medium">शयन आरती:</span> रात 8:30 बजे
                  </li>
                  <li>
                    <span className="font-medium">दर्शन समाप्ति:</span> रात 9:00 बजे
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* How to Reach */}
          <div className="bg-orange-50 rounded-lg p-6 shadow-md border border-yellow-100">
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Map className="h-8 w-8 text-orange-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">कैसे पहुंचें</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">निकटतम हवाई अड्डा:</span> अयोध्या अंतर्राष्ट्रीय हवाई अड्डा (30 किमी)
                  </li>
                  <li>
                    <span className="font-medium">निकटतम रेलवे स्टेशन:</span> अयोध्या रेलवे स्टेशन (5 किमी)
                  </li>
                  <li>
                    <span className="font-medium">सड़क मार्ग:</span> अयोध्या राष्ट्रीय राजमार्ग 27 और राज्य राजमार्गों से जुड़ा है
                  </li>
                  <li>
                    <span className="font-medium">स्थानीय परिवहन:</span> ऑटो-रिक्शा, टैक्सी और ई-रिक्शा उपलब्ध हैं
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Dress Code */}
          <div className="bg-orange-50 rounded-lg p-6 shadow-md border border-yellow-100">
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Ban className="h-8 w-8 text-orange-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">आचार संहिता</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">वेशभूषा:</span> परंपरागत या सम्मानजनक पोशाक पहनें
                  </li>
                  <li>
                    <span className="font-medium">निषिद्ध वस्तुएँ:</span> मोबाइल फोन, कैमरा, बैग, और खाद्य पदार्थ गर्भगृह में ले जाने की अनुमति नहीं है
                  </li>
                  <li>
                    <span className="font-medium">आभूषण:</span> कीमती गहने और सामान सुरक्षा कारणों से न लाएं
                  </li>
                  <li>
                    <span className="font-medium">आचरण:</span> मंदिर परिसर में शांति बनाए रखें और मार्गदर्शकों के निर्देशों का पालन करें
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Special Days */}
          <div className="bg-orange-50 rounded-lg p-6 shadow-md border border-yellow-100">
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Calendar className="h-8 w-8 text-orange-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">विशेष दिवस</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">राम नवमी:</span> श्री राम जन्मोत्सव (मार्च/अप्रैल)
                  </li>
                  <li>
                    <span className="font-medium">दिवाली:</span> अयोध्या दीपोत्सव (अक्टूबर/नवंबर)
                  </li>
                  <li>
                    <span className="font-medium">विवाह पंचमी:</span> श्री राम और सीता माता के विवाह का उत्सव
                  </li>
                  <li>
                    <span className="font-medium">प्राण प्रतिष्ठा दिवस:</span> 22 जनवरी (मंदिर उद्घाटन दिवस)
                  </li>
                </ul>
                <p className="mt-4 text-gray-600 text-sm">
                  *इन दिनों पर अतिरिक्त भीड़ रहती है, अग्रिम बुकिंग सुनिश्चित करें
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/visitor-info" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            अधिक जानकारी प्राप्त करें
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisitorInfo;