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
    const postsData = await APIdata.hits;
    console.log(postsData);
    const posts = [];
    Object.keys(postsData).forEach((key) => {
      const post = {
        id: postsData[key].story_id,
        author: postsData[key].author,
        story_title: postsData[key].story_title,
        story_url: postsData[key].story_url,
        created_at: postsData[key].created_at,
      };
      posts.push(post);
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
          <Post key={post.id} />
        ))}
      </div>
    </Main>
  );
}

export default AllPage;
