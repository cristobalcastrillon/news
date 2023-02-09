import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './views/Homepage';
import NewsDetail from './components/NewsDetail';

function App() {

  let country = 'co'
  const apiKey = '5a24644ba4464f08afa45ba41dabf7a4'

  return (
    <div>
      <Router>
        <Routes>
          
          <Route exact path ="/" element = {<Homepage country={country} apiKey={apiKey}/>}>
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
