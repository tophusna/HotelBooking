import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselWithWork() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1440, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex justify-center w-full rounded-xl p-[100px]" >
      <Carousel
        responsive={responsive}
        arrows={false}
        infinite={true}
        pauseOnHover={false}
        autoPlay
        autoPlaySpeed={2000}
        renderButtonGroupOutside={true}
        showDots={true}
      >
        <div>
          <img src="/images/work1.png" alt="" className=" h-[80px] object-cover"/>
        </div>
        <div>
          <img src="/images/work2.png" alt="" className=" h-[80px] object-cover"/>
        </div>
        <div>
          <img src="/images/work3.png" alt="" className=" h-[80px] object-cover"/>
        </div>
        <div>
          <img src="/images/work4.png" alt="" className=" h-[80px] object-cover"/>
        </div>
        <div>
          <img src="/images/work5.png" alt="" className=" h-[80px] object-cover"/>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselWithWork;
