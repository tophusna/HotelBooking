import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselWithActor() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1440, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full border-[1px] border-gray rounded-xl p-[40px]">
      <Carousel
        responsive={responsive}
        arrows={true}
        infinite={true}
        pauseOnHover={false}
        autoPlay
        autoPlaySpeed={2000}
        renderButtonGroupOutside={true}
        showDots={true}
      >
        <div>
          <img src="/images/magazine.png" alt="" className="w-full h-[760px] object-cover"/>
        </div>
        <div>
          <img src="/images/magazine.png" alt="" className="w-full h-[760px] object-cover"/>
        </div>
        <div>
          <img src="/images/magazine.png" alt="" className="w-full h-[760px] object-cover"/>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselWithActor;
