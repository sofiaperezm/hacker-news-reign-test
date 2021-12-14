function Main({ children }) {
  return (
    <div>
      <div>Header</div>
      <div>Tabs</div>
      <main>{children}</main>
      <div>Paginacion</div>
    </div>
  );
}

export default Main;
