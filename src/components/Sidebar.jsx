import React from 'react'
import wombImg from '../assets/Ellipse 484.png'
import AdmimPng from "../assets/Vector.png";
import Role from "../assets/role.png";
import Contact from "../assets/contact.png";
import user from "../assets/user.png";
import sub from "../assets/sub.png";
import mental from "../assets/mental.png";
import baby from "../assets/baby.png";
import trans from "../assets/trans.png";
import feedback from "../assets/feedback.png";
import support from "../assets/support.png";
import web from "../assets/web.png";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='w-[300px] h-[1300px] bg-[rgb(10,48,85)]'>
      <div className="flex flex-col items-center mb-4 ">
        <h1 className="font-[lato] font-[800px] text-[40px] leading-[48px] text-[#FF6666] mt-4">Womb</h1>
        <img className="my-2" src={wombImg} alt="womb" />
        <h3 className="text-[12px] font-[700px] font-[Poppins] leading-[14px] text-white">
          Alexandra Robert
        </h3>
        <p className="text-[10px] font-[400px] font-[Poppins] leading-[12px] text-white my-1">
          alexandrarobert@gmail.com
        </p>
      </div>
      <hr />
      <div className='flex flex-col'>
        <div className='flex flex-col gap-6 items-center mt-6'>
          <div className='w-[240px] h-[56px] rounded-[10px] bg-[#FF6666] flex justify-start gap-4 items-center pl-3 cursor-pointer '>
            <img src={AdmimPng} alt="admin" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Admin Management </p>
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px]  flex justify-start gap-4 items-center pl-3 cursor-pointer'>
            <img src={Role} alt="role" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Role Management</p>
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px]  flex justify-start gap-3 items-center pl-3 cursor-pointer'>
            <div className='flex gap-3 items-center'>
            <img src={Contact} alt="content" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Content Management</p>
            </div>
            <IoIosArrowDown className='text-white' />
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px]  flex justify-start gap-4 items-center pl-3 cursor-pointer'>
            <img src={user} alt="user" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">User analytics</p>
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px]  flex justify-start gap-4 items-center pl-3 cursor-pointer'>
            <img src={sub} alt="sub" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Subscription</p>
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px]  flex justify-start gap-4 items-center pl-3 cursor-pointer'>
            <div className='flex gap-3 items-center'>
            <img src={mental} alt="mental" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Mental Health</p>
            </div>
            <IoIosArrowDown className='text-white' />
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px]  flex justify-start gap-4 items-center pl-3 cursor-pointer'>
            <img src={baby} alt="baby" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Baby & Mom</p>
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px] flex justify-start gap-4 items-center pl-3 cursor-pointer'>
            <img src={trans} alt="trans" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Transactions</p>
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px]  flex justify-start gap-4 items-center pl-3 cursor-pointer'>
            <img src={feedback} alt="feedback" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Feedback</p>
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px] flex justify-start gap-4 items-center pl-3 cursor-pointer'>
            <img src={support} alt="support" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Support Requests</p>
          </div>
          <div className='w-[240px] h-[56px] rounded-[10px]  flex justify-start gap-4 items-center pl-3 cursor-pointer'>
            <div className='flex gap-3 items-center'>
            <img src={web} alt="web" />
            <p className="font-[lato] font-[700] text-[18px]  leading-[21px] text-white ">Website Master</p>
            </div>
            <IoIosArrowDown className='text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar