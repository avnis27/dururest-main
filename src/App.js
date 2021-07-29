import logo from './logo.svg';
import './App.css';
import Checkin from '../src/component/checkinpage/Checkin'
import { Copyright } from '../src/component/copyright/Copyright';

function App() {
  return (
    <div className="App">
      <Checkin/>
      <Copyright/>
      {/* <PrivacyModal/> */}
    </div>
  );
}

export default App;
