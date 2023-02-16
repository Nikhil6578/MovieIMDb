
import './App.css';
import Navbar from './Components/Navbar';
 import Banner from './Components/Banner';
 import TrendingMovies from './Components/TrendingMovies';
import Favourite from './Components/Favourite';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={
      <>
      <Banner />
      <TrendingMovies/>
      </>
    }></Route>
    <Route path="/favourites" element={<Favourite/>}></Route>
    </Routes>
    
     {/* <Banner/>
    <Movies/>
    <Favourite/>  */}
    </BrowserRouter>

    </>
      
    
  );
}

export default App;
