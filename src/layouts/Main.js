import Header from "../components/Header/Header";
import Tabs from "../components/Tabs/Tabs";

function Main({ currentPage, children }) {
  return (
    <div>
      <Header></Header>
      <Tabs selected={currentPage} labels={["All", "My faves"]}></Tabs>
      <main>{children}</main>
      <div>Paginacion</div>
    </div>
  );
}

export default Main;
