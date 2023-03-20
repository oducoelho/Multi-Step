import '../styles/global.css'
import SideBar from '../assets/bg-sidebar-desktop.svg'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'

const ClaimYourInformations = z.object({
  name: z.string().min(1, 'inform your name'),
  email: z.string().min(1, 'inform your e-mail'),
  number: z.string().min(1, 'inform your number'),
})

export type OrderData = z.infer<typeof ClaimYourInformations>

type claimUsernameFormData  = OrderData

export const YourInfos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<claimUsernameFormData>({
    resolver: zodResolver(ClaimYourInformations),
  })

  const navigate = useNavigate()

  const SaveProfile = (data: claimUsernameFormData) => {
    navigate('/selectyourplan', {
      state: data,
    })
  }


  return (
    <div className='w-screen h-screen bg-[#f0f6ff] flex justify-center items-center'>
      <div className='bg-white p-5 w-[900px] rounded-xl relative flex'>
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
          <form 
            className='flex flex-col gap-3'
            onSubmit={handleSubmit(SaveProfile)}
          >
            <div className='flex flex-col gap-2'>
              <label className='text-[#02295a]'>Name</label>
              <input 
                type="text" 
                placeholder='e.g Stephen King' 
                className='border w-full px-5 rounded-md h-10 font-bold'
                {...register('name')}
              />
              <span 
                className='pl-2 text-xs text-[#ed3548] font-extrabold'
              >
                {
                  errors.name 
                  ? 
                  errors.name.message 
                  : 
                  ''
                }
              </span>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#02295a]'>Email Address</label>
              <input 
                type="text" 
                placeholder='e.g stephenKing@lorem.com' 
                className='border w-full px-5 rounded-md h-10 font-bold'
                {...register('email')}
              />  
              <span 
                className='pl-2 text-xs text-[#ed3548] font-extrabold'
              >
                {
                  errors.email ?
                  errors.email.message
                  :
                  '' 
                }
              </span>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#02295a]'>Phone Number</label>
              <input 
                type="text" 
                placeholder='e.g 09033516743' 
                className='border w-full px-5 rounded-md h-10 font-bold'
                {...register('number')}
              />
              <span 
                className='pl-2 text-xs text-[#ed3548] font-extrabold'
              >
                {
                  errors.number ?
                  errors.number.message
                  :
                  '' 
                }
              </span>
            </div>
            <div className='flex justify-end pt-20 absolute right-24 bottom-5'>
              <button 
                className='border bg-[#02295a] p-3 text-white font-semibold rounded-lg'
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}