import '../../styles/textRotator.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TextRotator = () => {
  var settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <h1 className='text-stone-50'>Paul Killian</h1>
        </div>
        <div>
          <h1 className='text-stone-50'>Font-End Developer</h1>
        </div>
        <div>
          <h1 className='text-stone-50'>UI/UX Designer</h1>
        </div>
      </Slider>
    </div>
  );
}

export default TextRotator