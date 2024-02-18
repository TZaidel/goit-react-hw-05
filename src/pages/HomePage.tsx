import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../api.js';
import { Link } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList.jsx';

export default function HomePage() {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const fetchedData = await fetchTrendingMovies();
				setTrendingMovies(fetchedData);
			} catch (error) {
				console.log(error);
			} finally {
				console.log('good job ;)');
			}
		}

		fetchData();
	}, []);

	return (
		<>
			<h1>Trending today</h1>
			<MoviesList movies={trendingMovies} />
		</>
	);
}
