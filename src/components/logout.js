import React from 'react';

const  Logout = (props) => {
    return (
        <div>
            <button onClick={props.log}>Logout</button>
        </div>
    );
};

export default Logout;