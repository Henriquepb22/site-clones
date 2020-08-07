import 'react-calendar-heatmap/dist/styles.css'

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/global.styles'
import Profile from './pages/Profile'
import Repo from './pages/Repo'

import Header from './components/Header'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/:username" element={<Profile />} />
                <Route path="/:username/:repository" element={<Repo />} />
            </Routes>
            <GlobalStyles />
        </BrowserRouter>
    )
}

export default App
