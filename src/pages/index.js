import React,{useContext} from "react";
import HeaderComponent from '../components/header';
import {Link} from 'gatsby';
import Themecontext from '../context/logincontext';


const IndexPage = () => {
const con = useContext(Themecontext);
return(
  console.log(con),
  <div>
    <HeaderComponent/>
    <div style={{textAlign:"center", marginTop:"15%"}}>
      <h4> <Link to='/signin'>SingIn</Link>  or <Link to='/signup'>Signup</Link> to view the Content</h4>
      <p>Note: Use athipatala.jithendra@gmail.com and Jithendra@18 as Password to see the content in the signup page</p>
    </div>
  </div>
)
}

export default IndexPage;
