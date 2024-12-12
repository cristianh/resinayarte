
import Slider from "react-slick";

export const Carrusel = () => {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius:"100%" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" , borderRadius:"100%"}}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        adaptiveHeight: true
      };
   

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img className="d-block w-100" src="/assets/images/slider_images/imag3.jpg" />
                </div>
                <div>
                    <img className="d-block w-100" src="/assets/images/slider_images/imag1.jpg" />
                </div>
                <div>
                    <img className="d-block w-100" src="/assets/images/slider_images/imag2.jpg" />
                </div>
            </Slider>
        </>
    )
}
