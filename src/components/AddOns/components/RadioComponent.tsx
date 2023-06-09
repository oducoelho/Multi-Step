import { MethodInput } from './MethodInput'

export const OptionsOfGaming = {
  OnlineService: {
    label: 'Online Service',
    label2: 'Access to multiplayer games',
    price: '+$1/mo'
  },
  LargeStorage: {
    label: 'larger storage',
    label2: 'Extra 1TB of cloud save',
    price: '+$2/mo'
  },
  CustomizableProfile: {
    label: 'Customizable Profile',
    label2: 'Custum theme on your profile',
    price: '+$2/mo'
  },
}

export const RadioComponent = () => {

  return (
    <div className='flex flex-col w-full gap-2'>
      {Object.entries(OptionsOfGaming).map(([key, { label, label2 ,price }]) => (
        <MethodInput
          key={label}
          id={key}
          label={label}
          label2={label2}
          price={price}
          value={key}
        />
      ))}
    </div>
  )
}