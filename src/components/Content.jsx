import React from 'react'
import dot from '../assets/dot.png'
import Add from '../assets/add-square.png'

const Content = () => {
    return (
        <div className='flex flex-col  mx-4 w-4/5'>
            <div className='bg-[url("https://i.imgur.com/ZreG2ha.png")]  rounded-[20px]  h-[195px] mt-6 mx-6'>
                <div className='bg-[url("https://i.imgur.com/mgJYXT2.png")] rounded-[20px] h-[195px]  flex flex-col justify-center gap-4 pl-6'>
                    <h1 className="font-[Open Sans] text-[35px] leading-[28px] font-[700px] text-[#0A3055]">
                        Content Management
                    </h1>
                    <div className='flex gap-4 items-center'>
                        <p className="font-[Open Sans] text-[20px] leading-[20px] font-[700px] text-[#0A3055]">Dashboard</p>
                        <img src={dot} alt="dot" />
                        <p className="font-[Open Sans] text-[20px] leading-[20px] font-[700px] text-[#0A3055]">Content Management</p>
                    </div>
                </div>
            </div>
            <div className="flex  justify-between items-center m-4 h-28 bg-white rounded-lg shadow-md">
                <div className="border-2 border-gray-200 h-10 flex items-center justify-between rounded-md py-1 px-2 w-1/3 ml-4">
                    <input className="outline-none" type="text" placeholder="search" />
                    <IoIosSearch />
                </div>
                <div className="flex gap-3 justify-between items-center ">
                    <input
                        className="accent-loginC w-4 h-4"
                        type="radio"
                        name=""
                        id="video"
                    />
                    <label
                        className="text-sm font-semibold text-loginC"
                        htmlFor="video"
                    >
                        Videos
                    </label>
                </div>
                <div className="flex gap-3 justify-between items-center ">
                    <input
                        className="accent-buttonC w-4 h-4"
                        type="radio"
                        name=""
                        id="Articles"
                    />
                    <label
                        className="text-sm font-semibold text-buttonC"
                        htmlFor="Articles"
                    >
                        Articles
                    </label>
                </div>

                <button
                   
                    className="bg-buttonC mr-8 flex py-1 px-3 gap-3 items-center text-white rounded-md"
                >
                    Add
                    <CiSquarePlus />
                </button>
            </div>
            <div className="  shadow-lg rounded-md m-2 bg-white h-full ">
          <table className="w-full h-full text-center">
            <thead
              className="text-AdminBackC "
              style={{ borderBottom: "2px solid #0A3055 " }}
            >
              <tr>
                <th>
                  <div className="flex gap-3 justify-center items-center">
                    <div>
                      <IoIosArrowUp className="cursor-pointer" />
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>
                    <p>Articles</p>
                  </div>
                </th>
                <th>
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
                    <p>No of Bookmarks</p>
                  </div>
                </th>
                <th>
                  <div className="flex gap-3 justify-center items-center">
                    <div>
                      <IoIosArrowUp className="cursor-pointer" />
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>
                    <p>Price</p>
                  </div>
                </th>
                <th>
                  <div className="flex gap-3 justify-center items-center">
                    <div>
                      <IoIosArrowUp className="cursor-pointer" />
                      <IoIosArrowDown className="cursor-pointer" />
                    </div>
                    <p>Content Type</p>
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
                    <p>Actions</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ContentDummy.map((data) => (
                <tr key={data.id}>
                  <td>{data.article}</td>
                  <td>{data.fullname}</td>
                  <td>{data.noOfBooks}</td>
                  <td>₹{data.price}</td>
                  <td>{data.contentType}</td>
                  <td>
                    <button className="bg-AdminBackC text-ActiveC px-2 py-1 rounded-sm">
                      Active
                    </button>
                  </td>
                  <td>
                    <div className="flex gap-6 justify-center mr-2 ">
                      <button onClick={() => navigate('/article')} className="bg-blue-400  text-white rounded-sm py-1 px-2">
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

export default Content