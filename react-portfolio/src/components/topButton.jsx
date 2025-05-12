import { useState, useEffect } from 'react';

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 850);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-4 md:right-10 py-3 md:py-5 px-4 md:px-6 rounded-full text-xl text-[#FEFBF4] bg-[#8FB0A9] shadow-md transition-opacity duration-500 z-50 hover:opacity-95 hover:scale-[99%] active:scale-[97%] ${
        showButton ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      ↑
    </button>
  );
};

export default TopButton;
