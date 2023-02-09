import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './views/Homepage';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route exact path ="/" element = {<Homepage/>}>
          </Route>

          {/* TODO: Because the News API does not return an id for each news, create an id generator. */}
          <Route path ="/news/:id" element = {<NewsDetail/>}>
          </Route>

          {/* <Route path ="/request-log" element = {<Homepage/>}>
          </Route> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
