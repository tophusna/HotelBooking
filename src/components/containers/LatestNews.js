const LatestNews = () => {
  return (
    <div className="" style={{ fontFamily: "Ubuntu" }}>
      <div className="flex flex-col h-[100px] relative">
        <div className="absolute flex justify-center items-center bottom-0 left-[80px] bg-white rounded-t-md">
          <p className="text-[#846316] text-[24px] py-3 px-8">
            HOTEL LATEST NEWS
          </p>
        </div>
      </div>
      <div className="flex gap-x-[60px] px-[80px] pt-[40px] pb-[100px]">
        <div className="w-1/4">
          <div className="flex flex-col ">
            <img
              className="h-[330px] rounded-xl"
              src="/images/boat.png"
              alt=""
            />
            <div className="flex flex-col px-3 pt-3">
              <p className="text-[#846316] text-[16px]">
                Opening Day Of Boating Season, Seat...
              </p>
              <p className="text-[#C0C0C0] pb-3">
                May 10, 2022
              </p>
              <button className="text-[#052288BF]" style={{ alignSelf: "flex-start" }}>READ MORE</button>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex flex-col ">
            <img
              className="h-[330px] rounded-xl"
              src="/images/boat.png"
              alt=""
            />
            <div className="flex flex-col px-3 pt-3">
              <p className="text-[#846316] text-[16px]">
                Opening Day Of Boating Season, Seat...
              </p>
              <p className="text-[#C0C0C0] pb-3">
                May 10, 2022
              </p>
              <button className="text-[#052288BF]" style={{ alignSelf: "flex-start" }}>READ MORE</button>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex flex-col ">
            <img
              className="h-[330px] rounded-xl"
              src="/images/boat.png"
              alt=""
            />
            <div className="flex flex-col px-3 pt-3">
              <p className="text-[#846316] text-[16px]">
                Opening Day Of Boating Season, Seat...
              </p>
              <p className="text-[#C0C0C0] pb-3">
                May 10, 2022
              </p>
              <button className="text-[#052288BF]" style={{ alignSelf: "flex-start" }}>READ MORE</button>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex flex-col ">
            <img
              className="h-[330px] rounded-xl"
              src="/images/boat.png"
              alt=""
            />
            <div className="flex flex-col px-3 pt-3">
              <p className="text-[#846316] text-[16px]">
                Opening Day Of Boating Season, Seat...
              </p>
              <p className="text-[#C0C0C0] pb-3">
                May 10, 2022
              </p>
              <button className="text-[#052288BF]" style={{ alignSelf: "flex-start" }}>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
