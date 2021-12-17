export async function getPosts(APIurl) {
  try {
    const response = await fetch(`${APIurl}`);
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
