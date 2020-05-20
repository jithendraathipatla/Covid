import React,{useState} from "react"
import HeaderComponent from "../components/header"
import MainImagefrom from "../images/signup-image.webp"
import { css } from "@emotion/core"
import {
  FaUserCircle,
  FaEnvelope,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa"
import { Link } from "gatsby";


const IndexPage = () => {
  const [name, setname] =useState('');
  const [email,setemail] = useState('');
  const [password, setpassword] = useState('');
  const [repeat, setrepeat] = useState('');


  
const handelformsubmit = (e) => {
  e.preventDefault();
  const Name = name;
  const Email = email;
  const Password = password;
  const Rep = repeat;
 

  if( Password !== Rep){
    alert('Password Should Match');
  }
  else if( Name == '' || Email == '' || Password ==   '' || Rep == ''){
     alert('Please Provide all the values');
  }

  else{
    const data = {
      Name,
      Email,
      Password,
      Rep,
    }
    console.log(data);
    document.getElementById("loginform1").reset();
  }
  
};


  return (
  <div>
    <HeaderComponent />
    <div css={main}>
    <div css={signin}>
      <div css={form}>
        <h2>Sign Up</h2>

        <form id="loginform1" onSubmit={handelformsubmit}>
          <div css={icon}>
            <div css={sv}>
              <FaUserCircle />
            </div>
            <div>
              <input type="text" placeholder="Enter Your Name" onChange={(e)=>setname(e.target.value)}  value={name} name="name" required/>
            </div>
          </div>
        

          <div css={icon}>
          <div css={sv}>
            <FaEnvelope />
          </div>
          <div>
            <input type="text" placeholder="Enter Your Email" onChange={(e) => setemail(e.target.value)} vale={email} name="email" required/>
          </div>
        </div>
       
          <div css={icon}>
            <div css={sv}>
              <FaLock />
            </div>
            <div>
              <input type="password" placeholder="Enter Your Password" onChange={(e) => setpassword(e.target.value)} value={password} name="password" required/>
            </div>
          </div>

          
          <div css={icon}>
            <div css={sv}>
              <FaLock />
            </div>
            <div>
              <input type="password" placeholder="Repeat your Password"  onChange={(e) => setrepeat(e.target.value)} value={repeat} name="repeat" required/>
            </div>
          </div>


          <div style={{ marginTop: "30px", display: "flex" }}>
          <div style={{ marginLeft: "-4px" }} css={remember}>
            <input type="checkbox" placeholder="Enter Your Password" required/>
          </div>

          <div style={{ marginLeft: "2px" }}>
            <span
              style={{
                color: "black",
                fontWeight: "300",
                marginLeft: "10px",
              }}
            >
              I agree all statements in Terms of Sevice
            </span>
          </div>
        </div>


          <div css={footer}>
          <div>
            <button css={submtbutton} >Submit</button>
            </div>
           
          </div>
          
        </form>
      </div>
      <div style={{marginLeft: "36px",paddingTop: "30px"}}>
        <img src={MainImagefrom} height="290px" />

        <div style={{textAlign:"center", paddingTop:"28%"}}>
        <span><Link to='/signin'>I am already a Member</Link></span>
      </div>
      </div>
    </div>
    </div>
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


  form {
    input {
      border: none;
      :focus {
        margin-left: 12px;
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
  margin-bottom:20px;
  input {
    padding: 4px 0px 0px 0px;
    margin-left: 12px;
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
