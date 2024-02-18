import axios from 'axios';
import React from 'react';

import { useState, useEffect } from 'react';
import { fetchMovieByName } from '../api.js';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList.jsx';

export default function MoviesPage() {
	const [filteredMovies, setFilteredMovies] = useState([]);

	const [params, setParams] = useSearchParams();
	const filter = params.get('query') ?? '';
	const querySubmit = newQuery => {
		params.set('query', newQuery);
		setParams(params);
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const fetchedData = await fetchMovieByName(filter);
				setFilteredMovies(fetchedData);
			} catch (error) {
				alert(`${error.message}. Try to reload this page`);
			} finally {
				console.log('the end');
			}
		}

		fetchData();
	}, [filter]);

	return (
		<div>
			<SearchBar onSubmit={querySubmit} />
			<MoviesList movies={filteredMovies} />
		</div>
	);
}
