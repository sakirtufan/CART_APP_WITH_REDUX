import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {
  Switch,
  Route,
} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddProduct from "../products/AddProduct";


const App = () => {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/product" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>
        <Route path="/add" exact component={ AddProduct }/>
      </Switch>
    </Container>
  );
}

export default App;
