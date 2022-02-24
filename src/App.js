import './App.css';
import Navb from './Components/Navb';
import GlobalStyle from "./Components/GlobalStyle";
import Footer from './Components/Footer';
import {AnimatePresence} from "framer-motion";
import { HashRouter, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Film from './Pages/Film';
import Contact from './Pages/Contact';
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Navb/>
        <AnimatePresence exitBeforeEnter initial={true}> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Film" element={<Film/>}/>
            <Route path="/Film/:id" element={<MovieDetails/>}/>
            <Route path="/Contact" element={<Contact />}/>
          </Routes>
        </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
