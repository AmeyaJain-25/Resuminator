import './App.css';
import { Button, Jumbotron, Container } from "reactstrap"
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron >
          <Container >
            <h1 className="display-2" style={{ color: "#282C34" }}>Resuminator</h1>
            <p className="lead" style={{ color: "#282C34" }}>Heyy, haven't made resume yet? Don't worry.. we are here to get your Resume Ready!</p>
          </Container>
        </Jumbotron>
        <Link to="/getstarted"><Button color="primary" size="lg">Get Started</Button></Link>

      </header>
    </div>
  );
}

export default App;
