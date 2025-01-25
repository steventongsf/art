import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FansBook1 from "./pages/FansBook1"
import FansBook2 from "./pages/FansBook2"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import PageHeader from "./components/PageHeader"
import json from "./data/fans-book1.json"
import PhotoGallery from './pages/PhotoGallery'

function App() {
  return (
    <div className="App">
      <div className="pagecontainer">
        <BrowserRouter basename="/">
          <PageHeader />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fans-book1" 
              element={<PhotoGallery 
              title="Chinese Fans Book 1" 
              description="Collection of 42 chinese fan paintings from the early 19th to early 20th centuries." 
              json={json} />} />
            <Route path="/fans-book2" element={<FansBook2 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
