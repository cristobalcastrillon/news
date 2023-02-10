import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './views/Homepage';
import NewsDetail from './components/NewsDetail';
import Login from './views/Login';
import Signup from './views/Signup';
import RequestLog from './views/RequestLog';
import Auth from './services/Auth';

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route exact path="/" element={<Auth/>}/>
          <Route exact path="/home" element={<Homepage/>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

          <Route path="/news/:id" element={<NewsDetail />}/>

          <Route path ="/request-log" element = {<RequestLog/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
