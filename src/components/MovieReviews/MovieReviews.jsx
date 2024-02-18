import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../api.js';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.scss';

export default function MovieReviews() {
	const [reviews, setReviews] = useState([]);

	const { movie_id } = useParams();

	useEffect(() => {
		if (!movie_id) return;
		async function fetchReviews() {
			try {
				const response = await fetchMovieReviews(movie_id);
				setReviews(response);
			} catch (error) {
				alert(`${error.message}. Try to reload this page`);
			}
		}

		fetchReviews();
	}, [movie_id]);

	return (
		<ul className={css.list}>
			{reviews.length > 0 ? (
				reviews.map(({ author, content, updated_at, id }) => (
					<li key={id} className={css.item}>
						<div className={css.wrap}>
							<h3 className={css.title}>{author}</h3>
							<p className={css.update}>{updated_at}</p>
						</div>
						<p className={css.content}>{content}</p>
					</li>
				))
			) : (
				<p>We don&apos;t have any reviews for this movie</p>
			)}
		</ul>
	);
}
