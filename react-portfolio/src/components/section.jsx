import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Section = ({ id, sectionTitle, sectionText, sectionText2, detailUrl, imgUrl, alt,  reverse = false }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );
  
    if (textRef.current) {
      observer.observe(textRef.current);
    }
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <>
      <div id={id} className="mt-10 scroll-mt-8"></div>
      <div className="mt-16 md:mt-24 max-w-full px-4 md:px-40">
        <p className="text-center text-2xl mb-16">~ {sectionTitle} ~</p>
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} justify-center md:justify-center md:gap-20 md:items-center`}>
          
          <div className="w-full md:w-auto flex justify-center md:justify-start" data-aos={reverse ? 'fade-left' : 'fade-right'}>
            <img
              src={imgUrl}
              alt={alt}
              className="rounded-lg w-[60%] md:w-[250px] max-w-full"
              style={{ boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)' }}
            />
          </div>

          <div
            ref={textRef}
            className={`md:px-0 px-20 mt-4 md:mt-0 text-[10px] md:text-base text-left fade-in ${isVisible ? 'visible' : ''}`}
          >
            <p className="mb-1 md:px-0">{sectionText}</p>
            <p className="mb-2 md:px-0">{sectionText2}</p>

            <Link
              to={detailUrl}
              className="text-center text-[8px] md:text-[12px] bg-[#DF8472] rounded-lg text-white py-1 px-3 hover:opacity-80 transition-opacity duration-300"
              style={{ boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)' }}
            >
              詳しく見る
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Section;