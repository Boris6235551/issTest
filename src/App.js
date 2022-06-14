import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginContainer from './containers/LoginContainer'
import ListContainer from './containers/ListContainer'
import NotFound from './components/NotFound/NotFound'
import HeaderContainer from './containers/HeaderContainer'

const App = () => (
    <div>
        <HeaderContainer />
        <div className="content">
            <Routes>
                <Route exact path="/" element={<LoginContainer />} />
                <Route path="/list" element={<ListContainer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </div>
)

export default App
