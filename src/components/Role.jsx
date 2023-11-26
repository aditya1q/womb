import React from 'react'
import dot from '../assets/dot.png'
import Add from '../assets/add-square.png'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Roledummy } from '../data';
import deleteImg from '../assets/delete.png'
const Role = () => {
  return (
    <div className='flex flex-col  mx-4 w-4/5'>
      <div className='bg-[url("https://i.imgur.com/ZreG2ha.png")]  rounded-[20px]  h-[195px] mt-6 mx-6'>
        <div className='bg-[url("https://i.imgur.com/mgJYXT2.png")] rounded-[20px] h-[195px]  flex flex-col justify-center gap-4 pl-6'>
          <h1 className="font-[Open Sans] text-[35px] leading-[28px] font-[700px] text-[#0A3055]">
            Role Management
          </h1>
          <div className='flex gap-4 items-center'>
            <p className="font-[Open Sans] text-[20px] leading-[20px] font-[700px] text-[#0A3055]">Dashboard</p>
            <img src={dot} alt="dot" />
            <p className="font-[Open Sans] text-[20px] leading-[20px] font-[700px] text-[#0A3055]">Role Management</p>
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
      <div className="shadow-lg rounded-[13px] m-6 bg-white h-[770px]">
        <table className="w-full  text-center h-full ">
          <thead
            className="text-AdminBackC border-b border-gray-400"
          >
            <tr>
              <th className='py-3'>
                <div className="flex gap-3 justify-center items-center">
                  <div>
                    <IoIosArrowUp className="cursor-pointer" />
                    <IoIosArrowDown className="cursor-pointer" />
                  </div>
                  <p>Role Name</p>
                </div>
              </th>
              <th>
                <div className="flex gap-3 justify-center items-center">
                  <div>
                    <IoIosArrowUp className="cursor-pointer" />
                    <IoIosArrowDown className="cursor-pointer" />
                  </div>
                  <p>No of User</p>
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
            {Roledummy.map((data) => (
              <tr key={data.id} className='border-b border-gray-400'>
                <td>{data.rolename}</td>
                <td>{data.noofuse}</td>
                <td>

                  <div className="flex gap-6 justify-center">
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
  )
}

export default Role