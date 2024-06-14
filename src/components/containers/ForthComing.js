import CarousenWithActor from "../carousel/CarouselWithActor";
import CarousenWithMagazine from "../carousel/CarouselWithMagazine";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Forth = () => {
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
    <div style={{ fontFamily: "Ubuntu" }}>
      <div className="flex flex-col bg-[#B6191F] h-[100px] relative">
        <div className="absolute flex justify-center items-center bottom-0 left-[80px] bg-white rounded-t-md">
          <p className="text-[#846316] text-[24px] py-3 px-8">
            FORTHCOMING LUXURY HOTELS EDITIONS
          </p>
        </div>
      </div>
      <div className="flex items-center gap-10 px-[80px] py-[50px]">
        <div className="w-1/3">
          <div className="flex items-center border-[1px] border-gray rounded-xl px-[15px] py-[20px]">
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
                <img
                  src="/images/actor.png"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div>
                <img
                  src="/images/actor.png"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div>
                <img
                  src="/images/actor.png"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="w-2/3">
          <div className="flex items-center border-[1px] border-gray rounded-xl px-[25px] py-[30px]">
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
                <img
                  src="/images/magazine.png"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div>
                <img
                  src="/images/magazine.png"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div>
                <img
                  src="/images/magazine.png"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forth;
