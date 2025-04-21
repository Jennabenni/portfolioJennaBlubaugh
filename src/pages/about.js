import styles from './about.module.css';
import { motion } from 'framer-motion';



const About = () => (
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
    <div className={styles.about}>


      <h2>About</h2>
      <h3>Biography</h3>
      <p>I've lived in Florida my entire life and excelled in academics since middle school.  After receiving a Digial Media award in high school, I decided to major in it at the University of Central Florida.</p>
     <h3>Skills</h3>
     <p>Fluent in HTML, CSS, JavaScript, SCSS, SASS, DOM Scripting, and PHP.  Familiar with Adobe products and have practiced art in multiple forms since childhood.</p>
     <h3>Interests</h3>
     <p>I enjoy playing video games in my off time as well as finding new ways to create art.  I've dabbled in acrylic, goache, oil, pastels, watercolor, charcoal, digital art, ceramics and clay, and wood carving.  I also enjoy reading on occasion. </p>
    </div>
    </motion.div>
  );

  export default About;


  /*Page with the about information, equipped with transitions */