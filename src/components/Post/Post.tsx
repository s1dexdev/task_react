import { Component } from 'react';
import styles from './Post.module.scss';

function Post({ title, text }: { title: string; text: string }): JSX.Element {
    return (
        <article className={styles.post}>
            <h2 className={styles.post__title}>{title}</h2>
            <p className={styles.post__text}>{text}</p>
        </article>
    );
}

// Class component

// interface Props {
//     title: string;
//     text: string;
// }

// class Post extends Component<Props> {
//     render() {
//         const { title, text } = this.props;

//         return (
//             <article className={styles.post}>
//                 <h2 className={styles.post__title}>{title}</h2>
//                 <p className={styles.post__text}>{text}</p>
//             </article>
//         );
//     }
// }

export default Post;
