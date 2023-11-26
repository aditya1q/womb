import React from 'react'
import LoginPhoto from '../assets/loginPhoto.png'
import Logo from '../assets/image 199.png'
import wombLogo from '../assets/WOMB logo .png'
import wombLogo1 from '../assets/WOMB logo1.png'
import Forget from '../assets/forget1.png'
import { Link } from 'react-router-dom'
import sms from '../assets/sms.png'
import eye from '../assets/eye-slash.png'
import key from '../assets/key.png'

const Login = () => {
    return (
        <div className='flex '>
            <div className='flex-1 flex flex-col h-screen justify-center items-center'>
                <div className='flex justify-start  w-3/4 gap-20'>
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='flex flex-col justify-center gap-2'>
                        <img src={wombLogo} alt='womblogo' />
                        <img src={wombLogo1} alt="womblogo" />
                    </div>
                </div>

                <div className='flex flex-col items-center '>
                    <h1 className='text-[20px] font-[600px] font-[lato]  leading-[26px] my-1'>Login to your account</h1>
                    <form className='flex flex-col w-full ml-[67px] mt-4 gap-3' >
                        <div className=' border border-[#0A3055] flex items-center w-[400px] h-[60px] rounded-[8px] gap-2 px-3'>
                            <img src={sms} alt="sms" />
                            <input className='outline-none font-[lato] font-[15px] leading-[24px] text-[#0A3055]' type="email" placeholder='Enter Email Address' />
                        </div>
                        <div className=' border border-[#0A3055] flex justify-between items-center w-[400px] h-[60px] rounded-[8px]  px-3 ' >
                            <div className='flex items-center gap-2'>
                            <img src={key} alt="key" />
                            <input className='outline-none font-[lato] font-[15px] leading-[24px] text-[#0A3055]' type='password' placeholder='Password' />
                            </div>
                            <img src={eye} alt="eye" />
                        </div>

                        <h1 className=' text-[#0A3055] text-[14px] leading-[20px] font-[400px] font-[lato] cursor-pointer my-1 '>
                            <Link to='/forget' >
                            Forget Password?
                            </Link>
                        </h1>
                        <div className='flex w-3/4 justify-between items-center p-3 border-2 border-gray-200 rounded-md '>
                            <div className='flex gap-3 text-[12px] font-[400px] text-[lato] leading-[18px]'>
                                <input type="checkbox" />
                                I'm not a robot
                            </div>
                            <img src={Forget} alt="forgetpng" />
                        </div>
                        <button className='bg-[#FF6666] text-center w-[400px] h-[60px] rounded-[8px] text-white  '>Login</button>
                    </form>

                </div>

            </div>
            <div className='flex-2 ' >
                <img className='object-fill h-full w-full' src={LoginPhoto} alt="panel" />
            </div>
        </div>
    )
}

export default Login