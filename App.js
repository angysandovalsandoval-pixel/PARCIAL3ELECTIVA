import "./App.css";

import ProductList from "./components/ProductList";


function App() {
  return (
    <div>
      <h1 style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "32px"
      }}>
        Productos - Angy Sandoval
      </h1>

      <ProductList />
    </div>
  );
}

export default App;
