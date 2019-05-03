import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        border: '1px solid black',
        padding: '5px',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        background: 'blue',
        color: '#fff',
        boxShadow: '0 2px 3px #ccc'
    };

    return (
        <input type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />
    )
};

export default userInput;