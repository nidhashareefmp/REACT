
import './App.css'
import Counter from './Functional-components/hooks/useState/Counter'
import Props from './Functional-components/Props'
// import Basic from './Functional-components/Basic'
// import State from './Functional-components/State'
// import Conditional from './embedding-expression/Conditional'
// // import FunctionCalling from './embedding-expression/FunctionCalling'
// import Welcome from './embedding-expression/Welcome'
// // import Basic from './Basic'

function App() {

  return (
    <>
      
      {/*-------------- {embedding expression}------------- */}
      {/* <Basic/> */}
      {/* <Welcome/> */}
      {/* <FunctionCalling/> */}
      {/* {<Conditional/>} */}

      {/* ----------------functional-components----------------  */}
      {/* <Basic/> */}
      {/* <State/> */}
      {/* <Props/> */}

      {/* ----------hooks---------- */}
      <Counter/>
    </>
  )
}

export default App

// ---------------class components----------------

// import React, { Component } from 'react'
// import UnMounting from './ClassComponents/LifeCycleMethods/UnMounting'
// import Counter from './ClassComponents/Counter'
// import Mounting from './ClassComponents/LifeCycleMethods/Mounting'
// import Update from './ClassComponents/LifeCycleMethods/Update'
// import BasicClass from './ClassComponents/BasicClass'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <BasicClass/> */}
//         {/* <Counter/> */}

//         {/* -------life cycle methods------- */}
//         {/* <Mounting/> */}
//         {/* <Update/> */}
//         {/* <List/> */}
//         <UnMounting/>
//       </div>
//     )
//   }
// }
