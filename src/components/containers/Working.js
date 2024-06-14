import CarouselWithWork from "../carousel/CarouselWithWorking";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Work = () => {
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
    <div className="mb-[100px]" style={{ fontFamily: "Ubuntu" }}>
      <div className="flex flex-col h-[100px] relative">
        <div className="absolute flex justify-center items-center bottom-0 left-[80px] bg-white rounded-t-md">
          <p className="text-[#846316] text-[24px] py-3 px-8">
            WHO WE ARE WORKING WITH
          </p>
        </div>
      </div>
      <div className="px-[100px] mt-[40px]">
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
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/work1.png"
              alt=""
              className=" h-[90px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/work2.png"
              alt=""
              className=" h-[90px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/work3.png"
              alt=""
              className=" h-[90px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/work4.png"
              alt=""
              className=" h-[90px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/work5.png"
              alt=""
              className=" h-[90px] object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Work;
