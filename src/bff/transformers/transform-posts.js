export const transformPosts = (dbPost) => ({
  id: dbPost.id,
  title: dbPost.title,
  content: dbPost.content,
  imageUrl: dbPost.image_url,
  publishedAt: dbPost.published_at,
});
