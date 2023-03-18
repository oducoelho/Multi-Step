import { Route, Routes } from 'react-router-dom'
import { AddOns } from './components/AddOns'
import { SelectYourPlan } from './components/SelectYourPlan'
import { Summary } from './components/Summary'
import { YourInfos } from './components/YourInfos'


export const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<YourInfos />} />
        <Route path="/selectyourplan" element={<SelectYourPlan />} />
        <Route path="/addons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
      </Route>
    </Routes>
  )
}