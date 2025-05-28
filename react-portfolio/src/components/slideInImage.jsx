import { useEffect, useRef, useState } from "react";

const SlideInImage = ({ src, alt = "", comment = "", direction = "right", className = "" }) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // アニメーション用

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  const translate = direction === "left" ? "-translate-x-10" : "translate-x-10";

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setShowModal(true), 50); // CSS transition のため微小ディレイ
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setIsModalOpen(false), 300); // アニメーション終了後にDOMから削除
  };

  return (
    <>
      <div
        ref={imageRef}
        className={`cursor-pointer transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${translate}`
        } ${className}`}
        onClick={openModal}
      >
        <img
          src={src}
          alt={alt}
          className="border-2 border-[#826063] w-64 md:w-80 rounded-xl shadow-md hover:opacity-85 hover:scale-[99%] transition-transform ease-in-out duration-200"
          style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)" }}
        />
      </div>

      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative bg-white px-4 py-12 md:p-10 rounded-xl shadow-lg max-w-md w-[90%] transform transition-all duration-300 ${
              showModal ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-1 right-2 bg-red-400 py-1 px-3 rounded-full text-white text-xl font-bold hover:opacity-95 hover:scale-[96%] active:scale-[82%] transition-transform ease-in-out duration-200"
            >
              ×
            </button>
            <img src={src} alt={alt} className="rounded-lg w-full mb-4 border-2 border-[#826063]" />
            <p className="text-center text-gray-700 text-[11px] md:text-sm">{comment}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SlideInImage;
