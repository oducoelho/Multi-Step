import '../../styles/global.css'
import SideBar from '../../assets/bg-sidebar-desktop.svg'
import { RadioComponent } from './components/RadioComponent'
import { useNavigate } from 'react-router-dom'

export const SelectYourPlan = () => {

  const navigate = useNavigate()

  const NextScreen = () => {
    navigate('/addons')
  }
  const previousScreen = () => {
    navigate('/')
  }

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
              <span className='border py-2 px-3 rounded-full bg-[#bfe2fd]'>2</span>
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
            <h1 className='text-3xl font-extrabold text-[#02295a]'>Select your plan</h1>
            <p className='text-[#9699ab]'>You have the option of the monthly billing.</p>
          </div>
          <RadioComponent />
          {/*<div className='flex flex-row justify-between gap-[32px]'>
            <div className='flex flex-col border w-[130px] h-40 relative rounded-lg hover:border-[#473dff] active:bg-[#f0f6ff] cursor-pointer'>
              <img src={Arcade} alt="" className='w-10 absolute left-5 top-5'/>
                <p className='absolute left-5 bottom-9 font-extrabold text-[#02295a]'>Arcade</p>
                <span className='absolute left-5 bottom-3 text-[#9699ab]'>$9/mo</span>
            </div>
            <div className='flex flex-col border w-[130px] h-40 relative rounded-lg hover:border-[#473dff] focus:bg-[#f0f6ff] cursor-pointer'>
              <img src={Advanced} alt="" className='w-10 absolute left-5 top-5'/>
              <p className='absolute left-5 bottom-9 font-extrabold text-[#02295a]'>Advanced</p>
              <span className='absolute left-5 bottom-3 text-[#9699ab]'>$12/mo</span>
            </div>
            <div className='flex flex-col border w-[130px] h-40 relative rounded-lg hover:border-[#473dff] focus:bg-[#f0f6ff] cursor-pointer'>
              <img src={Pro} alt="" className='w-10 absolute left-5 top-5'/>
              <p className='absolute left-5 bottom-9 font-extrabold text-[#02295a]'>Pro</p>
              <span className='absolute left-5 bottom-3 text-[#9699ab]'>$15/mo</span>
            </div>
  </div>*/}
          <div className='w-full py-4 flex justify-center gap-5 mt-6 rounded-lg'>
            <span className='font-extrabold text-[#02295a]' >Monthly</span>
            <input
              className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[#02295a] dark:bg-[#02295a] before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary dark:checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" 
            />
            <span className='text-[#9699ab]'>Yearly</span>
          </div>
          <div className='flex justify-between pt-20'>
            <button 
              className='text-[#02295a] font-semibold rounded-lg hover:text-[#8619eb]'
              onClick={previousScreen}
            >
              Go back
            </button>
            <button 
              onClick={NextScreen}
              className='border bg-[#02295a] p-3 text-white font-semibold rounded-lg'
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}