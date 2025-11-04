
import './App.css'
// import Conditional from './embedding-expression/Conditional'
// // import FunctionCalling from './embedding-expression/FunctionCalling'
// import Welcome from './embedding-expression/Welcome'
// // import Basic from './Basic'

// // function App() {

//   return (
//     <>
      
//       {/*-------------- {embedding expression}------------- */}
//       {/* <Basic/> */}
//       {/* <Welcome/> */}
//       {/* <FunctionCalling/> */}
//       {/* {<Conditional/>} */}
//     </>
//   )
// }

// export default App

// ---------------class components----------------

import React, { Component } from 'react'
import Counter from './ClassComponents/Counter'
import Mounting from './ClassComponents/LifeCycleMethods/Mounting'
import Update from './ClassComponents/LifeCycleMethods/Update'
// import BasicClass from './ClassComponents/BasicClass'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <BasicClass/> */}
        {/* <Counter/> */}

        {/* -------life cycle methods------- */}
        {/* <Mounting/> */}
        <Update/>
      </div>
    )
  }
}
