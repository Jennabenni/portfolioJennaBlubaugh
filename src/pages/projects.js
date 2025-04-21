
import ProjectInfo from '../components/projectInfo';
import styles from './projects.module.css';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'React Native Quiz App',
      description: 'A five question quiz that grades the user once the quiz is completed, and contains multiple choice, true and false, and multiple answer questions.',
      image: '/reactQuizResults.png',
      link: 'https://github.com/Jennabenni/QuizApp--Jenna-Blubaugh',
    },
    {
      title: 'React Exercise App',
      description: 'An app that utilizes components to show duration and repetition exercises.  Contains a rep counter and a timer that counts in seconds.',
      image: '/exerciseDuration.png',
      link: 'https://github.com/Jennabenni/React-Exercise-App-JennaB',
    },
    {
      title: 'React Native Todo List',
      description: 'A React Native project that has a todo list of existing items and a form at the bottom that allows the user to insert new items.  Items can be completed by checking the box to the left, and it crosses off the task once clicked.',
      image: '/todoListChecked.png',
      link: 'https://github.com/Jennabenni/todoList',
    },
  ];

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projects} id="contentBox">
        {projects.map((proj, idx) => (
          <ProjectInfo key={idx} {...proj} />
        ))}
      </div>
    </div>
    </motion.div>
  );
};

export default Projects;
