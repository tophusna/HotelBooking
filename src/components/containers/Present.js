const Present = () => {
  return (
    <div
      className="flex justify-between items-center bg-[url('bg1.jfif')] bg-cover bg-no-repeat bg-center py-[100px] px-[200px] "
      style={{ fontFamily: "Ubuntu" }}
    >
      <div className="p-[40px] rounded-tr-[40px] rounded-bl-[40px] w-2/5 bg-[#00000078] opacity-47">
        <p className="text-[25px] text-white">
          Luxury Hotels, a renowned global brand founded in England 17 years
          ago, is currently present in 89 countries. We provide Luxury Hotels
          for affluent travellers through our online platform and in print and
          digital formats. Each Edition is accessible for free download on 5
          different platforms and attracts 4-5 million online readers annually.
          <br />
          <br />
          Through our Printed Edition Rotation Program, your hotel will be
          featured as one of the top Luxury Hotels and will ensure a continuous
          influx of bookings and a consistent occupancy rate of 800,000 to 1
          million tourists throughout the year, all without any commission fees.
        </p>
      </div>
      <div className="flex flex-col text-center gap-2">
        <img src="/images/logo1.png" alt="Logo" />
        <p className="text-[#C08832] text-[20px]">Presents</p>
      </div>
    </div>
  );
};

export default Present;
