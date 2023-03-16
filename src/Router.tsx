import { Route, Routes } from 'react-router-dom'
import { AddOns } from './components/AddOns'
import { SelectYourPlan } from './components/SelectYourPlan'
import { YourInfos } from './components/YourInfos'


export const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<YourInfos />} />
        <Route path="/selectyourplan" element={<SelectYourPlan />} />
        <Route path="/addons" element={<AddOns />} />
      </Route>
    </Routes>
  )
}