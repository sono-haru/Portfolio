import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  const settings = {
    autoplay: false,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
  };

  return (
    <section className='mb-16 md:pt-20'>
      <div className='bg-[#8FB0A9] h-[300px] pt-12 pl-24'>
        <Slider {...settings} className="slide">
            <div><img src="slide1.jpg" alt="スライド1" className="rounded-xl border-4 border-[#FEFBF4] border-solid w-[200px] h-[200px]"/></div>
            <div><img src="slide2.jpg" alt="スライド2" className="rounded-xl border-4 border-[#FEFBF4] border-solid w-[200px] h-[200px]"/></div>
            <div><img src="slide3.jpg" alt="スライド3" className="rounded-xl border-4 border-[#FEFBF4] border-solid w-[200px] h-[200px]"/></div>
        </Slider>
      </div>
    </section>
  );
};

export default SlideShow;