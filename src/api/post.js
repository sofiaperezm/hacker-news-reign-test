import { getItem } from "../utils/storage";

export async function getPosts(APIurl, pageNumber) {
  try {
    const response = await fetch(`${APIurl}&page=${pageNumber}`);
    const APIdata = await response.json();
    const postsData = APIdata.hits;
    const posts = [];
    Object.keys(postsData).forEach((key) => {
      const post = {
        id: postsData[key].objectID,
        author: postsData[key].author,
        title: postsData[key].story_title,
        url: postsData[key].story_url,
        createdAt: postsData[key].created_at,
      };
      if (post.author && post.createdAt && post.title && post.url) {
        posts.push(post);
      }
    });
    return posts;
  } catch (error) {
    return [];
  }
}

export function markAsFavorite(posts) {
  const favorites = getFavoritePosts();

  return posts.map((post) => {
    const favorite = favorites.find((fav) => fav.id === post.id);
    return { ...post, isFav: favorite ? true : false };
  });
}

export function getFavoritePosts() {
  return getItem("favorites") || [];
}
