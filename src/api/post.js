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
        storyTitle: postsData[key].story_title,
        storyUrl: postsData[key].story_url,
        createdAt: postsData[key].created_at,
      };
      if (post.author && post.createdAt && post.storyTitle && post.storyUrl) {
        posts.push(post);
      }
    });
    return posts;
  } catch (error) {
    return [];
  }
}
