import Post from '../Post';
import styles from './PostList.module.css';

function PostList({ posts }: { posts: any }) {
    return (
        <ul className={styles.list}>
            {posts.map((post: any) => (
                <li className={styles.list__item} key={post.id}>
                    <Post title={post.title} text={post.text} />
                </li>
            ))}
        </ul>
    );
}

export default PostList;
