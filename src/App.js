import React, { Component } from 'react';
import Registerform from './components/registerform';
import Navbar from './components/navbar';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import'./App.css'


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      members:{},
      number:0,
      loading:false,
    }
  }

  render() { 
    return (
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home/>} />
          <Route path="singin"index element={<Registerform/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    );
  }

  getDate = (unix , formatted) =>{
    console.log(unix);
    console.log(formatted);
    console.log("hi")
  }

  recordMember = (value) => {
    // if (this.state.members === null){
    //   let val = {};
    //   let groupName = value.fname+value.lname;
    //   val = {...val , [groupName]:{}}
    //   val = {...val[0],[groupName]:value}
    //   this.setState({members:val})
    //   console.log("first");
    // }
    // else{
    //   let groupName = value.fname+value.lname;
    //   let val = {...this.state.members[0],[groupName]:value}
    //   this.setState({members:val})
    //   console.log("second");
    // }
    console.log(value)
    let val = {...this.state.members, amir:value}
    console.log(val)
    this.setState({members:val})
    console.log(this.state.members)
  }

}
 
export default App;


