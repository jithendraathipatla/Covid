import React, {useState} from 'react';
import Theme from '../logincontext';

const ThemeProvider = (props) =>{
    const [state, setState] = useState(false);
    return(
    <Theme.Provider value={{state}}>
     {props.childten}
    </Theme.Provider>
    );
}

export default ThemeProvider;