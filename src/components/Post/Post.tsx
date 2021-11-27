import styles from './Post.module.css';

function Post({ title, text }: { title: string; text: string }) {
    return (
        <article className={styles.post}>
            <h2 className={styles.post__title}>{title}</h2>
            <p className={styles.post__text}>{text}</p>
        </article>
    );
}

export default Post;
