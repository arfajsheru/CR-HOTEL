import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll position restore karte hain jab component unmount hota hai
    const handleScroll = () => {
      sessionStorage.setItem(location.key, window.scrollY);
    };

    // Event listener to save scroll position
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  useEffect(() => {
    // Scroll position restore karte hain jab component mount hota hai
    const scrollY = sessionStorage.getItem(location.key);
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
    }
  }, [location]);
};

export default useScrollRestoration;