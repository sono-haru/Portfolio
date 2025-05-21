import { useEffect, useRef, useState } from "react";

const SlideInImage = ({ src, alt = "", direction = "right", className = "" }) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  const translate = direction === "left" ? "-translate-x-10" : "translate-x-10";

  return (
    <div
      ref={imageRef}
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${translate}`
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="border-2 border-[#826063] w-64 md:w-80 rounded-xl shadow-md"
        style={{ boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)' }}

      />
    </div>
  );
};

export default SlideInImage;
