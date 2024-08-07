import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import Home from './pages/Home.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={< App />}>
          <Route path="/movies_lib" element={<Home/>}/>
          <Route path="/movies_lib/movie/:id" element={<Movie/>}/>
          <Route path="/movies_lib/search" element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
