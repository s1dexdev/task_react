import Post from '../Post';
import * as categories from '../../utils/constants/postCategory';
import styles from './CategoryList.module.css';

function CategoryList({ posts }: { posts: any }) {
    const listCategories = Object.values(categories);

    return (
        <ul className={styles.list}>
            {listCategories.map(category => (
                <li className={styles.list__item} key={category}>
                    <h2 className={styles.list__title}>{category}</h2>
                    {posts.map((post: any) => {
                        if (category === post.category) {
                            return <Post title={post.title} text={post.text} />;
                        }

                        return null;
                    })}
                </li>
            ))}
        </ul>
    );
}

export default CategoryList;
