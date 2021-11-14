import './App.css';
import { FacebookButton } from "react-social";
import PlayButton from './components/PlayButton';

function App() {
 let url = "http://172.25.43.57:3001/Start";
 var bb = 'hello'
  return (
    <div  className="div">
        <h1>Share and Modal Testing</h1>
      <FacebookButton url={url} appId={427728962052993} bb={bb}>         
        {" Share My Website "}
      </FacebookButton> 
      <br/>
      <PlayButton/>
    </div>
  );
}
export default App;
