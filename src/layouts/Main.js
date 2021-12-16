import Header from "../components/Header/Header";
import Tabs from "../components/Tabs/Tabs";
import Post from "../components/Post/Post";
import { TABS } from "../utils/constants";

function Main({ currentPage, children }) {
  return (
    <div>
      <Header></Header>
      <main className="content">
        <Tabs selected={currentPage} labels={TABS}></Tabs>
        {children}
        <Post></Post>
        <div>Paginacion</div>
      </main>
    </div>
  );
}

export default Main;
