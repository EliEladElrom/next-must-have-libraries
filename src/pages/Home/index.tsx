import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import { Github, Container } from './styles';

const Home = () => {
  return (
    <Container>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/EliEladElrom/next-must-have-libraries">
            next-must-have-libraries
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/EliEladElrom/react-tutorials"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>React Tutorials &rarr;</h2>
            <p>A list of projects I curated to help expedite effort on React projects.</p>
          </a>

          <a href="https://elielrom.com" className={styles.card}>
            <h2>Need Help &rarr;</h2>
            <p>Hit me up, if you can use help with your React project.</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Nextjs Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/EliEladElrom/next-must-have-libraries"
          target="_blank"
          rel="noopener noreferrer"
        >
          next-must-have-libraries
        </a>

        <Github>
          <a href="https://github.com/EliEladElrom/next-must-have-libraries" target="_blank">
            <img src="/github-logo.png" alt="Github" />
          </a>
        </Github>
      </footer>
    </Container>
  );
};

export default Home;
