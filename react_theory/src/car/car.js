import React from 'react';

export default (props) => (
<div style={{
    border: '1px solid black',
    marginBottom: '10px',
    padding: '15px'
}}>
    <h2>Car name: {props.name}</h2>
    <p>Year <strong>{props.year}</strong></p>
    <p style={{color: 'red'}}>{props.children}</p>
    <input type="Text" onChange={props.onChangeName} value={props.name}></input>
    <button onClick={props.deleteCar}>Delete this line</button>
</div>
)