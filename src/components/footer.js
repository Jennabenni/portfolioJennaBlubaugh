import styles from './footer.module.css';
import NavLinks from './navBarLinks';



const Footer = () => (
  <footer className={styles.footer}>
    <NavLinks />
    <p>Digital Media: Web and Social Platforms Track student since 2022</p>
  </footer>
);

export default Footer;
