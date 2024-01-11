// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import HelloAdmin from './components/HelloAdmin'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import PersonalDetails from './components/PersonalDetails'
import ContactInfo from './components/ContactInfo'
import ProfessionalInfo from './components/ProfessionalInfo'
import Banking from './components/Banking.jsx'
import Congrats from './components/Congrats.jsx'
import DashboardTemp from './components/DashboardTemp.jsx'
import WelcomeDashboard from './components/WelcomeDashboard.jsx'
import CleaningRequest from './components/CleaningRequest.jsx'
import PendingRequest from './components/PendingRequest.jsx'
import PendingPop from './components/PendingPop.jsx'
import PendingPopAssign from './components/PendingPopAssign.jsx'
import SuccessJobAlert from './components/SuccessJobAlert.jsx'
import UpcomingSchedule from './components/UpcomingSchedule.jsx'
import RequestHistory from './components/RequestHistory.jsx'
import UserManagement from './components/UserManagement.jsx'
import CleanersAccount from './components/CleanersAccount.jsx'
import ScheduleOverview from './components/ScheduleOverview.jsx'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<HelloAdmin />} />
        <Route path='/Signup' element={ <SignupPage/> } />
        <Route path='/LoginPage' element={ <LoginPage/> } />
        <Route path='/PersonalDetails' element={ <PersonalDetails/> } />
        <Route path='/ContactInfo' element={ <ContactInfo/> } />
        <Route path='/ProfessionalInfo' element={ <ProfessionalInfo/> } />
        <Route path='/Banking' element={ <Banking/> } />
        <Route path='/Congrats' element={ <Congrats/> } />
        <Route path='/WelcomeDashboard' element={ <WelcomeDashboard/> } />
        <Route path='/CleaningRequest' element={ <CleaningRequest/> } />
        <Route path='/PendingRequest' element={ <PendingRequest/> } />
        <Route path='/PendingPop' element={ <PendingPop/> } />
        <Route path='/PendingPopAssign' element={ <PendingPopAssign/> } />
        <Route path='/SuccessJobAlert' element={ <SuccessJobAlert/> } />
        <Route path='/UpcomingSchedule' element={ <UpcomingSchedule/> } />
        <Route path='/RequestHistory' element={ <RequestHistory/> } />
        <Route path='/UserManagement' element={ <UserManagement/> } />
        <Route path='/CleanersAccount' element={ <CleanersAccount/> } />
        <Route path='/ScheduleOverview' element={ <ScheduleOverview/> } />
      </Routes>
    </BrowserRouter>
    {/* <HelloAdmin/> */}
    {/* <SignupPage/> */}
    {/* <PersonalDetails/> */}
    {/* <ContactInfo/> */}
    {/* <ProfessionalInfo/> */}
    {/* <Banking/> */}
    {/* <Congrats/> */}
    {/* <LoginPage/> */}
    {/* <DashboardTemp/> */}
    {/* <WelcomeDashboard/> */}
    {/* <CleaningRequest/> */}
    {/* <PendingRequest/> */}
    {/* <PendingPop/> */}
    {/* <PendingPopAssign/> */}
    {/* <SuccessJobAlert/> */}
    {/* <UpcomingSchedule/> */}
    {/* <RequestHistory/> */}
    {/* <RequestHistory/> */}
    </>
  )
}

export default App
