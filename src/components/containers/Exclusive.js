import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Exclusive = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1440, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="" style={{ fontFamily: "Ubuntu" }}>
      <div className="flex flex-col bg-[#B6191F] h-[100px] relative">
        <div className="absolute flex justify-center items-center bottom-0 left-[80px] bg-white rounded-t-md">
          <p className="text-[#846316] text-[24px] py-3 px-8">EXCLUSIVE DEAL</p>
        </div>
      </div>
      <div className="px-[100px] py-[60px] mt-[40px]">
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
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/card.png"
              alt=""
              className=" h-[400px] object-cover"
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-[#B6191F] px-[24px] py-[6px] rounded-xl text-[20px] text-white my-[10px]"
            >
              CLAIM
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/card.png"
              alt=""
              className=" h-[400px] object-cover"
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-[#B6191F] px-[24px] py-[6px] rounded-xl text-[20px] text-white my-[10px]"
            >
              CLAIM
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/card.png"
              alt=""
              className=" h-[400px] object-cover"
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-[#B6191F] px-[24px] py-[6px] rounded-xl text-[20px] text-white my-[10px]"
            >
              CLAIM
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/card.png"
              alt=""
              className=" h-[400px] object-cover"
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-[#B6191F] px-[24px] py-[6px] rounded-xl text-[20px] text-white my-[10px]"
            >
              CLAIM
            </button>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Exclusive;
