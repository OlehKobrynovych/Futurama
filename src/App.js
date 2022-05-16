import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Home from './components/Home'
import {useState} from 'react'
import SelectedHero from './page/SelectedHero.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container } from 'react-bootstrap';
const Home = React.lazy(() => import('./components/Home'));
// const Navbar = React.lazy(() => import('./components/Navbar'));


function App() {
  let [count, setCount] = useState(1)

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL} >
          <Container>
                      <Suspense fallback={<div>Loading...</div>}>
                          <Routes>
                              <Route path='/' element={<Navbar count={count} />}> 
                                <Route index element={<Home setCount={setCount} />} /> 
                                <Route path='hero' element={<SelectedHero/>} /> 
                              </Route>  
                          </Routes>
                      </Suspense>
          </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
