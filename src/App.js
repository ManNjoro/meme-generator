// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Meme from "./components/Meme"
import React from "react"

function App() {
  // const [isGoingOut,setIsGoingOut] = React.useState(true)
  // function flip() {
  //   setIsGoingOut(prevState => !prevState)
  // }
  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <h1>Do I fell like going out tonight?</h1> */}
      {/* <div onClick={flip}>
        <h1>{isGoingOut ? "Yes": "No"}</h1>
      </div> */}
    </div>
  );
}

export default App;
