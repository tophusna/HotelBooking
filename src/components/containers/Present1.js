const Present = () => {
  return (
    <div
      className="relative flex justify-center items-center"
      style={{ fontFamily: "Ubuntu" }}
    >
      <img className="w-full" src="/images/bg3.png" alt="" />
      <div className="absolute flex flex-col text-center gap-2">
        <img src="/images/logo2.png" alt="Logo" />
        <p className="text-[#C08832] text-[30px]">Presents</p>
      </div>
    </div>
  );
};

export default Present;
