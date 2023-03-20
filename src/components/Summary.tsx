import '../styles/global.css'
import SideBar from '../assets/bg-sidebar-desktop.svg'
import { useNavigate } from 'react-router-dom'

export const Summary = () => {

  const navigate = useNavigate()

  const NextScreen = () => {
    navigate('/addons')
  }

  return (
    <div className='w-screen h-screen bg-[#f0f6ff] flex justify-center items-center'>
      <div className='bg-white p-5 w-[900px] rounded-xl relative flex'>
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
              <span className='border text-white py-2 px-3 rounded-full'>3</span>
              <div className='text-white'>
                <span className='text-[#adbeff]'>STEP 3</span> <br />
                ADD-ONS
              </div>
            </p>
            <p className='flex gap-5 items-center  leading-4 font-medium text-sm'>
              <span className='border py-2 px-3 rounded-full bg-[#bfe2fd]'>4</span>
              <div className='text-white'>
                <span className='text-[#adbeff]'>STEP 4</span> <br />
                SUMMARY
              </div>
            </p>
          </div>
        </div>
        <div className='px-20'>
          <div className='py-10'>
            <h1 className='text-3xl font-extrabold text-[#02295a]'>Finishing up</h1>
            <p className='text-[#9699ab]'>Double-check everything looks OK before confirming.</p>
          </div>
          <div>
            <div className='bg-[#f0f6ff] p-5 w-[450px] rounded-lg'>
              <div className='flex justify-between items-center pb-3 border-b-[1px]'>
                <div>     
                  <p className='font-extrabold text-[#02295a]'>Arcade (Monthly)</p>
                  <span className='text-[#9699ab] cursor-pointer'>Change</span>
                </div>
                <span className='font-extrabold text-[#02295a]'>$9/mo</span>
              </div>

              <div>
                <div className='flex justify-between items-center text-[#9699ab] py-3'>
                  <span>Online service</span>
                  <span className='text-[#02295a]'>+$1/mo</span>
                </div>
                <div className='flex justify-between items-center text-[#9699ab] '>
                  <span>Larger storage</span>
                  <span className='text-[#02295a]'>+$2/mo</span>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between px-5 py-4'>
              <span className='text-[#9699ab]'>Total (per month)</span>
              <span className='text-[#02295a] text-xl'>+$12/mo</span>
            </div>
          </div>
          <div className='flex justify-between pt-20'>
          <button 
              className='text-[#02295a] font-semibold rounded-lg hover:text-[#8619eb]'
              onClick={NextScreen}
            >
              Go back
            </button>
            <button 
              className='border bg-[#02295a] p-3 text-white font-semibold rounded-lg'
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}