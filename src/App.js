import './App.css';
import Header from './containers/Hearders';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route  exact path ="/"  element = {<ProductListing/>} /> 
          <Route path = '/products/:productId' exact element = {<ProductDetails/>}/>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
