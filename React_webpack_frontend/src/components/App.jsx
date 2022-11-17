import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import '../styles/App.css'

import Main from './Main'
import Category from './Category'
import Recipe from './Recipe'


function App() {
	return (
		<Router>
		<div className='main'>
			<div className='button'>
				<button><NavLink className={({ isActive }) =>(isActive ? "active" : "normal")} to={'/'}>Главное меню</NavLink></button>
			</div>

				<Routes>
					<Route path="/" element={<Main />} />
					<Route exact path={'/category/:category'} element={<Category />} />
					<Route exact path={'/recipe/:id'} element={<Recipe />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
