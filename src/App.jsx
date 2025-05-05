import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminMiddleware from './Middlewares/adminMiddleware';
import axios from 'axios';
import Home from './Dashboard/Home';
import AddLocation from './Panels/AdminPanels/AddLocation/LocationCompo';
import ViewLocations from './Panels/AdminPanels/ViewLocation/ViewLocationCompo';
import AddBus from './Panels/AdminPanels/AddBus/AddBusCompo';
import ViewBus from './Panels/AdminPanels/ViewBus/ViewBus';
import WebHome from './WebPortal/Components/Home';
import AddProperty from './Panels/AdminPanels/Property/AddProperty/AddProperty';

function App() {

  axios.defaults.baseURL = 'http://127.0.0.1:8000/';

  
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Admin panel routes starts here */}

            <Route path='/admin' element={<AdminMiddleware><Home/></AdminMiddleware>}>

                {/* add location master starts here  */}
                <Route path='add-locations'element={<AddLocation></AddLocation>} />
                <Route path='view-locations'element={<ViewLocations></ViewLocations>} />
                {/* ends here */}













                {/* add bus detail master starts here  */}
                <Route path='add-bus'element={<AddBus></AddBus>} />
                <Route path='view-bus'element={<ViewBus></ViewBus>} />
                {/* ends here */}

                {/* add bus detail master starts here  */}
                <Route path='add-property'element={<AddProperty></AddProperty>} />
                <Route path='view-property'element={<AddProperty></AddProperty>} />
                {/* ends here */}


            </Route>

          {/* Admin panel route ends her */}



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
