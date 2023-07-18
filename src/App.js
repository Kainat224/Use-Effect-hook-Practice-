import React from 'react';
import UseEffect1 from './components/UseEffect1';
import CleanUp from './components/CleanUp';
import UseEffectApi from './components/UseEffectApi';
import PrayerTimingsAPI from './components/PrayerTimingsAPI';
import UncontrolledForm from './components/UncontrolledForm';
import UseReduser from './components/UseReduser';
import CustomHookTest from './components/CustomHookTest';
import { Routes, Route } from 'react-router-dom';
import About from './components/react-router/About';
import Contact from './components/react-router/Contact';
import Home from './components/react-router/Home';

const App = () => {
  return (
    <div>
      {/* <UseEffect1/> */}
      {/* <CleanUp/> */}
      {/* <UseEffectApi/> */}
      {/* <PrayerTimingsAPI/> */}
      {/* <UncontrolledForm/> */}
      {/* <UseReduser /> */}
      {/* <CustomHookTest/> */}
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      
      </div>
  )
}

export default App
