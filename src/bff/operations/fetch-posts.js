import { getPosts, getComments } from "../api";
import { getCommentsCount } from "../utils";

export const fetchPosts = async (searchPhrase, page, limit) => {
  const [posts, comments] = await Promise.all([
    getPosts(page, limit, searchPhrase),
    getComments(),
  ]);
  return {
    error: null,
    res: {
      posts: posts.map((post) => ({
        ...post,
        commentsCount: getCommentsCount(comments, post.id),
      })),
    },
  };
};
