import Counter from "./counter";

function App() {
  return (
    <div m="t-5">
      <h1 text="3xl red center">Hello, UnoCSS</h1>
      <div className="grid place-items-center mt-5">
        <Counter />
      </div>
    </div>
  );
}

export default App;
