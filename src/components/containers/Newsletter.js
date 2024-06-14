const Newsletter = () => {
  return (
    <div
      className="flex flex-col items-center bg-[#F7F7F7] text-white pb-[70px] gap-[50px]"
      style={{ fontFamily: "Ubuntu" }}
    >
      <div className="w-full bg-[#B6191F] h-[30px]">
        
      </div>
      <p className="text-[36px] text-[#C08832]">Subscribe Newsletter</p>
      <form className="flex justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Write Your Email .."
          className="bg-white p-3 w-[500px] border-[1px] border-gray rounded-xl h-[58px]"
          style={{
            backgroundImage: "url('/images/email.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "455px center",
            paddingRight: "10px",
          }}
        />
        <button
          type="submit"
          className="flex justify-center items-center bg-[#D80F0F] px-4 py-1 rounded-xl w-[170px] h-[56px] text-[20px]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
