import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FansBook1 from "./pages/FansBook1"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import PageHeader from "./components/PageHeader"

function App() {
  return (
    <div className="App">
      <div className="pagecontainer">
        <BrowserRouter basename="/">
          <PageHeader />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fans-book1" element={<FansBook1 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
