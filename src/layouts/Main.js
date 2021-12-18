import Header from "../components/Header/Header";
import Tabs from "../components/Tabs/Tabs";
import { TABS } from "../utils/constants";

function Main({ currentPage, children }) {
  return (
    <div>
      <Header></Header>
      <main className="content">
        <Tabs selected={currentPage} labels={TABS}></Tabs>
        {children}
      </main>
    </div>
  );
}

export default Main;
