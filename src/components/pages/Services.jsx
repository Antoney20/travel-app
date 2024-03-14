import '../../App.css';

import React, { useState, useEffect } from 'react';

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  const services = [
    {
      title: "Travel",
      description: "Discover your travels and adventures using trvl"
    },
    {
      title: "Accommodation",
      description: "Enjoy best leisure and comfort by traveling with us"
    },
    {
      title: "Destinations",
      description: "Explore various scenic landscapes and travel around the world"
    },
    {
      title: "Locations",
      description: "Multiple locations based on your choices"
    },
    {
      title: "contact",
      description: "Get help in realizing your wild adventures"
    },
    {
      title: "Support",
      description: "Support available all day"
    }
  ];

  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-3xl font-bold mb-4'>SERVICES</h1>
    
      {loading ? (
        <div className="text-center">
          <p className="text-gray-500">Loading...</p>
          <p className="text-gray-500 center">Loading various services offered</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Preloading cards */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className='p-4 bg-gray-200 rounded-md'>
                <div className='animate-pulse h-30 bg-gray-300 mb-2 rounded-md'></div>
             
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
        <p className="text-gray-500 center">About various services here</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         
            {services.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-md h-30 shadow-md hover:shadow-lg transition duration-300">
                <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
