import { Post } from "#site/content";

export function SortPosts(posts: Array<Post>) {
    return posts.sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        };
        if (a.date < b.date) {
            return 1;
        };
        return 0;
    });
};