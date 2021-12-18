import { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Dropdown from "../components/Dropdown/Dropdown";
import Post from "../components/Post/Post";
import { DROPDOWN_OPTIONS } from "../utils/constants";
import { getPosts, markAsFavorite } from "../api/post";
import { setItem, getItem } from "../utils/storage";

const DEFAULT_TOPIC = DROPDOWN_OPTIONS[0].value;

function AllPage() {
  const [selectedTopic, setSelectedTopic] = useState(DEFAULT_TOPIC);
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const currentFilter = getItem("filter");
    setSelectedTopic(currentFilter || DEFAULT_TOPIC);
  }, []);

  useEffect(() => {
    async function _getPosts() {
      let _posts = await getPosts(selectedTopic, 0);
      _posts = markAsFavorite(_posts);
      setPosts(_posts);
    }
    _getPosts();
    setPageNumber(0);
  }, [selectedTopic]);

  useEffect(() => {
    async function _getPostsByPage() {
      let _posts = await getPosts(selectedTopic, pageNumber);
      _posts = markAsFavorite(_posts);
      setPosts((prevState) => [...new Set([...prevState, ..._posts])]);
    }
    if (pageNumber !== 0) {
      _getPostsByPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  function handleDropdownChange(value) {
    setSelectedTopic(value);
    setItem("filter", value);
  }

  function handleFavActions() {
    const _posts = markAsFavorite(posts);
    setPosts(_posts);
  }

  function loadMorePosts() {
    if (selectedTopic.length) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <Main currentPage="All">
      <div className="posts-container">
        <div className="dropdown-container">
          <Dropdown
            options={DROPDOWN_OPTIONS}
            defaultOption={selectedTopic}
            handleChange={handleDropdownChange}
          />
        </div>
        {posts.map((post) => (
          <Post
            key={post.id + post.author}
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
      <button type="button" className="button" onClick={loadMorePosts}>
        Load more
      </button>
    </Main>
  );
}

export default AllPage;
