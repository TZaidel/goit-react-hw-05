import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';

const HomePage = lazy(() => import('../pages/HomePage.tsx'));
const MoviesPage = lazy(() => import('../pages/MoviesPage.tsx'));
const MovieDetailsPage = lazy(() =>
	import('../pages/MovieDetailsPage/MovieDetailsPage.tsx')
);
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews.jsx'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast.jsx'));

function App() {
	return (
		<>
			<Navbar />
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/movies' element={<MoviesPage />} />
					<Route path='/movies/:movie_id' element={<MovieDetailsPage />}>
						<Route path='cast' element={<MovieCast />} />
						<Route path='reviews' element={<MovieReviews />} />
					</Route>
					<Route path='*' element={<HomePage />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
