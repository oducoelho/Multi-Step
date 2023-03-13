import './styles/global.css'
import SideBar from './assets/bg-sidebar-desktop.svg'

export const App = () => {
  return (
    <div className='w-screen h-screen bg-slate-400 flex justify-center items-center'>
      <div className='bg-white p-5 rounded-xl'>
        <div>
          <div className='relative'>
          <img src={SideBar} alt="" />
            <p>
              <span>1</span>
              STEP 1 <br />
              YOUR INFO
            </p>
            <p>
              <span>2</span>
              STEP 2 <br />
              SELECT PLAN
            </p>
            <p>
              <span>3</span>
              STEP 3 <br />
              ADD-ONS
            </p>
            <p>
              <span>4</span>
              STEP 4 <br />
              SUMMARY
            </p>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}