function App() {
  function onClick() {}
  return (
    <Foo>
      <button id="btn" onClick={onClick} key="123">
        Click Me
      </button>
    </Foo>
  );
}

function Foo({ children }) {
  return <div>{children}</div>;
}
export default App;
