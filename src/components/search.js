import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {css} from '@emotion/core';


const Search = (props) => {
    return(
    <div>
    <div css={search}>
     <form onSubmit={props.search}>
     <input placeholder="search for states" name="search" onChange={props.change}/>
     <div style={{marginLeft:"-20px", marginTop:"10px"}}>
     <FaSearch/>
     </div>
     </form>
     </div>
    </div>
    )
}

export default Search;

const search = css`
padding-left:2px;
text-align: center;
justify-content: center;
display:flex;
input{
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 7px;
    box-shadow: 0px 0px 12px 6px rgba(226, 222, 231, 0.76);
}
form{
    display:flex;
}
`

