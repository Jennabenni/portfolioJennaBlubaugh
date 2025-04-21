
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const NavLinks = () => (
  <ul className={styles.navbar}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
);

export default NavLinks;

