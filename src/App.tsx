import './styles/global.css'
import SideBar from './assets/bg-sidebar-desktop.svg'

export const App = () => {
  return (
    <div className='w-screen h-screen bg-[#f0f6ff] flex justify-center items-center'>
      <div className='bg-white p-5 rounded-xl relative flex'>
        <div className='relative grid grid-cols-1'>
            <img src={SideBar} alt="" className='h-[510px]'/>
          <div className='absolute left-12 top-10 flex flex-col gap-5'>
            <p className=' flex gap-5 items-center leading-4 font-medium text-sm'>
              <span  className='border py-2 px-3 rounded-full bg-[#bfe2fd]'>1</span>
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
              <span className='border text-white py-2 px-3 rounded-full'>3</span>
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
            <h1 className='text-3xl font-extrabold text-[#02295a]'>Personal info</h1>
            <p className='text-[#9699ab]'>Please provide your name, email address and phone number.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <label className='text-[#02295a]'>Name</label>
              <input 
                type="text" 
                placeholder='e.g Stephen King' 
                className='border w-full px-5 rounded-md h-10 font-bold'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-[#02295a]'>Email Address</label>
              <input 
                type="text" 
                placeholder='e.g stephenKing@lorem.com' 
                className='border w-full px-5 rounded-md h-10 font-bold'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-[#02295a]'>Phone Number</label>
              <input 
                type="text" 
                placeholder='e.g 09033516743' 
                className='border w-full px-5 rounded-md h-10 font-bold'
              />
            </div>
          </div>
          <div className='flex justify-end pt-20'>
            <button className='border bg-[#02295a] p-3 text-white font-semibold rounded-lg'>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )
}