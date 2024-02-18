import css from './SearchBar.module.scss'
export default function SearchBar({ onSubmit }) {
	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(e.target.elements.query.value);
		e.target.reset();
	};

	return (
		<form className={css.Form} onSubmit={handleSubmit}>
			<input name='query' placeholder='enter film title' />
			<button className={css.Form__Btn}>Search</button>
		</form>
	);
}
