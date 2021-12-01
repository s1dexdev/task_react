import PostList from './components/PostList';
import CategoryList from './components/CategoryList';

import posts from './assets/posts';

function App() {
    return (
        <>
            <PostList posts={posts} />
            <CategoryList posts={posts} />
        </>
    );
}

export default App;
