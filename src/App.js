import "./App.css";
import Headers from "./containers/Headers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductsDetails from "./containers/ProductsDetails";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Headers />
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route path="/products/:id" exact element={<ProductsDetails />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
