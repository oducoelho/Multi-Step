import { forwardRef, InputHTMLAttributes } from 'react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  img: string
  name: string
  price: string
}

export const MethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, img, name, price, ...props }, ref) => {
  return (
    <div className='flex flex-col border w-[130px] h-40 relative rounded-lg hover:border-[#473dff] active:bg-[#f0f6ff] cursor-pointer'>
      <img src={img} alt="" className='w-10 absolute left-5 top-5' />
      <p className='absolute left-5 bottom-9 font-extrabold text-[#02295a]'>{name}</p>
      <span className='absolute left-5 bottom-3 text-[#9699ab]'>{price}</span>
    </div>
  )
})  
