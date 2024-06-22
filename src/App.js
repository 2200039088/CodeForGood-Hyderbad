import './App.css';
import React, {useState,useEffect} from 'react'
// import Navb from './components/Navb/Navb.js';
// import Users from './components/Content/Users.js'
// import Footer from './components/Footer/Footer.js';
// import Counter from './components/Counter/Counter.js'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/Routing/RootLayout';
import Home from './components/Content/Home';
import Register from './components/Content/Register';
import Techno from './components/Content/Techno';
import Login from './components/Content/Login';
import EventList from './components/Content/EventList';


function App() {
  // {
  // let[Facts,setFacts]=useState([])
  // let [Count,setCount]=useState(0)
  //   let Incr = ()=>{
  //     if (Count<4) {
  //       setCount(Count+1);}
  //   }
  // let CatFacts= async ()=>{
  //  await fetch('https://cat-fact.herokuapp.com/facts')
  //   .then(res=>res.json())
  //   .then(Facts=>setFacts(Facts))
  //  }
  // }
  let router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout />,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>

        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'eve',
          element:<EventList/>
        }
      ]
    },
  ])

  return (
    <div>
    {/* <div>
     <Navb />
     <Users />
     <Counter />

     <h1>Cat Facts</h1>
     <button onClick={CatFacts}>Generate Facts</button>
     {
      Facts.length>0 && 
      <div>
      <p>{Facts[0].text}</p>
      <button onClick={Incr}>More Facts</button> 
      {Count>0 &&
      <p>{Facts[Count].text}</p>
      }
      </div>
     }
       
     <Footer />
    </div> */}
    <RouterProvider router={router} />

    </div>
  );
}

export default App;