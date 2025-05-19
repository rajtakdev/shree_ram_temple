import React from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "राम नवमी उत्सव",
    date: "17 अप्रैल, 2025",
    time: "सुबह 7:00 - रात 9:00",
    description: "भगवान श्री राम के जन्मदिवस के अवसर पर विशेष पूजा अनुष्ठान और सांस्कृतिक कार्यक्रम।",
    image: "https://images.pexels.com/photos/7966543/pexels-photo-7966543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "दीपावली महोत्सव",
    date: "12 नवंबर, 2024",
    time: "शाम 5:00 - रात 10:00",
    description: "मंदिर परिसर में भव्य दीप प्रज्वलन एवं रामायण पर आधारित सांस्कृतिक कार्यक्रम।",
    image: "https://images.pexels.com/photos/2740411/pexels-photo-2740411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "सुंदरकांड पाठ",
    date: "प्रत्येक मंगलवार",
    time: "शाम 4:00 - 6:00",
    description: "हर मंगलवार को सामूहिक सुंदरकांड पाठ का आयोजन किया जाता है।",
    image: "https://images.pexels.com/photos/5851032/pexels-photo-5851032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-yellow-100">
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wide">
            {event.date}
          </span>
          <span className="ml-2 text-gray-500 text-sm">
            {event.time}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-orange-900">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <a 
          href={`/events/${event.id}`} 
          className="text-orange-600 font-medium hover:text-orange-700 inline-flex items-center"
        >
          विवरण देखें
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const UpcomingEvents: React.FC = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">आगामी कार्यक्रम</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            मंदिर में आयोजित होने वाले आगामी धार्मिक और सांस्कृतिक कार्यक्रमों की जानकारी।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/events" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            सभी कार्यक्रम देखें
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;