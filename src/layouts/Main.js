import Header from "../components/Header/Header";

function Main({ children }) {
  return (
    <div>
      <Header></Header>
      <div>Tabs</div>
      <main>{children}</main>
      <div>Paginacion</div>
    </div>
  );
}

export default Main;
