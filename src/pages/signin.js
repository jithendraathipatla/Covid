import React, {useState, useContext} from "react"
import HeaderComponent from "../components/header"
import MainImagefrom from "../images/signin-image.webp"
import { css } from "@emotion/core"
import TabsContainer from '../components/tab';


import {
  FaEnvelope,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa"
import { Link } from "gatsby"





const IndexPage = () => {
   const [loggedin, setloggedin] = useState(false);
   const [emailid, setemailid] = useState('');

   const handellogout = () => {
     setloggedin(false);
   }

const handelformsubmit = (e) => {
  e.preventDefault();
  const Email = e.target.elements.email.value;
  const Password = e.target.elements.password.value;
  const Rem = e.target.elements.rem.value;
  const data = {
    Email,
    Password,
    Rem,
  }
  if(data.Email === "athipatala.jithendra@gmail.com" && data.Password==="Jithendra@18"){
    alert('Sign-in successfull');
    setloggedin(true);
    document.getElementById("loginform").reset();
    setemailid(data.Email);
  }
  else{
    alert("Please use the Data given in Home page");
  }
}

  const indexone = () => {
    return(
      <div>
      <HeaderComponent />
    <div css={main}>
    <div css={signin}>
      <div>
        <img src={MainImagefrom} height="290px" />
      </div>
      <div css={form}>
        <h1>Sign In</h1>
        <br />
        <form onSubmit={handelformsubmit} id="loginform">
          <div css={icon}>
            <div css={sv}>
              <FaEnvelope />
            </div>
            <div>
              <input type="email" placeholder="Enter Your Email" name="email" required/>
            </div>
          </div>
          <br />

          <div css={icon}>
            <div css={sv}>
              <FaLock />
            </div>
            <div>
              <input type="password" placeholder="Enter Your Password" name="password" required/>
            </div>
          </div>

          <div style={{ marginTop: "30px", display: "flex" }}>
            <div style={{ marginLeft: "-4px" }} css={remember}>
              <input type="checkbox" placeholder="Enter Your Password" name="rem"/>
            </div>

            <div style={{ marginLeft: "2px" }}>
              <span
                style={{
                  color: "black",
                  fontWeight: "300",
                  marginLeft: "21px",
                }}
              >
                Remember me
              </span>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button css={submtbutton}>Submit</button>
          </div>
          
        </form>
      </div>
    </div>
    <div css={footer}>
    <div>
     <span><Link to='/signup'>Create New Account</Link></span>
    </div>
    
    <div css={footericons}>
       <div>
      <span>:or SignIn using </span>
      </div>
      <div>
      <FaFacebook style={{background:"#3b5998"}}/> <FaGoogle style={{background:"#db3236"}}/> <FaTwitter  style={{background:"#00acee"}}/>
      </div>
    </div>
  </div>
    </div>
  </div>
    )
  }

  return(
    <div>
    {loggedin === false ? indexone() : <div><div style={{textAlign:"center"}}><h1>Welcome {emailid}</h1></div><TabsContainer logout={handellogout}/></div>}
    </div>
  )
}



export default IndexPage

const footericons = css`
 display: flex;
 svg{
   font-size:15px;
   margin-left:7px;
   padding:7px;
   margin-top:-7px;
   border:1px solid white;
   border-radius:5px;
   color:white;
 }
`
const footer = css`
  display: flex;
  justify-content: space-between;
  margin-top:70px;
  margin-bottom:10px;
  margin-right:32px;
`
const main = css`
padding:40px;
width:600px;
    margin-top:1%;
   margin-left: 50%;
   transform: translate(-50%, 10px);
   transform: translate(-50%,10px);
   border: 1px solid #eee;
   padding:3% 3%;
   padding-right:30px;
   border-radius: 23px;
   box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
`

const signin = css`
 display:flex;
 justify-content: space-between;
`

const form = css`
  h1 {
    margin-top: 0px;
  }
  margin-left:20px;

  form {
    input {
      border: none;
      :focus {
        margin-left: 25px;
      }
    }
  }
`

const remember = css`
  input {
    border: none;
    :focus {
      margin-left: 4px !important;
    }
  }
`

const icon = css`
  display: flex;
  border-bottom: 1px solid black;
  input {
    padding: 4px 0px 0px 0px;
    margin-left: 25px;
    font-size: 15px;
    margin-top: 12px;
  }
`

const sv = css`
  margin-top: 15px;
  font-size: 15px;
  margin-bottom: -3px;
  svg {
    color: #0000008c;
  }
`

const submtbutton = css`
  padding: 10px 20px;
  border-radius: 3px;
  color: #ffff;
  background: #00bcd4;
  text-align: center;
  border: 1px solid #00bcd4;
  font-size: 15px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  letter-spacing: 1px;
  :hover{
    cursor:pointer;
  }
`
