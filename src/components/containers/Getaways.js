const Getaways = () => {
  return (
    <div className="" style={{ fontFamily: "Ubuntu" }}>
      <div className="flex flex-col bg-[#B6191F] h-[80px] relative">
        <div className="absolute flex justify-center items-center bottom-0 left-[80px] bg-white rounded-t-md">
          <p className="text-[#846316] text-[24px] py-3 px-8">
            Unveil New Luxe getaways Every week
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-[url('bg2.jfif')] bg-cover bg-no-repeat bg-center gap-x-[20px] px-[80px] py-[70px] text-[22px]">
        <div className="flex flex-col gap-y-2">
          <button
            type="submit"
            className="flex justify-center items-center bg-[#D80F0F] py-[10px] rounded-xl w-[280px] text-white"
          >
            France
          </button>
          <button
            type="submit"
            className="flex justify-center items-center bg-white py-[10px] rounded-xl w-[280px] text-[#D80F0F]"
          >
            United Kindom
          </button>
          <button
            type="submit"
            className="flex justify-center items-center bg-white py-[10px] rounded-xl w-[280px] text-[#D80F0F]"
          >
            Emirates
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl">
          <img className="mb-4" src="/images/logo1.png" alt="" />
          <div className="relative">
            <img className="" src="/images/video1.png" alt="" />
          </div>
          {/* <video controls className="w-full h-full">
            <source src="/videos/video.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </div>
  );
};

export default Getaways;
