import { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Post from "../components/Post/Post";
import { markAsFavorite, getFavoritePosts } from "../api/post";

function FavsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const favoritePosts = getFavoritePosts();
    setPosts(favoritePosts);
  }, []);

  function handleFavActions() {
    const _posts = markAsFavorite(posts);
    setPosts(_posts);
  }

  return (
    <Main currentPage="My faves">
      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            title={post.title}
            url={post.url}
            createdAt={post.createdAt}
            isFav={post.isFav}
            handleFavorite={handleFavActions}
          />
        ))}
      </div>
    </Main>
  );
}

export default FavsPage;
