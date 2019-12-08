import React from 'react';

export default (props) => (<div>
    <h2>Note title: {props.title}</h2>
    <br/>
    <p>{props.text}</p>
    <p style={{color: 'red'}}>{props.children}</p>
</div>)