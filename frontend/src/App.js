import React from 'react';
import './App.css';
import { Routes, Route  } from 'react-router-dom';

// Pages
import Home from "./pages/home/Home";
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';

const App = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </main>
  )
}
 
export default App;
