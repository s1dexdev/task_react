import { Component } from 'react';
import Post from '../Post';
import { IPost } from '../../utils/interfaces/post';
import styles from './PostList.module.scss';

function PostList({ posts }: { posts: IPost[] }): JSX.Element {
    return (
        <ul className={styles.list}>
            {posts.map((post: IPost) => (
                <li key={post.id} className={styles.list__item}>
                    <Post title={post.title} text={post.text} />
                </li>
            ))}
        </ul>
    );
}

// Class component

// interface Props {
//     [key: string]: IPost[];
// }

// class PostList extends Component<Props> {
//     render() {
//         const { posts } = this.props;

//         return (
//             <ul className={styles.list}>
//                 {posts.map((post: IPost) => (
//                     <li key={post.id} className={styles.list__item}>
//                         <Post title={post.title} text={post.text} />
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }

export default PostList;
