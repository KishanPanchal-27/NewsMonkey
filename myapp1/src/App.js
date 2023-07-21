import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

        <Routes>
        <Route exact path="/" element={<News key="/" country="in" category="business" />}/>
          <Route exact path="/Business" element={          <News key="business" country="in" category="business" />}/>
          <Route exact path="/Entertainment" element={<News key="entertainment" country="in" category="entertainment" />}/>
          <Route exact path="/General" el ement={<News key="general" country="in" category="general" />}/>
          <Route exact path="/Health" element={<News key="health" country="in" category="health" />}/>
          <Route exact path="/Science" element={<News key="science"  country="in" category="science" />}/>
          <Route exact path="/Sports" element={<News key="sports" country="in" category="sports" />}/>
          <Route exact path="/Technology" element={<News key="technolody"  country="in" category="technology" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
