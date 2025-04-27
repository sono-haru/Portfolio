import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Section = ({ id, sectionTitle, sectionText, detailUrl, imgUrl, alt, imgW, imgH, reverse = false }) => {
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
      <div id={id} className="mt-10"></div>
      <div className="mt-24 max-w-full px-40">
        <p className="text-center text-2xl mb-16">~ {sectionTitle} ~</p>
        <div className={`flex justify-between items-center ${reverse ? 'flex-row-reverse' : ''}`}>
          
          <div data-aos={reverse ? 'fade-left' : 'fade-right'}>
            <img
              src={imgUrl}
              alt={alt}
              width={imgW}
              height={imgH}
              className="rounded-lg"
              style={{ boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)' }}
            />
          </div>

          {/* テキスト：スクロール表示でopacity変更 */}
          <div
            ref={textRef}
            className={`fade-in ${isVisible ? 'visible' : ''}`}
          >
            <p className="mb-2">{sectionText}</p>
            <Link
              to={detailUrl}
              className="text-[12px] bg-[#D88B62] rounded-lg text-white py-1 px-3 hover:opacity-80 transition-opacity duration-300"
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