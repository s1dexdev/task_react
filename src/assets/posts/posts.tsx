// This file was created for example

import * as categories from '../../utils/constants/postCategory';
import { IPost } from '../../utils/interfaces/post';

const posts: IPost[] = [
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
    {
        id: 4,
        title: 'Post info',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione?',
        category: categories.INFORMATIONAL,
    },
    {
        id: 5,
        title: 'Post entertainment',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione?',
        category: categories.ENTERTAINING,
    },
    {
        id: 6,
        title: 'Post advertising',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione?',
        category: categories.ADVERTISING,
    },
    {
        id: 7,
        title: 'Post advertising',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione?',
        category: categories.ADVERTISING,
    },
    {
        id: 8,
        title: 'Post advertising',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione?',
        category: categories.ADVERTISING,
    },
];

export default posts;
