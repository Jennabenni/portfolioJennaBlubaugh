import styles from './home.module.css';
import { motion } from 'framer-motion';



const Home = () => (


  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className={`${styles.home} ${styles.background}`}>
      <div style={{ backgroundImage: "url('../assets/images/desertBackground.jpg')" }}>
        <h1>My Work</h1>
        <p>As a student in Web and Social Platforms at the University of Central Florida, I am adept with the coding languages HTML, CSS, JavaScript, and PHP, and have been working towards my Bachelor's degree since 2022 and am set to graduate in 2026.</p>
      </div>


    </div>
    </motion.div>
  );
  export default Home;

  //needs a background image


  //className={styles.home}