
import '../../App.css';
import Footer from '../Footer';
import  { useState, useEffect } from 'react';

function Products() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
    <div className='container mx-auto min-h-80 mt-8'>
      <h1 className='text-3xl font-bold mb-4'>PRODUCTS</h1>
      {loading ? (
        <div className="text-center">
          <p className="text-gray-500">Loading...</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Preloading cards */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className='p-4 bg-gray-200 rounded-md'>
                <div className='animate-pulse h-40 bg-gray-300 mb-2 rounded-md'></div>
                <div className='h-6 bg-gray-300 w-2/3 mb-2 rounded-md'></div>
                <div className='h-6 bg-gray-300 w-1/2 rounded-md'></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>Products not loaded</p>
        </div>
      )}
    </div>
    <Footer/>
    
    </>
   
  );
}

export default Products;
