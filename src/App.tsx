import Container from './components/Container';
import PostList from './components/PostList';
import CategoryList from './components/CategoryList';
import styles from './App.module.css';

import posts from './utils/posts';

function App() {
    return (
        <Container>
            <div className={styles.listWrapper}>
                <PostList posts={posts} />
                <CategoryList posts={posts} />
            </div>
        </Container>
    );
}

export default App;
