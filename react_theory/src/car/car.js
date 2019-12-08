import React from 'react';

export default (props) => (
<div>
    <h2>Car name: {props.name}</h2>
    <p>Year <strong>{props.year}</strong></p>
    <p style={{color: 'red'}}>{props.children}</p>
    <button onClick={props.onChangeTitle}>Click</button>
</div>
)