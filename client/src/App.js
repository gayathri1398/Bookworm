import {Routes,Route} from 'react-router-dom';
// HOC
import HomeHocLayout from "./HOC/HomeHocLayout";
import HomeLayout from "./layouts/HomeLayout";

// components
import HomePage from './pages/HomePage' ;
import AboutPage from './pages/AboutPage';
import CheckPage from './pages/CheckPage';
import Temp from './pages/Temp';
import TempCopy from './pages/Temp copy';




function App() {
  return <>
  {/* <HomeLayout/> */}
<Routes>
<Route path="/" element={<HomeLayout/>}>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path ="/check" element={<CheckPage/>}/>
</Route>
<Route path='/mes' >
  <Route path="/mes/1" element={<Temp/>}/>
  <Route path="/mes/2" element={<TempCopy/>}/>
</Route>
  </Routes>
  </>
}

export default App;
