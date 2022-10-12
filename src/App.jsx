// import UserInput from './components/UserInput'
import router from "./router";
import { BrowserRouter, useRoutes } from "react-router-dom";
import './App.css'


// function App() {
  

//   return (
//    <div>
//     {/* <UserInput /> */}
   
//    </div>
//   )
// }

// export default App

function App(){
  const element = useRoutes(router)
  return element  
}

export default () => <BrowserRouter><App /></BrowserRouter>


