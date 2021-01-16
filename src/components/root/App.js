import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {
  Switch,
  Route,
} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import ProductForm from "../products/ProductForm";


const App = () => {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/product" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>
        <Route path="/add" exact component={ProductForm }/>
      </Switch>
    </Container>
  );
}

export default App;
