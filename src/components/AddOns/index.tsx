import '../../styles/global.css'
import SideBar from '../../assets/bg-sidebar-desktop.svg'
import Arcade from  '../assets/icon-arcade.svg'
import Advanced from  '../assets/icon-advanced.svg'
import Pro from  '../assets/icon-pro.svg'
import { RadioComponent } from './components/RadioComponent'

export const AddOns = () => {
  return (
    <div className='w-screen h-screen bg-[#f0f6ff] flex justify-center items-center'>
      <div className='bg-white p-5 w-[900px] rounded-xl flex'>
        <div className='relative grid grid-cols-1'>
            <img src={SideBar} alt="" className='h-[510px]'/>
          <div className='absolute left-12 top-10 flex flex-col gap-5'>
            <p className=' flex gap-5 items-center leading-4 font-medium text-sm'>
              <span  className='border text-white py-2 px-3 rounded-full'>1</span>
              <div className='text-white'>
                <span className='text-[#adbeff]'>STEP 1</span> <br />
                YOUR INFO
              </div>
            </p>
            <p className='flex gap-5 items-center  leading-4 font-medium text-sm'>
              <span className='border text-white py-2 px-3 rounded-full'>2</span>
              <div className='text-white'>
                <span className='text-[#adbeff]'>STEP 2</span> <br />
                SELECT PLAN
              </div>
            </p>
            <p className='flex gap-5 items-center  leading-4 font-medium text-sm'>
              <span className='border py-2 px-3 rounded-full bg-[#bfe2fd]'>3</span>
              <div className='text-white'>
                <span className='text-[#adbeff]'>STEP 3</span> <br />
                ADD-ONS
              </div>
            </p>
            <p className='flex gap-5 items-center  leading-4 font-medium text-sm'>
              <span className='border text-white py-2 px-3 rounded-full'>4</span>
              <div className='text-white'>
                <span className='text-[#adbeff]'>STEP 4</span> <br />
                SUMMARY
              </div>
            </p>
          </div>
        </div>
        <div className='px-20'>
          <div className='py-10'>
            <h1 className='text-3xl font-extrabold text-[#02295a]'>Pick add-ons</h1>
            <p className='text-[#9699ab]'>Add-ons help enhance your gaming expirence.</p>
          </div>
          <RadioComponent />
        {/*<div className='flex flex-col justify-between gap-[32px]'>
            <div className='flex flex-col border w-[130px] h-40 relative rounded-lg hover:border-[#473dff] active:bg-[#f0f6ff] cursor-pointer'>
              <img src={Arcade} alt="" className='w-10 absolute left-5 top-5'/>
                <p className='absolute left-5 bottom-9 font-extrabold text-[#02295a]'>Arcade</p>
                <span className='absolute left-5 bottom-3 text-[#9699ab]'>$1/mo</span>
            </div>
            <div className='flex flex-col border w-[130px] h-40 relative rounded-lg hover:border-[#473dff] focus:bg-[#f0f6ff] cursor-pointer'>
              <img src={Advanced} alt="" className='w-10 absolute left-5 top-5'/>
              <p className='absolute left-5 bottom-9 font-extrabold text-[#02295a]'>Advanced</p>
              <span className='absolute left-5 bottom-3 text-[#9699ab]'>$2/mo</span>
            </div>
            <div className='flex flex-col border w-[130px] h-40 relative rounded-lg hover:border-[#473dff] focus:bg-[#f0f6ff] cursor-pointer'>
              <img src={Pro} alt="" className='w-10 absolute left-5 top-5'/>
              <p className='absolute left-5 bottom-9 font-extrabold text-[#02295a]'>Pro</p>
              <span className='absolute left-5 bottom-3 text-[#9699ab]'>$2/mo</span>
            </div>
          </div>*/}
          <div className='flex justify-between pt-8'>
            <button className='text-[#02295a] font-semibold rounded-lg'>Go back</button>
            <button className='border bg-[#02295a] p-3 text-white font-semibold rounded-lg'>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )
}