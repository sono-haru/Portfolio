import React, { useState } from "react";
import "../App.css"; // 必要なスタイルをインポート

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 画像のリスト
  const images = [1, 2, 3, 4, 5];

  // 前の画像に戻る
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // 次の画像に進む
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // 前後の画像を取得
  const prevImage = images[(currentIndex - 1 + images.length) % images.length];
  const nextImage = images[(currentIndex + 1) % images.length];

  return (
    <section className="mb-16 md:pt-20 relative">
      <div className="bg-[#8FB0A9] h-[320px] py-12 flex justify-center items-center relative">
        <div className="relative w-full max-w-[1000px] flex justify-center items-center">
          {/* スマホサイズでは非表示にする */}
          <div className="absolute left-0 hidden sm:block">
            <img
              src={`/slide${prevImage}.jpg`}
              alt={`前のスライド ${prevImage}`}
              className="w-[200px] h-[200px] rounded-xl border-4 border-[#FEFBF4] border-solid transition-all duration-300"
            />
          </div>

          {/* 現在の画像 */}
          <div className="flex justify-center items-center">
            <img
              src={`/slide${images[currentIndex]}.jpg`}
              alt={`現在のスライド ${images[currentIndex]}`}
              className="w-[200px] h-[200px] rounded-xl border-4 border-[#FEFBF4] border-solid transition-all duration-300"
            />
          </div>

          {/* スマホサイズでは非表示にする */}
          <div className="absolute right-0 hidden sm:block">
            <img
              src={`/slide${nextImage}.jpg`}
              alt={`次のスライド ${nextImage}`}
              className="w-[200px] h-[200px] rounded-xl border-4 border-[#FEFBF4] border-solid transition-all duration-300"
            />
          </div>

          {/* 前のボタン */}
          <button
            className="absolute left-6 md:left-[260px] text-[#D98A66] bg-[#FEFBF4] font-bold py-2 md:py-4 px-3 md:px-5 rounded-full z-10 text-3xl hover:opacity-95 hover:scale-[99%] active:scale-[96%] transition-transform ease-in-out duration-200"
            onClick={prevSlide}
          >
            ←
          </button>

          {/* 次のボタン */}
          <button
            className="absolute right-6 md:right-[260px] text-[#D98A66] bg-[#FEFBF4] font-bold py-2 md:py-4 px-3 md:px-5 rounded-full z-10 text-3xl hover:opacity-95 hover:scale-[99%] active:scale-[96%] transition-transform ease-in-out duration-200"
            onClick={nextSlide}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SlideShow;
