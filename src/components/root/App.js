import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {
  Switch,
  Route,
} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddProduct from "../products/AddProduct";
import EditProduct from "../products/EditProduct";


const App = () => {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/products" exact component={Dashboard}/>
        <Route path="/cart"  component={ CartDetail }/>
        <Route path="/add"  component={ AddProduct }/>
        <Route path="/products/:id"  component={ EditProduct }/>
      </Switch>
    </Container>
  );
}

export default App;
