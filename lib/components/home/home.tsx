import { Welcome } from '../welcome/welcome';
import styles from './home.module.css';

export const Home = () => {
    return (
        <main className={styles.main}>
            <Welcome />
        </main>
    )
}