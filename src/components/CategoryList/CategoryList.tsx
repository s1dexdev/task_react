import { Component } from 'react';
import Post from '../Post';
import * as categories from '../../utils/constants/postCategory';
import { IPost } from '../../utils/interfaces/post';
import styles from './CategoryList.module.scss';

function CategoryList({ posts }: { posts: IPost[] }): JSX.Element {
    const listCategories: string[] = Object.values(categories);

    return (
        <ul className={styles.list}>
            {listCategories.map(category => (
                <li key={category} className={styles.list__item}>
                    <h2 className={styles.list__title}>{category}</h2>

                    {posts.map((post: IPost) => {
                        if (category === post.category) {
                            return (
                                <Post
                                    key={post.id}
                                    title={post.title}
                                    text={post.text}
                                />
                            );
                        }

                        return null;
                    })}
                </li>
            ))}
        </ul>
    );
}

// Class component

// interface Props {
//     [key: string]: IPost[];
// }

// class CategoryList extends Component<Props> {
//     render() {
//         const { posts } = this.props;
//         const listCategories: string[] = Object.values(categories);

//         return (
//             <ul className={styles.list}>
//                 {listCategories.map(category => (
//                     <li key={category} className={styles.list__item}>
//                         <h2 className={styles.list__title}>{category}</h2>

//                         {posts.map((post: IPost) => {
//                             if (category === post.category) {
//                                 return (
//                                     <Post
//                                         key={post.id}
//                                         title={post.title}
//                                         text={post.text}
//                                     />
//                                 );
//                             }

//                             return null;
//                         })}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }

export default CategoryList;
