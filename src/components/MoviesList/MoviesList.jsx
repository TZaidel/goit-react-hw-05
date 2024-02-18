import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.scss';

export default function MoviesList({ movies }) {
	const location = useLocation();
	console.log(location);
	return (
		<ul className={css.MoviesList__List}>
			{movies.map(movie => (
				<li className={css.MoviesList__Item} key={movie.id}>
					<Link to={`/movies/${movie.id}`} state={location}>{movie.title}</Link>
				</li>
			))}
		</ul>
	);
}
