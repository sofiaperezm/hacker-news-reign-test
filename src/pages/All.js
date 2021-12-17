import Main from "../layouts/Main";
import Dropdown from "../components/Dropdown/Dropdown";
import { DROPDOWN_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import Post from "../components/Post/Post";

const DEFAULT_TOPIC = DROPDOWN_OPTIONS[0].value;

function AllPage() {
  const [selectedTopic, setSelectedTopic] = useState(DEFAULT_TOPIC);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function _getPosts() {
      const _posts = await getPosts(selectedTopic);
      setPosts(_posts);
    }
    _getPosts();
  }, [selectedTopic]);

  async function getPosts(APIurl) {
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
    // TO DO: implement try and catch
  }

  function handleDropdownChange(value) {
    setSelectedTopic(value);
  }

  return (
    <Main currentPage="All">
      <Dropdown
        options={DROPDOWN_OPTIONS}
        defaultOption={selectedTopic}
        handleChange={handleDropdownChange}
      />
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            author={post.author}
            title={post.storyTitle}
            url={post.storyUrl}
            createdAt={post.createdAt}
            isFav={false}
          />
        ))}
      </div>
    </Main>
  );
}

export default AllPage;
