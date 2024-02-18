import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage.tsx';
import MoviesPage from '../pages/MoviesPage.tsx';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage.tsx';
import Navbar from './Navbar/Navbar';
import MovieReviews from './MovieReviews/MovieReviews.jsx';
import MovieCast from './MovieCast/MovieCast.jsx';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/movies' element={<MoviesPage />} />
				<Route path='/movies/:movie_id' element={<MovieDetailsPage />}>
					<Route path='cast' element={<MovieCast />} />
					<Route path='reviews' element={<MovieReviews />} />
				</Route>
				<Route path='*' element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
