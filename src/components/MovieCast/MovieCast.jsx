import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../api.js';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.scss';

export default function MovieCast() {
	const [casts, setCasts] = useState([]);

	const params = useParams();
	console.log(params.movie_id);

	useEffect(() => {
		async function fetchCast() {
			try {
				const response = await fetchMovieCast(params.movie_id);
				setCasts(response);
				console.log(response);
			} catch (error) {
				alert(`${error.message}. Try to reload this page`);
			}
		}
		fetchCast();
	}, [params.movie_id]);

	return (
		<ul className={css.list}>
			{casts.map(({ character, name, id, profile_path }) => (
				<li key={id} className={css.item}>
					<img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} />
					<h3 className={css.name}>{name}</h3>
					<p className={css.character}>{character}</p>
				</li>
			))}
		</ul>
	);
}
