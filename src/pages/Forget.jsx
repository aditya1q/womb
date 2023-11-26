import React from "react";
import RightImage from "../assets/forget.png";
import wombLogo from "../assets/WOMB logo .png";
import wombLogo1 from "../assets/WOMB logo1.png";
import sms from "../assets/sms.png";
import eye from "../assets/eye-slash.png";
import Arrow from "../assets/arrowright.png";
import { Link } from "react-router-dom";

const Forget = () => {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col h-screen justify-center items-center">
        <div className=" flex flex-col justify-center gap-2 ">
          <img src={wombLogo} alt="womblogo" />
          <img src={wombLogo1} alt="womblogo" />
        </div>

        <div className="flex flex-col items-center mt-3 ">
          <h1 className="text-[20px] font-[600px] font-[lato]  leading-[26px] my-1">
            Forget Your Password?
          </h1>
          <p className="text-[16px] font-[400px] font-[lato]  leading-[24px] text-[#0A3055] ">
            Enter your email address and reset password
          </p>
          <p className="text-[16px] font-[400px] font-[lato]  leading-[24px] text-[#0A3055]">Your Password.</p>
          <form className="w-full flex flex-col items-start mt-6 gap-4">
            <div className=" border border-[#0A3055] flex justify-between items-center w-[400px] h-[60px] rounded-[8px]  px-3 ">
              <div className="flex items-center gap-2">
                <img src={sms} alt="sms" />
                <input
                  className="outline-none font-[lato] font-[15px] leading-[24px] text-[#0A3055]"
                  type="email"
                  placeholder="Enter Email Address"
                />
              </div>
              <img src={eye} alt="eye" />
            </div>
            <button className="bg-[#FF6666] text-center w-[400px] h-[60px] rounded-[8px] text-white font-[lato] font-[400] text-[14px] leading-[20px]">
              Reset Password
            </button>
          </form>
          <div className=" flex justify-start  cursor-pointer w-full mt-3 gap-1 ">
            <Link to="/">
              <img src={Arrow} alt="arrow" />
            </Link>
            <span className="text-[16px] font-[400px] font-[lato]  leading-[24px] text-[#0A3055]">
              Back to Login
            </span>
          </div>
        </div>
      </div>
      <div className="flex-2">
        <img
          className="object-fill w-full h-full"
          src={RightImage}
          alt="forget"
        />
      </div>
    </div>
  );
};

export default Forget;
