import Container from './components/Container';
import PostList from './components/PostList';
import * as categories from './utils/constants/postCategory';

// Posts for testing
const posts = [
    {
        id: 1,
        title: 'Post info',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione?',
        category: categories.INFORMATIONAL,
    },
    {
        id: 2,
        title: 'Post entertainment',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione?',
        category: categories.ENTERTAINING,
    },
    {
        id: 3,
        title: 'Post advertising',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione?',
        category: categories.ADVERTISING,
    },
];

function App() {
    return (
        <Container>
            <PostList posts={posts} />
        </Container>
    );
}

export default App;
