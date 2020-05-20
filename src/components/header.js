import React from 'react';
import {Link} from 'gatsby';
import '../globalstyle.css';
import { css } from '@emotion/core';

const Header = () => {
    return (
        <div css={mainheader}>
         <div>
               <Link to='/'>Home</Link>
            </div>
              <div>
               <Link to='/signin'>SignIn</Link>
              </div>

               <div>
               <Link to='/signup'>SignUp</Link>
            
              </div>
        </div>
    );
};

export default Header;


const mainheader = css`
display: flex;
justify-content: space-between;
box-shadow: 0px 0px 2px 3px rgba(0,0,0,0.2);
padding: 10px 20px;
    a{
        text-decoration:none;
        font-size:22px;
        list-style-type: none;
    }
`
const nav = css`
 display: flex;
 justify-content: space-between;
`