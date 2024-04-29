import { useEffect, useState } from 'react';
import { ArrowUp } from 'phosphor-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`${
        isVisible ? 'block' : 'hidden'
      } dark:bg-btn dark:text-btc fixed bottom-6 right-6 bg-red-500 text-white hover:bg-red-400 p-4 rounded-full shadow-md transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};

export default BackToTopButton;
