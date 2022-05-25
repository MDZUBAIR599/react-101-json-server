

import './App.css';
// import { useEffect } from 'react';
import Todos from './components/Todos';
function App() {
  // const [count, setCount]=useState(0)


  // useEffect(()=>{
  //   console.log(2)
  // });
  return (
    <div className="App">Todos

       {/* onClick={()=>setCount(count+1)}>
       Hello:{count} */}
       <Todos/>
       
     </div>

  );
}

export default App;
