import styles from './Container.module.css';

function Container({ children }: { children: JSX.Element }) {
    return <div className={styles.container}>{children}</div>;
}

export default Container;
