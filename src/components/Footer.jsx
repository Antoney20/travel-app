import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-gray-900 py-8'>
<section className='text-white container mx-auto flex flex-col items-center'>
  <p className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
    Join the Adventure newsletter to receive our best vacation deals
  </p>
  <p className='text-base sm:text-lg lg:text-xl mb-4'>
    You can unsubscribe at any time.
  </p>
  <div className='flex flex-col sm:flex-row items-center'>
    <input
      className='py-2 px-4 mb-4 sm:mb-0 sm:mr-4 rounded-l-md text-black bg-white placeholder-gray-500 outline-none focus:outline-none'
      name='email'
      type='email'
      placeholder=' Email address'
    />
    <Button buttonStyle='btn--outline rounded-r-md'>Subscribe</Button>
  </div>
</section>

      <div className='container mx-auto flex flex-wrap justify-center mt-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-10'>
          <div className='text-white'>
            <h2 className='text-lg font-bold mb-2'>About Us</h2>
            <ul className="list-none p-0 m-0">
              <li><Link to='/sign-up'>How it works</Link></li>
              <li><Link to='/'>Testimonials</Link></li>
              <li><Link to='/'>Careers</Link></li>
              <li><Link to='/'>Investors</Link></li>
              <li><Link to='/'>Terms of Service</Link></li>
            </ul>
          </div>
          <div className='text-white'>
            <h2 className='text-lg font-bold mb-2'>Contact Us</h2>
            <ul className="list-none p-0 m-0">
              <li><Link to='/'>Contact</Link></li>
              <li><Link to='/'>Support</Link></li>
              <li><Link to='/'>Destinations</Link></li>
              <li><Link to='/'>Sponsorships</Link></li>
            </ul>
          </div>
          <div className='text-white'>
            <h2 className='text-lg font-bold mb-2'>Videos</h2>
            <ul className="list-none p-0 m-0">
              <li><Link to='/'>Submit Video</Link></li>
              <li><Link to='/'>Ambassadors</Link></li>
              <li><Link to='/'>Agency</Link></li>
              <li><Link to='/'>Influencer</Link></li>
            </ul>
          </div>
          <div className='text-white'>
            <h2 className='text-lg font-bold mb-2'>Social Media</h2>
            <ul className="list-none p-0 m-0">
              <li><Link to='/'>Instagram</Link></li>
              <li><Link to='/'>Facebook</Link></li>
              <li><Link to='/'>Youtube</Link></li>
              <li><Link to='/'>Twitter</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <section className='container mx-auto mt-8 text-white flex flex-col items-center'>
        <div className='mb-4'>
          <Link to='/' className='text-3xl font-bold flex items-center'>
            TRVL
            <i className='fab fa-typo3 ml-2' />
          </Link>
        </div>
        <p className='mb-4'>TRVL @ Antoney20 © 2023</p>
        <div className='flex space-x-4'>
          <Link
            className='text-white hover:text-gray-500'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i className='fab fa-facebook-f' />
          </Link>
          <Link
            className='text-white hover:text-gray-500'
            to='/'
            target='_blank'
            aria-label='Instagram'
          >
            <i className='fab fa-instagram' />
          </Link>
          <Link
            className='text-white hover:text-gray-500'
            to='/'
            target='_blank'
            aria-label='Youtube'
          >
            <i className='fab fa-youtube' />
          </Link>
          <Link
            className='text-white hover:text-gray-500'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i className='fab fa-twitter' />
          </Link>
          <Link
            className='text-white hover:text-gray-500'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin' />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
