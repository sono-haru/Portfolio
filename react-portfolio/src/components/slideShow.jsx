import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  const settings = {
    autoplay: false,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    centerMode: false,
    infinite: true,
  };

  return (
    <section className='mb-16 md:pt-20'>
      <div className='bg-[#8FB0A9] h-[300px] py-12 flex justify-center items-center'>
      <Slider {...settings} className="w-full max-w-6xl">
  <div className="flex justify-center">
    <img
      src="slide1.jpg"
      alt="スライド1"
      className="mx-4 rounded-xl border-4 border-[#FEFBF4] border-solid w-[200px] h-[200px]"
    />
  </div>
  <div className="flex justify-center">
    <img
      src="slide2.jpg"
      alt="スライド2"
      className="mx-4 rounded-xl border-4 border-[#FEFBF4] border-solid w-[200px] h-[200px]"
    />
  </div>
  <div className="flex justify-center">
    <img
      src="slide3.jpg"
      alt="スライド3"
      className="mx-4 rounded-xl border-4 border-[#FEFBF4] border-solid w-[200px] h-[200px]"
    />
  </div>
  <div className="flex justify-center">
    <img
      src="slide4.jpg"
      alt="スライド4"
      className="mx-4 rounded-xl border-4 border-[#FEFBF4] border-solid w-[200px] h-[200px]"
    />
  </div>
  <div className="flex justify-center">
    <img
      src="slide5.jpg"
      alt="スライド5"
      className="mx-4 rounded-xl border-4 border-[#FEFBF4] border-solid w-[200px] h-[200px]"
    />
  </div>
</Slider>

</div>

    </section>
  );
};

export default SlideShow;
