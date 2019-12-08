import React from 'react';

// function Car(){     return(         <h2>This is car component</h2>     ) }

// const Car = () => (<div>
//     <strong>This is car</strong>
// </div>)

export default (props) => (<div>
    <h2>Car name: {props.name}</h2>
    <p>Year <strong>{props.year}</strong></p>
    <p style={{color: 'red'}}>{props.children}</p>
</div>)