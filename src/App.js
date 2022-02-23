import './App.css';
import Navb from './Components/Navb';
import GlobalStyle from "./Components/GlobalStyle";
import Footer from './Components/Footer';
import {AnimatePresence} from "framer-motion";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Film from './Pages/Film';
import Contact from './Pages/Contact';
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyle/>
      <Navb/>
        <AnimatePresence exitBeforeEnter initial={true}> 
          <Routes>
            <Route path="/pink-picture" element={<Home/>}/>
            <Route path="/pink-picture/Film" element={<Film/>}/>
            <Route path="/pink-picture/Film/:id" element={<MovieDetails/>}/>
            <Route path="/pink-picture/Contact" element={<Contact />}/>
          </Routes>
        </AnimatePresence>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
