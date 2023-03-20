import { MethodInput } from './MethodInput'
import Arcade from  '../../../assets/icon-arcade.svg'
import Advanced from  '../../../assets/icon-advanced.svg'
import Pro from  '../../../assets/icon-pro.svg'

export const paymentMethods = {
  arcade: {
    img: Arcade,
    name: 'Arcade',
    price: '+$9/mo'
  },
  advanced: {
    img: Advanced,
    name: 'Advanced',
    price: '+$12/mo'
  },
  pro: {
    img: Pro,
    name: 'Pro',
    price: '+$15/mo'
  },
}

export const RadioComponent = () => {

  return (
    <div className='flex flex- justify-between gap-[32px]'>
      {Object.entries(paymentMethods).map(([key, { img, name , price }]) => (
        <MethodInput
          key={name}
          id={key}
          img={img}
          name={name}
          price={price}
          value={key}
        />
      ))}
    </div>
  )
}