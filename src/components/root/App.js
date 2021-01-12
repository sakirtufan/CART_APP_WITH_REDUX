import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";


const App = () => {
  return (
    <Container>
      <Navi/>
      <Dashboard/>
    </Container>
  );
}

export default App;
