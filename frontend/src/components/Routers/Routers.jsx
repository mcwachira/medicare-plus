import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Doctors from '../../pages/Doctors/Doctors'
import DoctorDetails from '../../pages/Doctors/DoctorDetails'
import Contact from '../../pages/Contact'
import Services from '../../pages/Services'
import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'

const Routers = () => {
  return (
 <Routes>


    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/doctors' element={<Doctors/>}/>


    <Route path='/doctors/:id' element={<DoctorDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/contact' element={<Contact/>}/>


      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/services' element={<Services/>}/>


 </Routes>
  )
}

export default Routers