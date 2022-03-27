import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import About from './pages/About';
import Game from './pages/Game';
import DefaultLayout from './layouts/DefaultLayout';
import TitlePage from './pages/TitlePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="" element={<TitlePage />} />
            <Route path="game/:difficulty" element={<Game />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
