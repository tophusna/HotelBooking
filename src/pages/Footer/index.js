import { useState, useEffect } from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-col justify-between w-full text-[14px] text-white bg-[#212735] py-14 px-[120px]"
      style={{ fontFamily: "" }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-5">
          <p className="text-[30px] text-[#D80F0F]">LUXURY HOTELS</p>
          <p>Luxury Hotel And Resorts</p>
          <p>Luxury Hotel And Magazines</p>
          <p>Hotel News</p>
          <p>General News</p>
          <p>Win A Holiday</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-[30px] text-[#D80F0F]">About Us</p>
          <p>Our Team</p>
          <p>About Us</p>
          <p>What We Do</p>
          <p>Branding registration</p>
          <p>Collaborative Advantages</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-[30px] text-[#D80F0F]">Advertiser</p>
          <p>Distribution</p>
          <p>Publish News</p>
          <p>Media Packs</p>
          <p>List Your Hotels</p>
          <p>Advertise With Us</p>
          <p>Nominate Your Hotel</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-[30px] text-[#D80F0F]">Contact With US</p>
          <input
            type="text"
            placeholder="Phone number"
            class="w-[300px] rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          <input
            type="text"
            placeholder="Email"
            class="w-[300px] rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          <p className="font-bold text-[30px] mt-10">CONTSCT US</p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-[30px] text-[#D80F0F]">SOCIAL NETWORK</p>
        </div>
        <div className="flex justify-between items-center px-2 my-[20px]">
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS1.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS2.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS3.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS4.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS5.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS6.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS7.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS8.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS9.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS10.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS11.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS12.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS13.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS14.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS15.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS16.png" alt="" width={60}/>
          </button>
          <button>
            <img className="rounded-xl w-[45px] 2xl:w-[60px]" src="/images/footerS17.png" alt="" width={60}/>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
