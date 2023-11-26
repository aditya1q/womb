import React from 'react'
import dot from '../assets/dot.png'
import Add from '../assets/add-square.png'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { data } from "../data";
import deleteImg from "../assets/delete.png";
const Admin = () => {
  return (
    <div className='flex flex-col  mx-4 w-4/5'>
      <div className='bg-[url("https://i.imgur.com/ZreG2ha.png")]  rounded-[20px]  h-[195px] mt-6 mx-6'>
        <div className='bg-[url("https://i.imgur.com/mgJYXT2.png")] rounded-[20px] h-[195px]  flex flex-col justify-center gap-4 pl-6'>
          <h1 className="font-[Open Sans] text-[35px] leading-[28px] font-[700px] text-[#0A3055]">
            Admin Management
          </h1>
          <div className='flex gap-4 items-center'>
            <p className="font-[Open Sans] text-[20px] leading-[20px] font-[700px] text-[#0A3055]">Dashboard</p>
            <img src={dot} alt="dot" />
            <p className="font-[Open Sans] text-[20px] leading-[20px] font-[700px] text-[#0A3055]">Admin Management</p>
          </div>
        </div>
      </div>
      <div className="flex  justify-between items-center m-6 h-32 bg-white rounded-lg shadow-md">
        <div className="border-2 border-gray-200 h-10 flex items-center justify-between rounded-md py-1 px-2 w-1/3 ml-4">
          <input className="outline-none" type="text" placeholder="search" />

        </div>

        <button
          className="bg-buttonC mr-8 flex py-1 px-3 gap-3 items-center text-white rounded-md font-[lato] text-[20px]"
        >
          Add
          <img src={Add} alt="plus" />
        </button>
      </div>
      <div>
        <div className="shadow-lg rounded-[13px] m-6 bg-white h-[770px]">
          <table className="w-full h-full">
            <thead className="text-AdminBackC border-b border-gray-400 ">
              <tr >
                <th className='py-3'>
                  <div className="flex gap-3 justify-center items-center">
                    <div>
                      <IoIosArrowUp className="cursor-pointer" />
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>
                    <p>Full Name</p>
                  </div>
                </th>
                <th>
                  <div className="flex gap-3 justify-center items-center">
                    <div>
                      <IoIosArrowUp className="cursor-pointer" />
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>
                    <p>Email</p>
                  </div>
                </th>
                <th>
                  <div className="flex gap-3 justify-center items-center">
                    <div>
                      <IoIosArrowUp className="cursor-pointer" />
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>
                    <p>Contact No.</p>
                  </div>
                </th>
                <th>
                  <div className="flex gap-3 justify-center items-center">
                    <div>
                      <IoIosArrowUp className="cursor-pointer" />
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>
                    <p>Role</p>
                  </div>
                </th>
                <th>
                  <div className="flex gap-3 justify-center items-center">
                    <div>
                      <IoIosArrowUp className="cursor-pointer" />
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>
                    <p>Status</p>
                  </div>
                </th>
                <th>
                  <div className="flex gap-3 justify-center items-center">
                    <div>
                      <IoIosArrowUp className="cursor-pointer" />
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>
                    <p>Action</p>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b border-gray-300 " >
                  <td className="flex gap-4 justify-center items-center pt-4">
                    <img src={item.img} alt="userPic" />
                    <p className="text-tableDataC">{item.name}</p>
                  </td>

                  <td className='text-center'>
                    <p>{item.email}</p>
                  </td>
                  <td className='text-center'>
                    <p>{item.contact}</p>
                  </td>
                  <td className='text-center'>
                    <p>{item.role}</p>
                  </td>
                  <td >
                    <button className="bg-AdminBackC text-ActiveC px-2 py-1 rounded-sm ml-4">
                      Active
                    </button>
                  </td>
                  <td>
                    <div className="flex gap-6 justify-center mr-2 ">
                      <button className="bg-blue-400  text-white rounded-sm py-1 px-2">
                        View
                      </button>
                      <button className="bg-red-400  text-white rounded-sm py-1 px-2">
                        Edit
                      </button>
                      <button>
                        <img src={deleteImg} alt="delete" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin