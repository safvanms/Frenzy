import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Header />
				<div className='container'>
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route path="/movie/:imdbID" element={<MovieDetail />} />
						<Route element={<PageNotFound />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App;
