import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../api.js';
import { useState, useEffect, useRef, Suspense } from 'react';
import React from 'react';
import css from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
	const { movie_id } = useParams();
	const [movies, setMovies] = useState(null);

	const location = useLocation();
	const backLink = useRef(location.state);
	console.log(backLink);

	useEffect(() => {
		async function getMovieById() {
			try {
				const detailedMovie = await fetchMovieById(movie_id);
				setMovies(detailedMovie);
			} catch (error) {
				console.log(error);
			}
		}

		getMovieById();
	}, [movie_id]);

	return (
		<div>
			<Link to={backLink.current ?? 'movies'}>Go back</Link>
			{movies && (
				<div className={css.Wrap__Container}>
					<img src={`https://image.tmdb.org/t/p/w400/${movies.poster_path}`} />
					<div className={css.Wrap__Text}>
						<h2 className={css.Title}>{movies.original_title}</h2>
						<p className={css.Overview}>{movies.overview}</p>
						<ul className={css.List}>
							{movies.genres.map(({ name, id }) => (
								<li key={id}>{name}</li>
							))}
						</ul>
					</div>
				</div>
			)}

			<div>
				<ul className={css.Additional__List}>
					<li className={css.Additional__Item}>
						<Link to='cast'>Cast</Link>
					</li>
					<li className={css.Additional__Item}>
						<Link to='reviews'>Reviews</Link>
					</li>
				</ul>
			</div>
			<Suspense fallback={<p>Loading...</p>}>
				<Outlet />
			</Suspense>
		</div>
	);
}
