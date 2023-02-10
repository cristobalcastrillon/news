import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './views/Homepage';
import NewsDetail from './components/NewsDetail';
import Login from './views/Login';
import Signup from './views/Signup';

function App() {

  const newsApiKey = '5a24644ba4464f08afa45ba41dabf7a4'
  const weatherApiKey = 'f94107df80de82483c65aa2e29cb4eb0'

  return (
    <div>
      <Router>
        <Routes>

          <Route exact path="/"
            element={<Homepage
              newsApiKey={newsApiKey}
              weatherApiKey={weatherApiKey} />}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

          <Route path="/news/:id" element={<NewsDetail />}/>

          {/* <Route path ="/request-log" element = {<Homepage/>}>
          </Route> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
