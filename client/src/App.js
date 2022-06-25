import {Routes,Route} from 'react-router-dom';
// HOC
import HomeHocLayout from "./HOC/HomeHocLayout";
import HomeLayout from "./layouts/HomeLayout";

// components
import HomePage from './pages/HomePage' ;
import AboutPage from './pages/AboutPage';
import CheckPage from './pages/CheckPage';


function App() {
  return <>
  {/* <HomeLayout/> */}
<Routes>
<Route path="/" element={<HomeLayout/>}>
<Route path="/home" element={<HomePage/>}/>
<Route path="/about" element={<AboutPage/>}/>
<Route path ="/check" element={<CheckPage/>}/>
  {/* <HomeHocLayout path="/" exact element={<HomePage/>} /> */}
  </Route>
  </Routes>
  </>
}

export default App;
