import CarousenWithActor from "../carousel/CarouselWithActor";
import CarousenWithMagazine from "../carousel/CarouselWithMagazine";

const Forth = () => {
  return (
    <div style={{ fontFamily: "Ubuntu" }}>
      <div className="flex flex-col bg-[#B6191F] h-[100px] relative">
        <div className="absolute flex justify-center items-center bottom-0 left-[80px] bg-white rounded-t-md">
          <p className="text-[#846316] text-[24px] py-3 px-8">
            FORTHCOMING LUXURY HOTELS EDITIONS
          </p>
        </div>
      </div>
      <div className="flex gap-10 px-[80px] py-[50px]">
        <div className="flex w-1/3">
          <CarousenWithActor />
        </div>
        <div className="flex w-2/3">
          <CarousenWithMagazine />
        </div>
      </div>
    </div>
  );
};

export default Forth;
