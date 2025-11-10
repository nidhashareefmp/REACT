
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './React-router-dom/Home'
import About from './React-router-dom/About'
import Products from './Dynamic-routing/Products'
import ProductDetail from './Dynamic-routing/ProductDetail'
// import Home from './Functional-components/hooks/useContext/theme/Home' 
// import { ThemeProvider } from './Functional-components/hooks/useContext/theme/ThemeContext'
// import { UserApiProvider } from './Functional-components/hooks/useContext/User-list/UserApiContext'
// import UserList from './Functional-components/hooks/useContext/User-list/UserList'
// import UseEff from './Functional-components/hooks/UseEffect/UseEff'
// import UserList from './Functional-components/hooks/UseEffect/UserList'
// import Counter from './Functional-components/hooks/useState/Counter'
// import ProfileForm from './Functional-components/hooks/useState/ProfileForm'
// import TextInput from './Functional-components/hooks/useState/TextInput'
// import ToggleButton from './Functional-components/hooks/useState/ToggleButton'
// import Props from './Functional-components/Props'
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
      {/* <Counter/> */}
      {/* <TextInput/> */}
      {/* <ToggleButton/> */}
      {/* <ProfileForm/> */}
      {/* <UseEff/> */}
      {/* <UserList/> */}


      {/* -----------useContext---------------- */}
      {/* -------1.Theme------ */}
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}

      {/* -----2.userlist ----- */}
      {/* <UserApiProvider>
      <UserList/>
    </UserApiProvider> */}

      {/* ------react-router-dom -------- */}
      {/* 1.Basic  */}
      {/* <div>
        <nav>
          <Link to='/'>Home</Link> |
          <Link to='/about'>About</Link>

        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />


        </Routes>
      </div> */}
      
      {/* 2.dynamic-routing */}
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>

      </Routes>
     
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
