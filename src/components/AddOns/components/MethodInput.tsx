import { forwardRef, InputHTMLAttributes  } from 'react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  price: string
  label2: string
}

export const MethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, label, label2, price, ...props }, ref) => {
  return (
    <div className='border rounded-lg w-[450px] p-5'>

      <label htmlFor={id} className='flex items-center justify-between'>

        <div className='flex flex-row items-center  gap-5'>
          <div>
            <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
          </div>
          <div className='text-[#9699ab]'>
            <strong className='text-[#02295a]'>
              {label}
            </strong>
            <br />
            {label2}
          </div>

        </div>
        
        <div className='text-[#473dff]'>
          {price}
        </div>

      </label>

    </div>
  )
})  