import  {useState} from 'react';
import './App.css';

const initialvalues = {username : "", mailaddress : "",  password : ""};
function App() {
  const [A,setA] = useState(initialvalues);
  return (
   <div>
    <h1>ログインフォーム</h1>
    <hr></hr>
    <div>
    <label>username</label>
      <input
      type = "text"
      name = "username"
      placeholder = "username"></input>
      <br></br>
        <label>username</label>
      <input
      type = "text"
      name = "username"
      placeholder = "username"></input>
      <br></br>
      <label>username</label>
      <input
      type = "text"
      name = "username"
      placeholder = "username"></input>
      <br></br>
      <button>login</button>
    </div>
   </div>
  );
}

export default App;

test
test-nohara