import { Link } from 'react-router-dom';
import css from './Navbar.module.scss'

export default function Navbar() {
	return (
		<nav className={css.Navbar}>
			<Link to='/'>Home</Link>
			<Link to='/movies'>Movies</Link>
		</nav>
	);
}
