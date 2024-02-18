import axios from 'axios';

export const fetchTrendingMovies = async () => {
	const url = 'https://api.themoviedb.org/3/trending/movie/day';
	const options = {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNlZTcxMTE1NjMwMTJhMWM4MTQyOGRmZjFkN2E1ZiIsInN1YiI6IjY1NmU5ZmQ4MDg1OWI0MDBmZjc2ZDAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4rZm9zRannTwqVv3CShHd9XE-ALPUgHxLJewHjtpGE',
		},
	};

	const response = await axios.get(url, options);
	return response.data.results;
};

export const fetchMovieById = async id => {
	const url = `https://api.themoviedb.org/3/movie/${id}`;
	const options = {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNlZTcxMTE1NjMwMTJhMWM4MTQyOGRmZjFkN2E1ZiIsInN1YiI6IjY1NmU5ZmQ4MDg1OWI0MDBmZjc2ZDAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4rZm9zRannTwqVv3CShHd9XE-ALPUgHxLJewHjtpGE',
		},
	};
	const response = await axios.get(url, options);
	return response.data;
};

export const fetchMovieByName = async newQuery => {
	const url = 'https://api.themoviedb.org/3/search/movie';
	const options = {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNlZTcxMTE1NjMwMTJhMWM4MTQyOGRmZjFkN2E1ZiIsInN1YiI6IjY1NmU5ZmQ4MDg1OWI0MDBmZjc2ZDAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4rZm9zRannTwqVv3CShHd9XE-ALPUgHxLJewHjtpGE',
		},
		params: {
			query: newQuery,
		},
	};

	const response = await axios.get(url, options);
	return response.data.results;
};

export const fetchMovieCast = async id => {
	const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
	const options = {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNlZTcxMTE1NjMwMTJhMWM4MTQyOGRmZjFkN2E1ZiIsInN1YiI6IjY1NmU5ZmQ4MDg1OWI0MDBmZjc2ZDAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4rZm9zRannTwqVv3CShHd9XE-ALPUgHxLJewHjtpGE',
		},
	};
	const response = await axios.get(url, options);
	return response.data.cast;
};

export const fetchMovieReviews = async id => {
	const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
	const options = {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNlZTcxMTE1NjMwMTJhMWM4MTQyOGRmZjFkN2E1ZiIsInN1YiI6IjY1NmU5ZmQ4MDg1OWI0MDBmZjc2ZDAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4rZm9zRannTwqVv3CShHd9XE-ALPUgHxLJewHjtpGE',
		},
	};
	const response = await axios.get(url, options);
	return response.data.results;
};
